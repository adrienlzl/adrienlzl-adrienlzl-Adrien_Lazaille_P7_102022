import React, {useState} from 'react';
import datas from '../components/Data.json'
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Stars from "../components/Stars"
import Tags from "../components/Tags";
import ImageSlider from "../components/ImageSlider";
import Listequipement from "../components/Listequipement";
import ImgHost from "../components/ImgHost";



function Card()  {
/* Pour afficher les infos sous descriptions et équipement *********************************** */
    const [isShown04, setIsShown04] = useState(false);
    const contentHidden04 = event => {
        setIsShown04(current => !current);
    }
        const [isShown05, setIsShown05] = useState(false);
        const contentHidden05 = event => {
            setIsShown05(current => !current);
        }

/* Récupérer l'id de l'URL */
    const params = useParams();
/* Cherche les info de la card en fonction de l'Id récupéré */
     const foundCard = datas.find(element => {
        return element.id === params.id
     })
    /* **********************************   Slider    ******************************************/


    /* **********************************   Slider    ******************************************/


/* ******************************** Starts *********************************************** */
const parsedStarts = parseInt(foundCard.rating, 10)
console.log(foundCard.picture)

        /* ******************************** Starts *********************************************** */
    return (
        <main>
            <div className="divSilder">
                {foundCard.pictures.map(dataP =>(
                    <ImageSlider data={dataP} />
                ))}
            </div>
            <section className="fristSectionCard">
                <div className="leftInfoCard">
                    <h2>{foundCard.title}</h2>
                    <p>{foundCard.location}</p>
                    <div className="btnDescriptionCard">
                        {foundCard.tags.map(data => (
                        <Tags data={data} />
                        ))}
                    </div>
                </div>
                <div className="rightInfoCard">
                    <div className="NamePhotoCard">
                        <p>{foundCard.name}</p>
                        <div className="cercleCard">
                           <ImgHost data={foundCard.host.picture} />
                        </div>
                    </div>
                    <div className="starsCard">
                        <Stars data={parsedStarts} />
                    </div>
                </div>
            </section>
            <section className="secondSectionCard">
                <div className="leftDivCard">
                    <div className="menuderoulantCard">
                        <div className="titleCard" onClick={contentHidden04}>
                        <h3>Description</h3>
                            <svg  className="fristArrowCard" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                        {isShown04 &&(
                            <div className="underCard">
                                <p>{foundCard.description}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="rightDivCard">
                    <div className="menuderoulantCard">
                        <div className="titleCard" onClick={contentHidden05}>
                        <h3>Equipements</h3>
                            <svg  className={`fristArrowCard ${isShown05 ? "arrowAboutTurn" : ""}`}  width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
                            </svg>
                        </div>
                        {isShown05 &&(
                            <div className="underCard undercard02">
                                {foundCard.equipments.map(DataE => (
                                    <Listequipement data={DataE} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default Card;