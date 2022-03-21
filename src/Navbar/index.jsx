import './style.css';

export function Navbar() {

    return (

        <>

            <header className="header" id="header">

                <nav className="nav">

                    <div className="logo-container">
                        <p className="logo">Logo</p>
                    </div>

                    <ul className="nav-menu">
                        <li className="nav-item">Publicações</li>
                        <li className="nav-item">Social</li>
                        <li className="nav-item">Notificações</li>
                        <li className="nav-item">Perfil</li>
                    </ul>

                </nav>

            </header>

        </>


    )

}