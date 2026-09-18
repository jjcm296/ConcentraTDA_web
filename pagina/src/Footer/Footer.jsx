import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer">
            <h3>Síguenos</h3>
            <div className="footer-icons">
                <a
                    href="https://www.instagram.com/concentratda?igsh=MTBjdjh6eDBxanNxZg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                
                <a
                    href="https://www.facebook.com/share/15K3BNLk4U/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.tiktok.com/@concentratda?_t=ZS-8wKhs2Gu0bH&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                >
                    <SiTiktok />
                </a>
            </div>

            <hr />
            <div className="footer-bottom">
                <p>
                    © 2025 Concentra TDA &nbsp; | &nbsp;{' '}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Términos de uso</a> &nbsp; | &nbsp;{' '}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Política de privacidad</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;