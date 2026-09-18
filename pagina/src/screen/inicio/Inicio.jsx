import React, { useEffect, useRef, useState } from 'react';
import QuoteCards from './QuoteCards';
import './Inicio.css';
import DownloadCounter from './components/DownloadCounter';
import CredencialesModal from './components/CredencialesModal'; // 1. Importamos el modal

const Inicio = ({ scrollToDownload, counterRef }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [modalOpen, setModalOpen] = useState(false); // 2. Estado para abrir/cerrar el modal
    const downloadRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fromRedirect = localStorage.getItem('scrollToDownload') === 'true';

        if ((scrollToDownload || fromRedirect) && downloadRef.current) {
            downloadRef.current.scrollIntoView({ behavior: 'smooth' });
            localStorage.removeItem('scrollToDownload');
        }
    }, [scrollToDownload]);

    const bgImage = isMobile ? '/bg_ph_0.png' : '/bg_pc2.png';

    return (
        <>
            <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>Concentra tu mente, expande tu mundo</h1>
                        <p>
                            Una herramienta accesible y divertida que transforma la forma en que los niños con TDA
                            aprenden.
                        </p>
                        <div ref={downloadRef}>
                            <DownloadCounter ref={counterRef} />
                        </div>

                        {/* 3. Botón de Credenciales con la MISMA clase que el de Descargar */}
                        {/* Si tu botón de descarga usa otra clase (ej. "download-button"), cámbiala aquí 👇 */}
                        <button
                            className="btn-credenciales"
                            onClick={() => setModalOpen(true)}
                            style={{ marginTop: '12px' }}
                        >
                            Ver Credenciales de Prueba
                        </button>
                    </div>
                </div>
            </section>

            <section className="info-section">
                <div className="info-container">
                    <div className="info-image">
                        <img src="/gameplay.gif" alt="Ilustración de la app" />
                    </div>
                    <div className="info-text">
                        <h2>¿Qué es Concentra TDA?</h2>
                        <p>
                            Concentra TDA es una aplicación de estudio para niños de entre 6 y 12 años con Trastorno por
                            Déficit de Atención (TDA). Fue hecha pensando en los tutores preocupados por la educación de
                            su hijo con TDA.
                        </p>
                    </div>
                </div>
            </section>

            <QuoteCards />

            <section className="features-section" style={{ backgroundImage: "url('/bg_benefits.png')" }}>
                <h2 className="features-title">Cómo ayudamos a niños con TDA</h2>
                <p className="features-subtitle">
                    Combinamos educación y diversión con estas funciones:
                </p>
                <div className="features-grid">

                    <div className="feature-card">
                        <img src="/icons/flashcard.svg" alt="Flashcard" className="feature-icon" />
                        <div className="feature-content">
                            <h3>Flashcards con repetición espaciada</h3>
                            <p>Las tarjetas se adaptan al ritmo del niño: si una se le dificulta, volverá a aparecer hasta dominarla.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <img src="/icons/game.svg" alt="Minijuego" className="feature-icon" />
                        <div className="feature-content">
                            <h3>Minijuego</h3>
                            <p>Después de cada sesión de estudio, el niño desbloquea un minijuego para reforzar lo aprendido de forma divertida.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <img src="/icons/reward.svg" alt="Recompensas" className="feature-icon" />
                        <div className="feature-content">
                            <h3>Sistema de recompensas</h3>
                            <p>Los niños ganan monedas que pueden canjear por recompensas definidas por el tutor, como premios o descansos.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <img src="/icons/profile.svg" alt="Perfiles" className="feature-icon" />
                        <div className="feature-content">
                            <h3>Perfiles separados</h3>
                            <p>El tutor configura y controla; el niño aprende y juega. El cambio entre perfiles es sencillo pero seguro.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. Modal de credenciales (renderizado al final del componente) */}
            <CredencialesModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
};

export default Inicio;