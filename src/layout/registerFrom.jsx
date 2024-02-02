
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function registerFrom() {

    const [showPassword, setShowPassword] = useState(false)
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const hdlSubmit = async e => {
        e.preventDefault()

        // validation
        if (input.password !== input.confirmPassword){
            return alert('Please check confirm password')
        }

        const rs = await axios.post('http://localhost:1140/auth/register', input)
        console.log(rs)
        if( rs.status === 200){
            alert("Register Successful")
        }
        // alert(999)
    }

    const hdlChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    };

    return (
        <form className='flex gap-2 flex-col max-w-[500px] mx-auto px-2 mt-5 shadow-lg rounded-md py-5' onSubmit={ hdlSubmit }>
            <h1 className='text-center text-2xl font-bold mt-2'>Register</h1>
            <label className="form-control">
                <div className="label">
                    <span className="label-text text-[16px]">Username</span>
                </div>
                <input name='username' value={input.username} onChange={hdlChange} type="text" placeholder="Enter username" className="input input-bordered" />
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text text-[16px]">Email</span>
                </div>
                <input name='email' value={input.email} onChange={hdlChange} type="email" placeholder="Enter your email" className="input input-bordered" />
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text text-[16px]">Password</span>
                </div>
                <input name='password' value={input.password} onChange={hdlChange} type={showPassword ? "text" : "password"} placeholder="Enter password" className="input input-bordered" />
            </label>
            <label className="form-control my-2">
                <div className="label">
                    <span className="label-text text-[16px]">Confirm Password</span>
                </div>
                <input name='confirmPassword' value={input.confirmPassword} onChange={hdlChange} type={showPassword ? "text" : "password"} placeholder="Enter confirm password" className="input input-bordered" />
            </label>
            <label className="cursor-pointer flex gap-2">
                <input type="checkbox" className="checkbox checkbox-sm my-auto" onChange={() => setShowPassword((prev) => !prev)} />
                <span className="">Show Password</span>
            </label>
            <div className='flex flex-col gap-5 my-5'>
                <button type='submit' className='btn btn-outline btn-success'>Submit</button>
                <button type='reset' className='btn btn-outline btn-warning'>Reset</button>
            </div>
        </form>
    )
}
