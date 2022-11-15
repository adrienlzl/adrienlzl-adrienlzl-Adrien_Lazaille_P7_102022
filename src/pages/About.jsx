import React from 'react';
import Footer from "../components/Footer";
import 'animate.css';
import Collapse from "../components/Collapse ";

function About()  {

    const fiab = [
        {title: "Fiabilité", text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}
    ]
    const resp = [
        {title: "Respect", text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
    ]
    const serv = [
        {title: "Service", text:` Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfait. N'hésitez pas à nous contacter si vous avez la moindre question.`}
    ]
    const secu = [
        {title: "Sécurité", text:`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}
    ]



    return (
        <>
            <div className="divImgAbout">
                <img src="/images/imgABout.png" alt="Montagnes enneigées"/>
            </div>
            <div className="aboutCollapse">
                {fiab.map((data, index) => (
                    <Collapse data={data} key={index}/>
                ))}
            </div>
            <div className="aboutCollapse">
                {resp.map((data, index) => (
                    <Collapse data={data} key={index}/>
                ))}
            </div>
            <div className="aboutCollapse">
                {serv.map((data, index) => (
                    <Collapse data={data} key={index}/>
                ))}
            </div>
            <div className="aboutCollapse">
                {secu.map((data, index) => (
                    <Collapse data={data} key={index}/>
                ))}
            </div>
            <Footer />
        </>

    );
};

export default About;

