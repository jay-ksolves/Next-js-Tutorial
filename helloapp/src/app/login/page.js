"use client";

import React from 'react'
import { axios } from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'


function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {

    }
    return (
        <div>
            <div className='  p-5'>
                <h1 className='text-light text-center' style={{ fontFamily: "lobster" }}>Welcome to Login page.</h1>
                <br />
                <div className='glass text-light card p-3' style={{ maxWidth: '18rem', marginLeft: '40%' }}>
                    <label htmlFor='EmailId' >Email Id</label>
                    <input className='form-control' placeholder='Email Id' value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor='Password' >Password</label>
                    <input className='form-control' placeholder='Password' value={user.password} type='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button className='btn btn-primary mx-auto mt-3' onClick={onLogin}>Login Now</button>
                    <hr />
                    <Link href='/signup' className=' text-center text-light ' style={{ textDecoration: 'none' }}>Visit Signup Page</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage