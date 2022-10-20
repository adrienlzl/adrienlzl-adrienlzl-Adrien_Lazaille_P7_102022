import React from 'react';

function About()  {
    return (
        <main>
            <div className="divImgAbout">
                <img src="/images/imgABout.png" alt="Montagnes enneigées"/>
            </div>
            <section>
                <div className="aboutMenu">
                    <div className="titleAbout">
                        <h2>Fiabilité</h2>
                        <div className="arrowAbout">
                            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="descriptionAbout">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                            aux
                            logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                </div>
                <div className="aboutMenu">
                    <div className="titleAbout">
                        <h2>Respect</h2>
                        <div className="arrowAbout">
                            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="descriptionAbout">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                            discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
                <div className="aboutMenu">
                    <div className="titleAbout">
                        <h2>Service</h2>
                        <div className="arrowAbout">
                            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="descriptionAbout">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                            N'hésitez pas
                            à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
                <div className="aboutMenu">
                    <div className="titleAbout">
                        <h2>Sécurité</h2>
                        <div className="arrowAbout">
                            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="descriptionAbout">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                            logement correspond aux critères de sécurité établis par nos services. En laissant une note
                            aussi
                            bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont
                            bien
                            respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos
                            hôtes.</p>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default About;