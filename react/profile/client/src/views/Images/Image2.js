/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import alaska from "./IMG_1180.jpeg"

const Image2 =()=>{
    return (
        <div>
            <div >
            <img
                class="image1 ng-isolate-scope"
                src={alaska}
                alt="alaska"
                style={{
                    // transform: translat3d(0, 211, 0),
                    opacity: 1,
                }}
                />
            </div>
        </div>
    )
}



export default Image2;