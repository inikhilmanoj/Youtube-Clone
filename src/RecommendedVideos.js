import React from 'react';
import './Recommendedvideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className='recommendedvideos'>
            <h3>Recommended</h3>
            <div class="recommendedvideos-videos">
                <VideoCard title="MNC vs Startup - Freshers എവിടെ ജോലി ചെയ്യും ?"
                            views="8,729 views"
                            timestamp="Jun 4, 2021"
                            channelimage="https://yt3.ggpht.com/ytc/AAUvwnis0xDqtj0u_J_i3MGH6S47qT3jWFO3ZWMfAdGl=s176-c-k-c0x00ffffff-no-rj"
                            channel="Crossroads"
                            image='https://i.ytimg.com/vi/pTGiThCHlJI/mqdefault.jpg'/>
                <VideoCard title="Lockdown Special Live"
                            views="12,929 views"
                            timestamp="Streamed live on May 20, 2021"
                            channelimage="https://yt3.ggpht.com/ytc/AAUvwnis0xDqtj0u_J_i3MGH6S47qT3jWFO3ZWMfAdGl=s176-c-k-c0x00ffffff-no-rj"
                            channel="Crossroads"
                            image='https://i.ytimg.com/vi/AtqXQXNdDnM/mqdefault.jpg'/>
                <VideoCard 
                            title="Ripper - The Wanted Killer ft. @Karikku | Irul | Netflix India"
                            views="16M"
                            timestamp="Apr 3,2021"
                            channelimage="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s176-c-k-c0x00ffffff-no-rj"
                            channel="Netflix India"
                            image="https://i.ytimg.com/vi/OER5OC7UENQ/mqdefault.jpg" />
                <VideoCard title="Religion vs Comedy | #TenOnTen | Vir Das"
                            views="1M"
                            timestamp="Jan 11,2021"
                            channelimage="https://yt3.ggpht.com/ytc/AAUvwnigxbDetEcsMUW-q-1taelGbq5lV2LvSK4tqqlSNQ=s176-c-k-c0x00ffffff-no-rj"
                            channel="Vir Das Comedy"
                            image="https://i.ytimg.com/vi/u5hS8vzmQXI/mqdefault.jpg" />  
                <VideoCard  title="Koi Toh Ho - Nidhi Narwal | Spoken Word | Spill Poetry"
                            views="7.5M"    
                            timestamp="1 year ago"
                            channelimage="https://yt3.ggpht.com/ytc/AAUvwnjhYVPh8EapRj3PgTkoJ0EjY29xzi66AMNMiGOp=s176-c-k-c0x00ffffff-no-rj"
                            channel="Spill Poetry"
                            image="https://i.ytimg.com/vi/H8aZ8ASYJQ0/mqdefault.jpg"/> 
                <VideoCard title="SPS CONVOCATION EVENT| TAKE OFF 2021 | CROSSROADS"
                        views="10k"
                        timestamp="1 month ago"
                        channelimage="https://yt3.ggpht.com/ytc/AAUvwnis0xDqtj0u_J_i3MGH6S47qT3jWFO3ZWMfAdGl=s176-c-k-c0x00ffffff-no-rj"
                        channel="Crossroads"
                        image="https://i.ytimg.com/vi/m_hx0Ebg5Yo/mqdefault.jpg"/>            


            </div>
        </div>
    )
}

export default RecommendedVideos
