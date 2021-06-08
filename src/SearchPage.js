import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined'


function SearchPage() {
    return (
        <div className='searchpage'>
            <div class="searchPage-filter">
                <TuneOutLinedIcon/>
                <h2>FILTER</h2>
                

            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwnis0xDqtj0u_J_i3MGH6S47qT3jWFO3ZWMfAdGl=s176-c-k-c0x00ffffff-no-rj"
            channel='CrossRoads'
            verified
            subs='100k'
            noVideos={50}
            description='Learn Coding Easily From Home'
            />
            <hr/>
            <VideoRow
            views='1.4M'
            subs='100k'
            description='Learn Code from Home'
            timestamp='4 months ago'
            channel='Crossroads'
            title='Crossroads 6 Months Exclusive Membership'
            image='https://i.ytimg.com/vi/yEAy2vJUgYw/mqdefault.jpg'
            
            />
             <VideoRow
            views='1M'
            subs='100k'
            description='Learn Code from Home'
            timestamp='5 months ago'
            channel='Crossroads'
            title='Exclusive Members Live Q&A | Crossroads'
            image='https://i.ytimg.com/vi/NcqRcSZAv_I/mqdefault.jpg'
            
            />
             <VideoRow
            views='1.4M'
            subs='100k'
            description='Learn Code from Home'
            timestamp='5 months ago'
            channel='Crossroads'
            title='100% Placement is a scam'
            image='https://i.ytimg.com/vi/Y7OnfxueyZ4/mqdefault.jpg'
            
            />
                        <VideoRow
            views='1.5M'
            subs='100k'
            description='Learn Code from Home'
            timestamp='7 months ago'
            channel='Crossroads'
            title='Why are you not getting a job? | Crossroads'
            image='https://i.ytimg.com/vi/sYPUjDUJ52M/mqdefault.jpg'
            
            />
                        <VideoRow
            views='2.9M'
            subs='100k'
            description='Learn Code from Home'
            timestamp='10 months ago'
            channel='Crossroads'
            title='Best Laptop For Coding | Crossroads'
            image='https://i.ytimg.com/vi/ka0WI9yg1RY/mqdefault.jpg'
            
            />
        </div>
    )
}

export default SearchPage
