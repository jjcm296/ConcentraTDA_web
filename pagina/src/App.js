import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './screen/inicio/Inicio';
import SobreTDA from './screen/sobretda/SobreTda';
import Nosotros from './screen/nosotros/Nosotros';
import NavBar from './NavBar/NavBar';
import Footer from "./Footer/Footer";

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    const downloadCounterRef = useRef(null);

    const handleDownloadClick = () => {
        if (downloadCounterRef.current) {
            downloadCounterRef.current.increment();
        }
    };

    return (
        <>
            <NavBar onDownloadClick={handleDownloadClick} />
            <Routes>
                <Route
                    path="/"
                    element={<Inicio counterRef={downloadCounterRef} />}
                />
                <Route path="/sobretda" element={<SobreTDA />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;