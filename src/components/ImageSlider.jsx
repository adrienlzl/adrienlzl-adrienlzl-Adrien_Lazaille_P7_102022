import React, {useState } from "react";




function ImageSlider ({ sildes })  {
    const [currentIdex, setCurrentIndex] = useState(0);
    return (
        <>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}>

            </div>
        </>
    )
}

export default ImageSlider;


