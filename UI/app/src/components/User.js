import React from 'react'
import UserPic from '../assets/media.png'
import Facebook from '../assets/facebook.png'
import Insta from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
function User() {
    return (
        <>
            <img className="card-img-top" src={UserPic} alt="profilePic" />
            <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-secondary">CEO</p>
                <span className='d-flex gap-4'>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Insta} alt="facebook"/>
                    <img src={Twitter} alt="facebook"/>
                </span>
            </div>
        </>
    )
}

export default User