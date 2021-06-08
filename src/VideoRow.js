import React from 'react'
import './VideoRow.css'

function VideoRow({views, subs, description, timestamp, title , channel, image}) {
    return (
        <div className='videorow'>
            <img src={image} alt=""/>
            <div class="videorow-title">
                <h3>{title}</h3>
                <div class="videorow-des">
                    <p>{channel} . {subs} Subscribers {views} Views . {timestamp}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoRow
