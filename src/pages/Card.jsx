import React from 'react';

function Card()  {
    return (
        <main>
            <div className="divImgCard">
                <img src="/images/imgCard.png" alt="interieur de l'appartement cosy"/>
                    <svg className="arrowRightCard" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                    </svg>
                    <svg className="arrowLeftCard" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>

            </div>
            <section className="fristSectionCard">
                <div className="leftInfoCard">
                    <h2>Cozy loft on the canal Saint-Martin</h2>
                    <p>Paris, île-de-France</p>
                    <div className="btnDescriptionCard">
                        <p>Cozy</p>
                        <p>Canal</p>
                        <p>Paris 10</p>
                    </div>
                </div>
                <div className="rightInfoCard">
                    <div className="NamePhotoCard">
                        <p>Alexandre Dumas</p>
                        <div className="cercleCard"></div>
                    </div>
                    <div className="starsCard">
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
                            <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de
                                nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux
                                bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes
                                à1 station de la gare de l'est (7 minutes à pied). </p>
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
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                                <li>Espace de travail</li>
                                <li>Fer à repasser</li>
                                <li>Sèche-cheveux</li>
                                <li>Cintres</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Card;