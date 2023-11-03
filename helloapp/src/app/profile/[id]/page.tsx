import React from 'react';

function UserProfile({ params }) {
    return (
        <div className='card p-5 container glass1 mx-auto mt-4' >

            <h1 className='text-center text-info' style={{ fontFamily: 'cursive' }}>User Profile<span className='bg-warning m-2 p-2 text-dark rounded'> {params.id} </span></h1>
            <hr />
            <h2>User Profile details are</h2>

        </div>
    )
}

export default UserProfile