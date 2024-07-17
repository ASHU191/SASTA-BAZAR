import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className="header" data-header>
                <div className="container">
                    <div className="overlay" data-overlay></div>

                    <a href="#" className="logo">
                        <img src="./public/asset/images/logo2.jpg" width="200" height="30" alt="Footcap logo" />
                    </a>

                    <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <nav className="navbar" data-navbar>
                        <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="#" className="navbar-link"><Link to ="/">Home</Link></a>
                            </li>
                            {/* <li className="navbar-item">
                                <a href="#" className="navbar-link"><Link to ="/about">About</Link></a>
                        
                            </li> */}
                            <li className="navbar-item">
                                <a href="#" className="navbar-link"><Link to ="/product">Produt</Link></a>
                            </li>
                            {/* <li className="navbar-item">
                                <a href="#" className="navbar-link"><Link to ="/shop">Shop</Link> </a>
                            </li> */}
                            {/* <li className="navbar-item">
                                <a href="#" className="navbar-link"> <Link to ="/blog">Blog</Link></a>
                            </li> */}
                            <li className="navbar-item">
                                <a href="#" className="navbar-link"><Link to ="/contact">Contact</Link></a>
                            </li>
                        </ul>

                        <ul className="nav-action-list">
                            <li>
                                <button className="nav-action-btn">
                                    <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                                    <span className="nav-action-text">Search</span>
                                </button>
                            </li>
                            <li>
                                <a href="#" className="nav-action-btn">
                                    <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                                    <span className="nav-action-text">Login / Register</span>
                                </a>
                            </li>
                            <li>
                                <button className="nav-action-btn">
                                    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                                    <span className="nav-action-text">Wishlist</span>
                                    <data className="nav-action-badge" value="5" aria-hidden="true">5</data>
                                </button>
                            </li>
                            <li>
                                <button className="nav-action-btn">
                                    <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                                    <data className="nav-action-text" value="318.00">Basket:</data>
                                    <data className="nav-action-badge" value="4" aria-hidden="true">4</data>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
