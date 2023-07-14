import React from 'react'



export default function HomeVideoBg(){
    return(
        <>
        <div>
        <header className='home-header'>ROAM<br/>CRAZE</header>
        <video className='home-video-div' src='/home-video.mp4' autoPlay loop muted />
        </div>
        
         {/* <div className='main'>
         
        <div className="overlay">
            
        
        </div>
    </div> */}

        </>
    )
}