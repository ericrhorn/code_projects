/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Parallax} from 'react-parallax'
import alaska from "./IMG_1180.jpeg"

const Image2 =()=>{
    return (

        <div>
            <Parallax className="image2" bgImage={alaska} strength={800}>

            </Parallax>
        </div>
    )
}



export default Image2;

