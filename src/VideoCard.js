import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Videocard.css'

function VideoCard({image, title, channel, views, timestamp, channelimage}) {
    return (
        <div className='videocard'>
            <img classname='videocard-thumbnail' src={image} alt="" />
            <div class="videoCard-info">
                <Avatar classname='videoCard-avatar' alt={channel} src={channelimage} />
                <div class="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>    
        </div>
    )
}

export default VideoCard
