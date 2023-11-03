"use client";

import React from 'react'
import { axios } from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Signup() {

    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
    })

    const onSignup = async () => {

    }
    return (

        <div>
            <div className='  p-5'>
                <h1 className='text-light text-center' style={{ fontFamily: "lobster" }}>Welcome to Signup page.</h1>
                <br />
                <div className='glass text-light  card p-3' style={{ maxWidth: '18rem', marginLeft: '40%' }}>                    <label htmlFor='username' >Username</label>
                    <input className='form-control' placeholder='Username' value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <label htmlFor='EmailId' >Email Id</label>
                    <input className='form-control' placeholder='Email Id' value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor='Password' >Password</label>
                    <input className='form-control' placeholder='Password' value={user.password} type='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button className='btn btn-primary mx-auto mt-3' onClick={onSignup}>SignUp Now</button>
                    <hr />
                    <Link href='/login' className=' text-light text-center ' style={{ textDecoration: 'none' }}>Visit Login Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup