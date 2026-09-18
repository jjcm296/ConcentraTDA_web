import React from 'react';
import './CredencialesModal.css';

const CredencialesModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Función para copiar solo el correo
    const copiarCorreo = () => {
        navigator.clipboard.writeText("jordanjaircruzmendoza@gmail.com");
        alert("📧 ¡Correo copiado!");
    };

    // Función para copiar solo la contraseña
    const copiarPassword = () => {
        navigator.clipboard.writeText("Hola123*");
        alert("🔑 ¡Contraseña copiada!");
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <h2>🔑 Acceso de Prueba</h2>
                <p>Usa estas credenciales para revisar la aplicación:</p>

                {/* Campo de Correo */}
                <div className="campo-credencial">
                    <div className="campo-info">
                        <span className="campo-label">Correo:</span>
                        <span className="campo-valor">jordanjaircruzmendoza@gmail.com</span>
                    </div>
                    <button className="btn-copiar" onClick={copiarCorreo}>
                        📋 Copiar
                    </button>
                </div>

                {/* Campo de Contraseña */}
                <div className="campo-credencial">
                    <div className="campo-info">
                        <span className="campo-label">Contraseña:</span>
                        <span className="campo-valor">Hola123*</span>
                    </div>
                    <button className="btn-copiar" onClick={copiarPassword}>
                        📋 Copiar
                    </button>
                </div>

                <button className="btn-cerrar-modal" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default CredencialesModal;