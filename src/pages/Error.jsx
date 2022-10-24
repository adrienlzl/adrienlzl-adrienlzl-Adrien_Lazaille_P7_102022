import React from 'react';
import {NavLink} from "react-router-dom";

function Error() {
    return (
        <main>
            <div className="error">
                <h1>404</h1>
            </div>
            <div className="msgError">
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="linkHome">
                <NavLink to="/" >Retourner sur la page d’accueil</NavLink>
            </div>
        </main>
    );
};

export default Error;

