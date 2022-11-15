import React, {useState} from "react";

const SimpleImage = (props) => {



    return (
        <div className="sliderPicture">
            {props.slide.map((slides, index) => {
                return (
                    <div  key={index}>
                            <img src={slides} alt='vue intérieur des logements' className="images"/>
                    </div>
                )
            })}
        </div>
    )
}

export default SimpleImage;