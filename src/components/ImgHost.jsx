import React from "react";

function ImgHost(props) {
    console.log(props)
    return (
        <>
            <img src={props.data} alt='Host picture' />
        </>
    )
}
export default ImgHost