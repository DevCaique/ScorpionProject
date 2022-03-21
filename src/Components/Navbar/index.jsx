import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = (() => setClick(!click))
    const closeMenu = (() => setClick(false))

    return (

        <>

            <header className="header container" id="header">

                <nav className="nav">

                    <Link to="/" className="nav-logo">Logo</Link>

                    <ul onClick={closeMenu} className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item"><Link to="/Publicacoes" className="nav-link">Publicações</Link></li>
                        <li className="nav-item"><Link to="/Social" className="nav-link">Social</Link></li>
                        <li className="nav-item"><Link to="/Perfil" className="nav-link">Perfil</Link></li>

                    </ul>

                    <div onClick={handleClick} className="hamburger-btn-container">
                        <div className="hamburger-btn">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                </nav>

            </header>

        </>

    )

}