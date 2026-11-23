"use client"
import "./Navbar.css"
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Navbar() {
    const navbarRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState(0);

    useGSAP(() => {
        const navbar = navbarRef.current;
        if (!navbar) return;

        let hidden = window.scrollY > 80;
        gsap.set(navbar, { opacity: hidden ? 0 : 1 });

        ScrollTrigger.create({
            start: 0,
            onUpdate: (self) => {
                const shouldHide = self.scroll() > 80 && self.direction === 1;
                if (shouldHide === hidden) return;

                hidden = shouldHide;
                gsap.to(navbar, {
                    opacity: hidden ? 0 : 1,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            },
        });
    }, { dependencies: [] });

    const blurLayers = Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="blur-layer"/>
    ))

    return(
        <div className="navbar" ref={navbarRef}>
            <div className="blur-background">
                <div className="blur-section blur-section-top">{blurLayers}</div>
                <div className="blur-section blur-section-bottom">{blurLayers}</div>
            </div>
            <div className={mobile ? "navbar-container menu-open" : "navbar-container"}>
                <div className="navbar-icon">
                    <img src="/assets/moose-logo-text.png" alt="moose-logo" className="navbar-moose-logo"/>
                </div>
                <div className="navbar-links-container">
                    <a href="#" className={active === 1 ? "navbar-link link-1 active" : "navbar-link link-1"} onClick={() => setActive(1)}>
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">Home</div>
                    </a>
                    <a href="#about-us" className={active === 2 ? "navbar-link link-2 active" : "navbar-link link-2"} onClick={() => setActive(2)}>
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">About Us</div>
                    </a>
                    <a href="#key-features" className={active === 3 ? "navbar-link link-3 active" : "navbar-link link-3"} onClick={() => setActive(3)}>
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">Key Features</div>
                    </a>
                    <a href="#faq" className={active === 4 ? "navbar-link link-4 active" : "navbar-link link-4"} onClick={() => setActive(4)}>
                        <span className="navbar-dot">•</span>
                        <div className="navbar-link-text">FAQ</div>
                    </a>
                </div>
                <div className="navbar-download-button" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moose_social&hl=id", "_blank")}>
                    <span className="navbar-download-text">Download Now</span>
                </div>

                <div className={mobile ? "mobile-menu-button active" : "mobile-menu-button"} onClick={() => setMobile(!mobile)}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>

                <div className={mobile ? "mobile-main-menu active" : "mobile-main-menu"}>
                    <div className="mobile-navigation-links-container">
                        <a className="m-link-1 m-link" href="#" onClick={() => setMobile(!mobile)}>
                            <span>Home</span>
                        </a>
                        <a className="m-link-2 m-link" href="#about-us" onClick={() => setMobile(!mobile)}>
                            <span>About Us</span>
                        </a>
                        <a className="m-link-3 m-link" href="#key-features" onClick={() => setMobile(!mobile)}>
                            <span>Key Features</span>
                        </a>
                        <a className="m-link-4 m-link" href="#faq" onClick={() => setMobile(!mobile)}>
                            <span>FAQ</span>
                        </a>
                    </div>
                    <div className="mobile-navbar-download-button" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moose_social&hl=id", "_blank")}>
                        <span className="mobile-navbar-download-text">Download Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
