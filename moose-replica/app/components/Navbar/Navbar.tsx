"use client"
import "./Navbar.css"
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);

    const blurLayers = Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="blur-layer"/>
    ))

    return(
        <div className="navbar">
            <div className="blur-background">
                <div className="blur-section blur-section-top">{blurLayers}</div>
                <div className="blur-section blur-section-bottom">{blurLayers}</div>
            </div>
            <div className="navbar-container">
                <div className="navbar-icon">
                    <img src="/assets/moose-logo-text.png" alt="moose-logo" className="navbar-moose-logo"/>
                </div>
                <div className="navbar-links-container">
                    <a href="#home" className="navbar-link link-1">
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">Home</div>
                    </a>
                    <a href="#about-us" className="navbar-link link-2">
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">About Us</div>
                    </a>
                    <a href="#key-features" className="navbar-link link-3">
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">Key Features</div>
                    </a>
                    <a href="#faq" className="navbar-link link-4">
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">FAQ</div>
                    </a>
                </div>
                <div className="navbar-download-button">
                    <span className="navbar-download-text">Download Now</span>
                </div>

                <div className={mobile ? "mobile-menu-button active" : "mobile-menu-button"} onClick={() => setMobile(!mobile)}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </div>
        </div>
    )
}