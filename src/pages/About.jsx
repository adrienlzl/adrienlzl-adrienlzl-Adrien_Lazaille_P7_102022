import React from 'react';
import {useState} from "react";
import Footer from "../components/Footer";

function About()  {

    const [isShown, setIsShown] = useState(false);
    const contentHidden = event => {
        setIsShown(current => !current);
    };
    const [isShown01, setIsShown01] = useState(false);
    const contentHidden01 = event => {
        setIsShown01(current => !current);
    };
    const [isShown02, setIsShown02] = useState(false);
    const contentHidden02 = event => {
        setIsShown02(current => !current);
    };
    const [isShown03, setIsShown03] = useState(false);
    const contentHidden03 = event => {
        setIsShown03(current => !current);
    };

    return (
        <main>
            <div className="divImgAbout">
                <img src="/images/imgABout.png" alt="Montagnes enneigées"/>
            </div>
            <section>
                <div className="aboutMenu" onClick={contentHidden}>
                    <div className="titleAbout" >
                        <h2>Fiabilité</h2>
                        <div className={`arrowAbout ${isShown ? "arrowAboutTurn" : ""}`}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_60_3)">
                                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_60_3">
                                        <rect width="28.9231" height="28.921" fill="white" transform="translate(0 28.9614) rotate(-90)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    {isShown &&(
                        <div  className={`descriptionAbout ${isShown ? "descriptionAboutTrun" : ""}`}>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                                aux
                                logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </div>
                    )}

                </div>
                <div className="aboutMenu" onClick={contentHidden01}>
                    <div className="titleAbout">
                        <h2>Respect</h2>
                        <div className={`arrowAbout ${isShown01 ? "arrowAboutTurn" : ""}`}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_60_3)">
                                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_60_3">
                                        <rect width="28.9231" height="28.921" fill="white" transform="translate(0 28.9614) rotate(-90)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    {isShown01 &&(
                        <div className="descriptionAbout">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                                discriminatoire ou de
                                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    )}

                </div>
                <div className="aboutMenu" onClick={contentHidden02}>
                    <div className="titleAbout">
                        <h2>Service</h2>
                        <div className={`arrowAbout ${isShown02 ? "arrowAboutTurn" : ""}`}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_60_3)">
                                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_60_3">
                                        <rect width="28.9231" height="28.921" fill="white" transform="translate(0 28.9614) rotate(-90)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    {isShown02 &&(
                        <div className="descriptionAbout">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas
                        à nous contacter si vous avez la moindre question.</p>
                        </div>
                        )}
                </div>
                <div className="aboutMenu" onClick={contentHidden03}>
                    <div className="titleAbout">
                        <h2>Sécurité</h2>
                        <div className={`arrowAbout ${isShown03 ? "arrowAboutTurn" : ""}`}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_60_3)">
                                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_60_3">
                                        <rect width="28.9231" height="28.921" fill="white" transform="translate(0 28.9614) rotate(-90)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    {isShown03 &&(<div className="descriptionAbout">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                        logement correspond aux critères de sécurité établis par nos services. En laissant une note
                        aussi
                        bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont
                        bien
                        respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos
                        hôtes.</p>
                        </div>)}
                </div>
            </section>
            <Footer />
        </main>

    );
};

export default About;