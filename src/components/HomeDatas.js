import React from "react";
import datas from './Data.json'



function HomeDatas() {
    const dataJson = datas.map(data =>
        <>
            <figure key={data.id}>
                <img src={data.cover} alt={data.title} />

            <figcaption>
                <h2>{data.title}</h2>
            </figcaption>
            </figure>
        </>
    )
    return (
        <>
            {dataJson}
        </>
    )
}

export default HomeDatas
