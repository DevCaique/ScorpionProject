import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Publicacoes } from './Pages/Publicacoes';
import { Social } from './Pages/Social';
import { Perfil } from './Pages/Perfil';

export function MyRoutes() {

    return (

        <Router>

            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home />} />

                <Route path="/Publicacoes" element={<Publicacoes />} />
                <Route path="/Social" element={<Social />} />
                <Route path="/Perfil" element={<Perfil />} />

            </Routes>

        </Router>

    )

}