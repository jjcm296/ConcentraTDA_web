// DownloadCounter.js
import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './DownloadCounter.css';

const DownloadCounter = forwardRef((props, ref) => {
    const [count, setCount] = useState(167);
    const [animate, setAnimate] = useState(false);

    const increment = () => {
        setAnimate(true);
        setCount((prev) => prev + 1);
        setTimeout(() => setAnimate(false), 300);
    };

    useImperativeHandle(ref, () => ({
        increment
    }));

    return (
        <div className="clean-counter-container">
            <div className={`clean-counter-number ${animate ? 'bounce' : ''}`}>
                {count}
            </div>
            <a
                href="/apk/ConcentraTDA.apk"
                download
                onClick={increment}
            >
                <button className="clean-download-button">
                    <i className="fab fa-android" style={{marginRight: '8px'}}></i>
                    Descargar
                </button>
            </a>
        </div>
    );
});

export default DownloadCounter;
