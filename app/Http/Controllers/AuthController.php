<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;


/**
 * @resource Authentification
 *
 * authentification endpoint 
 * 
 */
class AuthController extends Controller
{

    public function verifyUser($verification_code)
    {
        $check = DB::table('user_verifications')->where('token',$verification_code)->first();

        if(!is_null($check)){
            $user = User::find($check->user_id);

            if($user->is_verified == 1){
                return response()->json([
                    'success'=> true,
                    'message'=> 'Account already verified..'
                ]);
            }

            $user->update(['is_verified' => 1]);
            DB::table('user_verifications')->where('token',$verification_code)->delete();

            return response()->json([
                'success'=> true,
                'message'=> 'You have successfully verified your email address.'
            ]);
        }

        return response()->json(['success'=> false, 'error'=> "Verification code is invalid."]);

    }

    /**
	 * Login
	 *
	 * Request POST, try to login user with email/password
     * 
	 *
	 */
    public function login(AuthRequest $request)
    {
    //    $rules = [
    //         'email.required' => 'An email is required',
    //         'password.required'  => 'A password is required',
    //     ];
    //     $input = $request->only('email', 'password');

    //     $validator = Validator::make($input, $rules);

    //     if($validator->fails()) {
    //         $error = $validator->messages()->toJson();
    //         return response()->json(['success'=> false, 'error'=> $error]);
    //     }
      

        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
            'is_verified' => 1
        ];

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['success' => false, 'error' => 'Wrong email or password. Please try again.'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'could_not_create_token'], 500);
        }
        $user = Auth::user();
        // all good so return the token

        return response()->json(['success' => true, 'user' => $user])->header('Authorization','Bearer '.$token)->header('Access-Control-Expose-Headers', 'Authorization');

    }

    /**
	 * Logout
	 * Request POST, logout user with token
	 */
    public function logout(Request $request) {
        $this->validate($request, ['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['success' => true]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to logout, please try again.'], 500);
        }
    }
}
