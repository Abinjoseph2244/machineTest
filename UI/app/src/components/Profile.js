import React from 'react'
import Sun from '../assets/sun.png'
import ProfilePic from '../assets/Rectangle 10.png'
import './Profile.css'

function Profile() {
    return (
        <div className='profile'>
            <div>
                <span>Good Morning !</span>
                <img className='ps-2' src={Sun} alt='sun' />
            </div>
            <div className='card'>
                <div>
                    <span>John Doe</span>
                    <span>john@doe.com</span>
                </div>
                <img src={ProfilePic} alt='profilePic' />
            </div>
        </div>
    )
}

export default Profile