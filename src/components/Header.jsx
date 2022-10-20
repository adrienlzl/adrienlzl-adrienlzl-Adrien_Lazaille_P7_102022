import React from 'react';
import {NavLink} from "react-router-dom";



function Header() {
    return (
        <header>
            <div className="logo">
                <svg width="219" height="76" viewBox="0 0 219 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_8_10)">
                        <path
                            d="M24.0745 34.6485L12.8401 46.1362V62.2561H4V0H12.8401V34.8338L46.359 0H56.4883L30.1521 27.9782L58.33 62.2561H48.0165L24.0745 34.6485Z"
                            fill="#FF6060"/>
                        <path
                            d="M122.789 57.2534L126.289 50.5831C130.34 53.3624 136.602 55.4005 142.68 55.4005C150.599 55.4005 153.73 52.9918 153.73 48.9155C153.73 38.3542 124.078 47.4332 124.078 28.7193C124.078 20.1962 131.629 14.6376 143.6 14.6376C149.678 14.6376 156.676 16.3052 160.728 18.8992L157.045 25.5695C152.809 22.7902 148.205 21.8638 143.6 21.8638C136.234 21.8638 132.55 24.6431 132.55 28.3488C132.55 39.4659 162.202 30.3869 162.202 48.7302C162.202 57.2534 154.466 62.6267 141.943 62.6267C134.392 62.812 126.657 60.4033 122.789 57.2534Z"
                            fill="#FF6060"/>
                        <path
                            d="M214.322 33.7221V62.2561H206.218V55.9564C203.456 60.218 198.115 62.6267 190.748 62.6267C180.066 62.6267 173.436 56.8828 173.436 48.7302C173.436 41.1335 178.224 35.0191 192.221 35.0191H205.666V33.3515C205.666 26.1253 201.43 22.049 193.142 22.049C187.617 22.049 181.908 24.0872 178.224 27.0518L174.725 20.5668C179.514 16.6757 186.512 14.4523 194.063 14.4523C207.139 14.6376 214.322 20.9373 214.322 33.7221ZM205.85 47.8038V41.1335H192.774C184.302 41.1335 181.908 44.4687 181.908 48.3597C181.908 52.9918 185.775 55.9564 192.221 55.9564C198.667 56.1417 203.824 53.3624 205.85 47.8038Z"
                            fill="#FF6060"/>
                        <path d="M95.5323 49.842V62.4414L100.873 59.2916V46.6921L95.5323 49.842Z" fill="#FF6060"/>
                        <path
                            d="M110.266 34.4632L88.3497 21.6785L76.1945 14.6376L64.2234 35.5749L64.4076 55.2153L86.1396 68L88.3497 66.703V48.1744L98.1106 30.9428L108.056 36.6866V55.2153L110.266 53.9183V34.4632Z"
                            fill="#FF6060"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_8_10" x="0" y="0" width="218.322" height="76" filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_10"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_10" result="shape"/>
                        </filter>
                    </defs>
                </svg>

            </div>
            <div className="divNavLink">
                <NavLink to="/" className="navLink" >Accueil</NavLink>
                <NavLink to="/about" className="navLink" >A Propos</NavLink>
            </div>
        </header>
    );
};

export default Header;