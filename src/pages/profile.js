import React from 'react'
import useAuth from '../hooks/useAuth'


export default function Profile() {
    const { user } = useAuth()
    return (
        <div className="container">
            <div className="user-profile">
                <img src={user.photoURL} alt="" />
                <h2>{user.displayName}</h2> 
            </div>
            
        </div>
    )
}
