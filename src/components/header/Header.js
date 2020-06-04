import React from "react";
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Granny's Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/offers/">Предложения</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chats/">Сообщения</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile/">Мой профиль</Link>
                    </li>
                </ul>
            </div>
            <a className="btn btn-secondary my-2 my-sm-0" href="/logout">Выход</a>
        </nav>
    )
};

export default Header