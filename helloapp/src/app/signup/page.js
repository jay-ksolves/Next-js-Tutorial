"use client";

import React, { useEffect } from 'react';
import axios from 'axios';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
function Signup() {

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("sucessfully signedUp", response.data);
            router.push('/login');


        } catch (error) {
            console.log("signup failed", error.message);
            toast.error(error.message)

        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }

    }, [user]);



    return (

        <div>
            <div className='  p-5'>
                <Toaster position="right-top" reverseOrder={false} />
                <h1 className='text-light text-center' style={{ fontFamily: "lobster" }}>{loading ? "Processing" : "Welcome to Signup page."}</h1>
                <br />
                <div className='glass text-light  bg-dark card p-3' style={{ maxWidth: '18rem', marginLeft: '40%' }}>
                    <label htmlFor='username' >Username</label>
                    <input className='form-control' placeholder='Username' value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <label htmlFor='EmailId' >Email Id</label>
                    <input className='form-control' placeholder='Email Id' value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor='Password' >Password</label>
                    <input className='form-control' placeholder='Password' value={user.password} type='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button className='btn btn-primary mx-auto mt-3' onClick={onSignup}>{buttonDisabled ? "Fill above Details" : "SignUp Now"} </button>
                    <hr />
                    <Link href='/login' className=' text-light text-center ' style={{ textDecoration: 'none' }}>Visit Login Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup