
import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className='header'>
            <div class="header-left">
                <div class="icon"><MenuIcon /></div>
                <Link to='/'>
                <img className='header-logo ' src='data:image/png;base64,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' alt='' />
                </Link>
                
            </div>
            <div class="header-input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text" />
                <Link to={'/search/ {inputSearch}'}>
                <SearchIcon className='header-inputbutton' />
                </Link>
                
            </div>
            <div class="header-icons">
                <VideoCallIcon className='header-icon' />
                <AppsIcon  className='header-icon'/>
                <NotificationIcon className='header-icon'/>
                <Avatar src='https://media-exp3.licdn.com/dms/image/C5603AQEYCRx9qfPSSg/profile-displayphoto-shrink_800_800/0/1618654833196?e=1628726400&v=beta&t=I2dKV7c-99BVsgqQ_YwKEuionzt3heYL4mRB0TMLNwU' />
            </div>

           
            
            
        </div>
    )
}

export default Header
