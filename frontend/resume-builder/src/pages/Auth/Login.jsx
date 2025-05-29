import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage=({setCurrentPage})=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    //Handle login form submit
    const handleLogin=async(e)=>{}
    return(
        <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
            <h3 className='text-lg font-semibold text-black'>Welcome Back</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to log in</p>
            <form onSubmit={handleLogin}>
                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <button type='submit' className='btn-primary'>
                LOGIN
                </button>
            <p className='text-[13px] text-slate-800 mt-3'>
                Don't have an account?{" "}
                <button
                className='font-medium text-primary underline cursor-pointer'
                onClick={()=>{
                    setCurrentPage("signup")
                }}>SignUp
                </button>
            </p>
            </form>
        </div>
    )
}
export default LoginPage;