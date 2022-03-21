import { Link } from 'react-router-dom';
import './style.css';

export function Navbar() {

    return (

        <>

            <header className="header container" id="header">

                <nav className="nav">

                    <Link to="/" className="nav-logo">Logo</Link>

                    <ul className="nav-menu">

                        <li className="nav-item"><Link to="/Publicacoes" className='nav-link'>Publicações</Link></li>
                        <li className="nav-item"><Link to="/Social" className="nav-link">Social</Link></li>
                        <li className="nav-item"><Link to="/Perfil" className="nav-link">Perfil</Link></li>

                    </ul>

                </nav>

            </header>

        </>

    )

}