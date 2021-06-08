import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@material-ui/core'
import Check from '@material-ui/icons/CheckCircleOutlineOutlined'

function ChannelRow({image, channel, subs, noVideos, description, verified }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelrow-logo' alt={channel} src={image}></Avatar>
            <div class="channelRow-text">
                <h4>{channel} {verified &&  <Check/>}</h4>
                <p>
                    {subs} subscribers . {noVideos} videos
                </p>
                <p>{description}</p>
            </div>
            
            
        </div>
    )
}

export default ChannelRow
