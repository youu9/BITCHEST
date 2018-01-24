<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use DB;
use App\Currency;
use Carbon\Carbon;
class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'is_verified', 'remember_token', 'role'
    ];
 
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function transactions(){
        return $this->hasMany('App\Transaction');
    }

    public function getWallet($id){
        $out = [];

        $currencies = DB::table('transactions')
        ->join('quotations', 'quotations.id', '=', 'transactions.quotation_id')
        ->join('currencies', 'currencies.id', '=', 'transactions.currency_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->select('currencies.id as id','currencies.name as name', 'currencies.symbol as symbol', 'transactions.quantity as quantity', 'quotations.rate as price')
        ->where('users.id', '=', $id)
        ->where('transactions.state', '=', 'own')
        ->get();
        $date = new Carbon();
        $currencies = $currencies->all();
        for ($i=0; $i < count($currencies) ; $i++) { 
            $currency = Currency::find($currencies[$i]->id);
            $quotationToday = $currency->quotation($date->format('Y-m-d'));
            $quotationToday = $quotationToday->all();
            $currencies[$i]->price = $quotationToday[0]->rate * $currencies[$i]->quantity;
            for($j = 0; $j < count($currencies); $j++){
                if($i == $j){
                    continue;
                }
               
                if($currencies[$i]->id === $currencies[$j]->id){
                    $currencies[$i]->quantity = $currencies[$i]->quantity + $currencies[$j]->quantity;
                    array_splice($currencies, $j, 1);
                }
            }
        }
        

        $totalSold = DB::table('transactions')
        ->join('quotations', 'quotations.id', '=', 'transactions.quotation_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->select(DB::raw('sum(quotations.rate * transactions.quantity) as total'))
        ->where('users.id', '=', $id)
        ->where('transactions.state', '=', "sold")
        ->get();

        $totalOwn = DB::table('transactions')
        ->join('quotations', 'quotations.id', '=', 'transactions.quotation_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->select(DB::raw('sum(quotations.rate * transactions.quantity) as total'))
        ->where('users.id', '=', $id)
        ->where('transactions.state', '=', "own")
        ->get();

        $out = [ 'currencies' => $currencies , 'total' => $totalSold[0]->total - $totalOwn[0]->total ];
        
        return $out;
    }
    public function getTransactionByCurrencyId($id){

        $transactions = DB::table('transactions')
        ->join('currencies', 'currencies.id', '=', 'transactions.currency_id')
        ->join('quotations', 'quotations.id', '=', 'transactions.quotation_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->select("transactions.*", "currencies.name", "quotations.rate")
        ->where('users.id', '=', $this->id)
        ->where('currencies.id', '=', $id)
        // ->where('quotations.currency_id', '=', $id)
        ->where('transactions.state', '=', 'own')
        ->get();
        $currency = Currency::find($id);
        $date = new Carbon();
        $transactions = $transactions->all();

        $quotationToday = $currency->quotation($date->format('Y-m-d'));

        foreach($transactions as $transaction){
            $transaction->diff = $quotationToday[0]->rate - $transaction->rate;
        }
        return $transactions;
    }
    
    /**
     * hash password before update
     */
    public function setPasswordAttribute($password)
    {   
        $this->attributes['password'] = bcrypt($password);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
