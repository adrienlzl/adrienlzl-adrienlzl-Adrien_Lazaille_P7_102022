import React from "react";

function HomeDatas(props) {
    console.log(props)
    return (
        <>
            <figure key={props.data.id} onClick={() => window.location.href = `/card/${props.data.id}`}>
                <img src={props.data.cover} alt={props.data.title} />
                <figcaption>
                    <h2>{props.data.title}</h2>
                </figcaption>
            </figure>
        </>
    )
}

export default HomeDatas

