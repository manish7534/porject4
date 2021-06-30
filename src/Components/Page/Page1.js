import React from 'react'
import './Page1.css'
import image1 from './image/image1.jpg'
function Page1(){
    return(
        <div className="main_container">
            <div className="inner_container">
                <div className="firstline">
                <div className="imagecontainer">
                    <img src={image1}/>
                    <h2>Explore look</h2>
                </div>
                <div className="imagecontainer">
                <img src={image1}/>
                    <h2>Explore look</h2>
                    </div>
                </div>
                <div className="secondline">
                <div className="imagecontainer">
                <img src={image1}/>
                    <h2>Explore look</h2>
                    </div>
                <div className="imagecontainer">
                <img src={image1}/>
                    <h2>Explore look</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page1