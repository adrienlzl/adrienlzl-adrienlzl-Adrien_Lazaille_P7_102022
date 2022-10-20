import React from 'react';

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
                <a href="home.html">Retourner sur la page d’accueil</a>
            </div>
        </main>
    );
};

export default Error;