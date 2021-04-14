import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './media/2.png';

const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="navigation">
                <ul>
                    <div className="id">
                        <div className="idContent">
                            <li className="nav">
                                <img className="logo" src={logo} alt="" />
                            </li>
                        </div>
                    </div>
                    <li className="nav">
                        <NavLink exact to="/" activeClassName="navActive">
                            <span>Accueil</span>
                        </NavLink>
                    </li>

                    <li className="nav">
                        <NavLink exact to="/movies" activeClassName="navActive">
                            <span>Les films</span>
                        </NavLink>
                    </li>

                    <li className="nav">
                        <NavLink exact to="/login" activeClassName="navActive">
                            <span>La team</span>
                        </NavLink>
                    </li>

                    <li className="nav">
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>



        </div>
    );
};

export default Navigation;