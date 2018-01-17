<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\User;
use Validator;
use Hash;
use App\Http\Requests\StoreUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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

        $validator = Validator::make($request->all(), $this->rules);
        if ($validator->fails()) {
        //pass validator errors as errors object for ajax response

            return response()->json(['errors'=>$validator->errors()]);
        }
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|max:255',
        //     'email' => 'required|email|max:255|unique:users',
        //     'password' => 'required|confirmed',
        // ]);
        // $rules = [
        //     'name' => 'required|max:255',
        //     'email' => 'required|email|max:255|unique:users',
        //     'password' => 'required|confirmed',
        // ];

        // $input = $request->only(
        //     'name',
        //     'email',
        //     'password',
        //     'password_confirmation'
        // );

        // $validator = Validator::make($input, $rules);

        // if($validator->fails()) {
        //     $error = $validator->messages()->toJson();
        //     return response()->json(['success'=> false, 'error'=> $error]);
        // }

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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
