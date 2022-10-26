import React from 'react';
import HomeDatas from "../components/HomeDatas";
import Footer from "../components/Footer";
import datas from "../components/Data.json";

function Home() {


    return (
        <main className="mainHome">
            <header className="divImgHome">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src="/images/imageHome.png" alt="home Kasa"/>
            </header>
            <section className="sectionHome">
                {datas.map(data => (
                    <HomeDatas data={data} />
                ))}
            </section>
            <Footer/>
        </main>
    );
};

export default Home;