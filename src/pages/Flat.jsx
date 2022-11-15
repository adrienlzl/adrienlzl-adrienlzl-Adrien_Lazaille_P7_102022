import React, {useState} from 'react';
import datas from '../components/Data.json'
import {useParams} from "react-router-dom";
import Footer from "../components/Footer";
import Stars from "../components/Stars"
import Tags from "../components/Tags";
import ImgHost from "../components/ImgHost";
import ImageSlider from "../components/ImageSlider"
import Collapse from "../components/Collapse ";
import SimpleImage from "../components/SimpleImage";

function Flat() {

    /* Récupérer l'id de l'URL */
    const params = useParams();
    const [flat, setFlat] = useState(datas.find(element => {
        return element.id === params.id
    }))
    /* **********************************   Slider    ******************************************/
    // Création d'un tableau pour stoker l'url des images
    const pictures = [];
    flat.pictures.forEach((picture) => {
        pictures.push(picture);
    });
    const LengthSlider = flat.pictures.length


    // Pour passer la valeur de rating en nombre
    const parsedStarts = parseInt(flat.rating, 10)

    //Les tableaux des collapse

    const flatDescriptionCollapse = [
        {title: "Description", text: flat.description
        }]
 const FlatEquipementsCollapse = [
     {title: "Equipements", text: flat.equipments}
 ]

    return (
        <main>
            <div className="sliderFlat">
                {LengthSlider === 1 ? (
                    <SimpleImage slide={pictures} />
                ) : (
                    <ImageSlider slide={pictures} key={flat.id}/>
                )}
            </div>
            <section className="flatInfos">
                <div className="textInfosFlat">
                    <h2>{flat.title}</h2>
                    <p>{flat.location}</p>
                    <div className="tagFlat">
                        {flat.tags.map((data, index) => (
                            <Tags data={data} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="hostInfo">
                    <div className="hostName">
                        <p>{flat.host.name}</p>
                        <div className="hostPicture">
                            <ImgHost data={flat.host.picture}/>
                        </div>
                    </div>
                    <div className="ratingStars">
                        <Stars data={parsedStarts} />
                    </div>
                </div>
            </section>
            <div className="descriptionStuff">
            <div className="flatCollapse">
                {flatDescriptionCollapse.map((data, index) => (
                    <Collapse data={data} key={index}/>
                ))}
            </div>
            <div className="flatCollapse">
                {FlatEquipementsCollapse.map((data, index) => (
                    <Collapse data={data}  key={index}/>
                ))}
            </div>
            </div>
            <Footer/>
        </main>
    );
};

export default Flat;