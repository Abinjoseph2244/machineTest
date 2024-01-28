import React from 'react'
import Briefcase from '../assets/Briefcase.png'
import StatBoard from '../assets/StatBoard.png'
import Menu from '../assets/Circled Menu.png'
import Support from '../assets/Support.png'
import Plugin from '../assets/Puzzle.png'
import Help from '../assets/Help.png'
import Shutdown from '../assets/Shutdown.png'

import './Sidenav.css'

function Sidenav() {
    const closeSideBar = () => {
        let sideNavCollapseBtn = document.getElementById('sideBarCloser')
        sideNavCollapseBtn.click()
    }
    const handleSideNavClose = () => {
        let sideNavCollapseBtn = document.getElementById('sideBarCloser')
        console.log('btn clicked');
        // console.log(sideNavCollapseBtn.style);
        // sideNavCollapseBtn.style.transform = 'translateX(-150px)'
        let space = document.getElementsByClassName('main')[0].style.padding
        console.log(space);
        document.getElementsByClassName('main')[0].style.padding = '100 0 0 0'
    }
    return (
        <nav className='navbar navbar-expand-md'>
            <button id='sideBarCloser' onClick={handleSideNavClose} className="navbar-toggler ms-1 outline-none btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="sidenav collapse navbar-collapse" id="navbarSupportedContent">
                <div className='sidenavTitle'>
                    <img src={Briefcase} />
                    <img src={StatBoard} />
                </div>
                {/* <div className='list'> */}
                <ul>
                    <li className='list-item' onClick={closeSideBar}>
                        <img src={Menu} />
                        <span>Dashboard</span>
                    </li>
                    <li className='list-item' onClick={closeSideBar}>
                        <img src={Support} />
                        <span>Support</span>
                    </li>
                    <li className='list-item' onClick={closeSideBar}>
                        <img src={Plugin} />
                        <span>Plugins</span>
                    </li>
                    <li className='list-item' onClick={closeSideBar}>
                        <img src={Help} />
                        <span>Help</span>
                    </li>
                </ul>
                {/* </div> */}
                <span className='list-item logout'>
                    <span>Logout</span>
                    <img src={Shutdown} />
                </span>
            </div>
        </nav>
    )
}

export default Sidenav