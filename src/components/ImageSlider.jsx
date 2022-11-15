import React, {useState} from "react";


const ImageSlider = (props) => {

    const [current, setCurrent] = useState(0)
    const length = props.slide.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!Array.isArray(props.slide) || props.slide.length <= 0) {
        return null
    }


    return (
        <>
            <div className="sliderPicture">
                <div className="numberSlide">
                    <p>{current + 1}/{length}</p>
                </div>
                <svg onClick={nextSlide} className="arrowRightCard" width="48" height="80" viewBox="0 0 48 80"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                        fill="white"/>
                </svg>
                <svg onClick={prevSlide} className="arrowLeftCard" width="48" height="80" viewBox="0 0 48 80"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                        fill="white"/>
                </svg>
                {props.slide.map((slides, index) => {
                    return (
                        <div className={index === current ? `slide active` : `slide`} key={index}>
                            {index === current && (
                                <img src={slides} alt='vue intérieur des logements' className="images"/>)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default ImageSlider