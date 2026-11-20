"use client"
import "./CTA.css"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Benefits() {
    return(
        <>
            <section className="section section7">
                <div className="content-container7">
                    <div className="cta-container">
                        <img className="cta-bg" src="/assets/section7-bg.png" alt="Cta"/>
                        <div className="cta-content-container">
                            <div className="cta-text-container">
                                <div className="cta-text">
                                    <span className="cta-1-text">Your </span>
                                    <span className="cta-1-text">First </span>
                                    <span className="cta-1-text">Step </span>
                                    <span className="cta-1-text">To </span>
                                    <span className="cta-1-text">Create </span>
                                    <br/>
                                    <span className="cta-2-text">Content </span>
                                    <span className="cta-2-text">That </span>
                                    <br/>
                                    <span className="cta-3-text">Values </span>
                                    <span className="cta-3-text">Authenticity </span>
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
