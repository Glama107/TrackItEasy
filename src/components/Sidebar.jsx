import React from 'react';
import './sidebar.css';

function App() {
    //States



    // Comportements


    //Rendu
    return (
        <div>
            <nav>
                <div className="logo">
                    <img alt="Logo"
                         src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a className="active" href="#">
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-question"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-cog"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-user"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-sign-out"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="profile">
                    <img alt="Photo de profil"
                         src="http://via.placeholder.com/50x50" />
                </div>
            </nav>
        </div>
    );
}

export default App;
