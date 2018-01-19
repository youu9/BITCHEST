<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use DB;

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

        $total = DB::table('transactions')
        ->join('quotations', 'quotations.id', '=', 'transactions.quotation_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->select(DB::raw('sum(quotations.rate * transactions.quantity) as total'))
        ->where('users.id', '=', $id)
        ->where('transactions.state', '=', "own")
        ->get();

        $out = [ 'currencies' => $currencies , 'total' => $total[0]->total ];
        
        return $out;
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
