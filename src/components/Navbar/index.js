import React from 'react';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="/"
                                className={
                                    window.location.pathname === "/"
                                        ? "nav-link active menu-item btn btn-outline-secondary"
                                        : "nav-link menu-item btn btn-outline-secondary"
                                }>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact"
                                className={
                                    window.location.pathname === "/contact"
                                        ? "nav-link active menu-item btn btn-outline-secondary"
                                        : "nav-link menu-item btn btn-outline-secondary"
                                }>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/portfolio"
                                className={
                                    window.location.pathname === "/portfolio"
                                        ? "nav-link active menu-item btn btn-outline-secondary"
                                        : "nav-link menu-item btn btn-outline-secondary"
                                }>Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div class="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ms-auto flex-nowrap">
                    <li className="nav-item">
                        <a className="nav-link menu-item btn btn-outline-secondary" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1fGV7pP4wizAbMl0S4cPmq5mo1ZZAf1_tGZijXn2B5Vw/edit?usp=sharing">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}