"use client"
import "./Intro.css"
import {useEffect, useRef} from "react"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

export default function Intro() {
    useGSAP(
        () => {
            const tl = gsap.timeline()
            tl.fromTo(
                ".intro-logo", {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                })
                .fromTo(".text", {
                    x: -50,
                    opacity: 0,
                    filter: "blur(15px)",
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.05,
                    filter: "blur(0px)",
                })
                .to(".intro-center-container", {
                    x: 400,
                    opacity: 0,
                    duration: 2,
                    delay: 0.5,
                })
                .to(".intro-splash-screen-container", {
                    clipPath: "inset(0 0 0 100%)",
                    duration: 0.5,
                }, "<0.5")
        }
    )

    return(
        <>
            <div className="intro-splash-screen-container">
                <div className="intro-center-container">
                    <div className="intro-logo">
                        <img src="/assets/moose_logo.png" alt="Moose Splash Icon" className="splash-icon" />
                    </div>
                    <div className="intro-text">
                        <img src="/assets/moose-text-1.png" alt="Text Icon" className="text text-1" />
                        <img src="/assets/moose-text-2.png" alt="Text Icon" className="text text-2" />
                        <img src="/assets/moose-text-3.png" alt="Text Icon" className="text text-3" />
                        <img src="/assets/moose-text-4.png" alt="Text Icon" className="text text-4" />
                        <img src="/assets/moose-text-5.png" alt="Text Icon" className="text text-5" />
                    </div>
                </div>
            </div>
        </>
    )
}