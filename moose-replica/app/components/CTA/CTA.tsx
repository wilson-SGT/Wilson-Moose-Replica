"use client"
import "./CTA.css"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Benefits() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".cta-text-container",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(".cta-texts", {
                opacity: 0,
                y: 75,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
            })
        gsap.timeline({
            scrollTrigger: {
                trigger: ".google-play-container",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(".cta-left-image-container", {
                opacity: 0,
                x: 100,
            }, {
                opacity: 1,
                x: 0,
                stagger: 0.1,
            })
            .fromTo(".cta-right-image-container", {
                opacity: 0,
                x: -100,
            }, {
                opacity: 1,
                x: 0,
                stagger: 0.1,
            }, "<")
    })
    return(
        <>
            <section className="section section7">
                <div className="content-container7">
                    <div className="cta-container">
                        <img className="cta-bg" src="/assets/section7-bg.png" alt="Cta"/>
                        <div className="cta-content-container">
                            <div className="cta-text-container">
                                <div className="cta-text">
                                    <div className="cta-1-text-container">
                                        <span className="cta-1-text cta-texts">Your </span>
                                        <span className="cta-1-text cta-texts">First </span>
                                        <span className="cta-1-text cta-texts">Step </span>
                                        <span className="cta-1-text cta-texts">To </span>
                                        <span className="cta-1-text cta-texts">Create </span>
                                    </div>
                                    <div className="cta-2-text-container">
                                        <span className="cta-2-text cta-texts">Content </span>
                                        <span className="cta-2-text cta-texts">That </span>
                                    </div>
                                    <div className="cta-3-text-container">
                                        <span className="cta-3-text cta-texts">Values </span>
                                        <span className="cta-3-text cta-texts">Authenticity </span>
                                    </div>
                                </div>
                            </div>
                            <img className="cta-line" src="/assets/cta-line.png" alt="Cta line"/>
                            <div className="google-play-container">
                                <span className="google-play-desc">
                                    Express yourself honestly and connect through moments
                                    <br/>
                                    that truly matter.
                                </span>
                                <div className="google-play">
                                    <img className="google-play-image" src="/assets/cta-googleplay.png" alt="Google Play"/>
                                </div>
                            </div>
                            <div className="cta-image-container">
                                <div className="cta-left-image-container">
                                    <img className="cta-left-image" src="/assets/cta-left.png" alt="Left Background"/>
                                </div>
                                <div className="cta-right-image-container">
                                    <img className="cta-right-image" src="/assets/cta-right.png" alt="Right Background"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
