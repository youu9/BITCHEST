<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Validator;
use JWTAuth;
class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $user = JWTAuth::parseToken()->authenticate();
        if($user->role == 'Admin'){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'name' => 'required|max:255',
            // 'email' => 'required|email|max:255|unique:users',
            // 'password' => 'required|confirmed',
        ];
    }

    // public function messages(){
    //     return[
    //         'name.required' => 'name is required',
    //         'email.required' => 'Email is required',
    //         'email.unique:users' => 'already taken',
    //         'password.required' => 'wrong password',
    //     ];
    // }

    // /**
    //  * @param array $data
    //  * @return array of errors
    //  */
    // public function validate(array $data)
    // {
    //     /** @var \Illuminate\Validation\Validator $validator */
    //     $validator = Validator::make($data, $this->rules(), $this->messages());

    //     return $validator->errors()->toArray();
    // }

    // public function withValidator($validator)
    // {
    //     $validator->after(function ($validator) {
    //        if($validator->fails()){
    //             $error = $validator->messages()->toJson();
    //             return response()->json(['success'=> false, 'error'=> $error]);
    //         }
    //     });
    //    // return $validator;
    // }

}
