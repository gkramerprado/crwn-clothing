import React from 'react';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Chapeus</h1>
                    <span className="subtitle">COMPRAR</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Jaquetas</h1>
                    <span className="subtitle">COMPRAR</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Tenis</h1>
                    <span className="subtitle">COMPRAR</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Mulheres</h1>
                    <span className="subtitle">COMPRAR</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Homens</h1>
                    <span className="subtitle">COMPRAR</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;