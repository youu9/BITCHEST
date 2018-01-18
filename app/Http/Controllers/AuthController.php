<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;


/**
 * @resource Authentification
 *
 * authentification endpoint 
 * 
 */
class AuthController extends Controller
{
    /**
	 * Register
	 *
	 * Request to register a user
     * 
	 *
	 */
    public function register(RegisterRequest $request)
    {
       
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
        $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password)]);

        $verification_code = str_random(30); //Generate verification code
        DB::table('user_verifications')->insert(['user_id'=>$user->id,'remember_token'=>$verification_code]);

        //verify 
        $check = DB::table('user_verifications')->where('token',$verification_code)->first();
      
        // $subject = "Please verify your email address.";
        // Mail::send('email.verify', ['name' => $name, 'verification_code' => $verification_code],
        //     function($mail) use ($email, $name, $subject){
        //         $mail->from(getenv('FROM_EMAIL_ADDRESS'), "From User/Company Name Goes Here");
        //         $mail->to($email, $name);
        //         $mail->subject($subject);
        //     });

        return response()->json(['success'=> true, 'message'=> 'Thanks for signing up! Please check your email to complete your registration.']);
    }

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

        // all good so return the token
        return response()->json(['success' => true])->header('Authorization','Bearer '.$token)->header('Access-Control-Expose-Headers', 'Authorization');

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
