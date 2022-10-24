import React, {useState} from 'react';
import datas from '../components/Data.json'
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";


function Card()  {
/* Récupérer l'id de l'URL */
    const params = useParams();
/* Cherche les info de la card en fonction de l'Id récupéré */
     const foundCard = datas.find(element => {
        return element.id === params.id
     })
    /* **********************************   Slider    ******************************************/
const slides = [foundCard.pictures]

    function ImageSliderCard ({ sildes })  {

        return (
            <div>
                <img src={foundCard.pictures} />
            </div>
        )
    }

    /* **********************************   Slider    ******************************************/

/* ******************************** Starts *********************************************** */
const parsedStarts = parseInt(foundCard.rating, 10)
    function NumberStars() {
        if (parsedStarts === 0 ) {
            return (
                <>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                </>
            )
        }
        if (parsedStarts === 1 ) {
            return (
                <>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg>

                </>
            )
        }
        if (parsedStarts === 2 ) {
            return (
                <>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                    </svg><svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                </svg><svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                </svg>
                </>
            )
        }
        if (parsedStarts === 3 ) {
            return (
                <>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
                    </svg>


                </>
            )
        }
        if (parsedStarts === 4) {
            return (
                <>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
                    </svg>



                </>
            )
        }
        if (parsedStarts === (5)) {
            return (
                <>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_189)">
                            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_189">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </>
            )
        }
    }
        /* ******************************** Starts *********************************************** */
    return (
        <main>
            <div className="divSilder">
                <ImageSliderCard />
            </div>
            <section className="fristSectionCard">
                <div className="leftInfoCard">
                    <h2>{foundCard.title}</h2>
                    <p>{foundCard.location}</p>
                    <div className="btnDescriptionCard">
                        <p>Cozy</p>
                        <p>Canal</p>
                        <p>Paris 10</p>
                    </div>
                </div>
                <div className="rightInfoCard">
                    <div className="NamePhotoCard">
                        <p>{foundCard.host.name}</p>
                        <div className="cercleCard">
                            <img src={foundCard.host.picture} alt="host" />
                        </div>
                    </div>
                    <div className="starsCard">
                        <NumberStars />
                    </div>
                </div>
            </section>
            <section className="secondSectionCard">
                <div className="leftDivCard">
                    <div className="menuderoulantCard">
                        <div className="titleCard">
                        <h3>Description</h3>
                            <svg  className="fristArrowCard" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="underCard">
                            <p>{foundCard.description}</p>
                        </div>
                    </div>
                </div>
                <div className="rightDivCard">
                    <div className="menuderoulantCard">
                        <div className="titleCard">
                        <h3>Equipements</h3>
                            <svg  className="fristArrowCard" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="underCard undercard02">
                            <ul>
                                <li>{foundCard.equipments}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default Card;