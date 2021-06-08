import React from 'react';
import './SidebarRow.css'


function SidebarRow({  Icon , title }) {
    return (
        <div className='sidebarRow'>
            <Icon className='sidebarrow-icon ' />
            <h2 className='sidebarrow-title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
