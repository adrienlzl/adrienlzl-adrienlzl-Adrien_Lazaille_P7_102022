import React from 'react';
import {useState} from "react";

const Collapse = (props) => {

    const [isShown, setIsShown] = useState(false);
    const contentHidden = event => {
        setIsShown(current => !current);
    };
const StuffLenght = props.data.text.length


    if (StuffLenght > 20 ) {
        return (
            <>
                <main onClick={contentHidden}>
                    <section>
                        <h2 className="titleCollapse">{props.data.title}</h2>
                    </section>
                    <div className={`arrowCollapse ${isShown ? "arrowCollapseTurn" : ""}`}>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_60_3)">
                                <path
                                    d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_60_3">
                                    <rect width="28.9231" height="28.921" fill="white"
                                          transform="translate(0 28.9614) rotate(-90)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    {isShown && (
                        <article className={`descriptionCollapse ${isShown ? "descriptionCollapseTurn" : ""}`}>
                            <ul>
                                <li>{props.data.text}</li>
                            </ul>
                        </article>
                    )}
                </main>
            </>
        )
    }
    else {
    return (
        <>
            <main onClick={contentHidden}>
                <section>
                    <h2 className="titleCollapse">{props.data.title}</h2>
                </section>
                <div className={`arrowCollapse ${isShown ? "arrowCollapseTurn" : ""}`}>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_60_3)">
                            <path
                                d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_60_3">
                                <rect width="28.9231" height="28.921" fill="white"
                                      transform="translate(0 28.9614) rotate(-90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {isShown && (
                    <article className={`descriptionCollapse ${isShown ? "descriptionCollapseTurn" : ""}`}>

                        {props.data.text.map((stuff, index) => {
                            return (
                                <ul key={index}>
                                    <li>{stuff}</li>
                                </ul>
                            )
                        })}


                    </article>
                )}
            </main>
        </>
    )
    }
}


    export default Collapse
