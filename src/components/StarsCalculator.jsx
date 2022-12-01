import React, {useEffect, useState} from "react";
import Redstars from "./Redstars";

function StarsCalculator(props) {
    const stars = [1, 2, 3, 4, 5];
    const note = props.data
    console.log(note)


    return (
        <>
            { stars.map((number) => note >= number ? (

                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_8_189)">
                        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_8_189">
                            <rect width="36" height="36" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ) : (

                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
                </svg>

            ) )

            }
        </>
    )






}
export default StarsCalculator
















/* const starts = [1, 2, 3, 4, 5];
    const note = 3;
    starts.forEach((number) => {
        if (number <= note) {
            // j'affiche rouge
        } else {
            // j'affiche gris
        }
    });

         else {
            return (
                <>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z"
                            fill="#E3E3E3"/>
                    </svg>
                </>
            )
        }

 */