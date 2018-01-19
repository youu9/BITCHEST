<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\User;
use Validator;
use Hash;
use Illuminate\Validation\Rule;
use App\Http\Requests\StoreUserRequest;
use JWTAuth;
use DB;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //TODO : Send all users excepts the logged one
        // $userlogged = JWTAuth::parseToken()->authenticate();
        // $users = DB::table('users')->where('id', '=', $userlogged->id)->get();
        return response()->json(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        $rules = [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed',
        ];

        $input = $request->only(
            'name',
            'email',
            'password',
            'password_confirmation'
        );

        $validator = Validator::make($input, $rules);

        if($validator->fails()) {
            $error = $validator->messages()->toJson();
            return response()->json(['success'=> false, 'error'=> $error]);
        }

        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $verification_code = str_random(30); //Generate verification code
        $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password), 'remember_token' => $verification_code, 'is_verified' => 1]);
        
        return response()->json(['success'=> true, 'message'=> 'Utilisateur ajouté !'])->header('Content-Type', 'application/json');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(User::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $userLogged = JWTAuth::parseToken()->authenticate();
        $user = User::find($id);
        if($userLogged->role != 'Admin'){
            if($user->id != $userLogged->id){
                return response()->json(['success'=> false, 'error'=> "Vous n'êtes pas autorisée à modifié cette utilisateur"])->header('Content-Type', 'application/json');
            }
        }
        
        
        $rules = [
            'name' => 'required|max:255',
            'email' => [
                'required',
                 Rule::unique('users')->ignore($user->id),
                 'email'
            ],
            'role' => 'in:Admin,Client',
            'password' => 'confirmed',
            
        ];

        $input = $request->only(
            'name',
            'email',
            'role',
            'password',
            'password_confirmation'
        );

        $validator = Validator::make($input, $rules);

        if($validator->fails()) {
            $error = $validator->messages()->toJson();
            return response()->json(['success'=> false, 'error'=> $error])->header('Content-Type', 'application/json');
        }

        
        $user->update($request->all());

        return response()->json(['success'=> true, 'message'=> 'Utilisateur modifié !'])->header('Content-Type', 'application/json');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        
        return response()->json(['success'=> true, 'message'=> 'Utilisateur supprimé !'])->header('Content-Type', 'application/json');
    }
}
