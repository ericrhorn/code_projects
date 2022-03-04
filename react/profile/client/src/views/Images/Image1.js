/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import halfMoon from "./IMG_0628.jpeg"


const Image1 =()=>{
    return (
        <div>
            <div >
            <img
                class="image1 ng-isolate-scope"
                src={halfMoon}
                alt="halfMoon"
                style={{
                    // transform: translat3d(0, 211, 0),
                    opacity: 1,
                }}
                />
            </div>
        </div>
    )
}



export default Image1;