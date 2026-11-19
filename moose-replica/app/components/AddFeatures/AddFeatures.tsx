"use client"
import "./AddFeatures.css"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function AddFeatures() {
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".addphone-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        })
            .to(".add-text-upper", {
                xPercent: -25,
                ease: "none"
            }, 0)
            .to(".add-text-bottom", {
                xPercent: 25,
                ease: "none"
            }, 0)
    }, { scope: sectionRef })

    return(
        <>
            <section ref={sectionRef} className="section section4" id="more-features">
                <div className="content-container4">
                    <div className="text-container4">
                        <span className="span-add-label">...and more additional features</span>
                    </div>
                    <div className="addfeatures-containers">
                        <div className="addfeatures1-container addfeatures-container">
                            <div className="addfeatures-image-container addfeatures1-image-container">
                                <img className="addfeatures-image addfeatures1-image" src="/assets/add1.png" alt="Add 1"/>
                            </div>
                            <div className="addfeatures-text-container">
                                <span className="addfeatures-text">Real Conversations</span>
                                <span className="addfeatures-subtext">Chat instantly with real people - no bots, no fake accounts.</span>
                            </div>
                        </div>
                        <div className="addfeatures2-container addfeatures-container">
                            <div className="addfeatures-image-container addfeatures2-image-container">
                                <img className="addfeatures-image addfeatures2-image" src="/assets/add2.png" alt="Add 2"/>
                            </div>
                            <div className="addfeatures-text-container">
                                <span className="addfeatures-text">Safe & Always There</span>
                                <span className="addfeatures-subtext">Your moments are securely stored and always within reach.</span>
                            </div>
                        </div>
                        <div className="addfeatures3-container addfeatures-container">
                            <div className="addfeatures-image-container addfeatures3-image-container">
                                <img className="addfeatures-image addfeatures3-image" src="/assets/add3.png" alt="Add 3"/>
                            </div>
                            <div className="addfeatures-text-container">
                                <span className="addfeatures-text">Built on Trust</span>
                                <span className="addfeatures-subtext">Advanced protection keeps fake profiles and content out.</span>
                            </div>
                        </div>
                        <div className="addfeatures4-container addfeatures-container">
                            <div className="addfeatures-image-container addfeatures4-image-container">
                                <img className="addfeatures-image addfeatures4-image" src="/assets/add4.png" alt="Add 4"/>
                            </div>
                            <div className="addfeatures-text-container">
                                <span className="addfeatures-text">Verified, For Real</span>
                                <span className="addfeatures-subtext">Every user is verified, so you know who you're connecting with.</span>
                            </div>
                        </div>
                        <div className="addfeatures5-container addfeatures-container">
                            <div className="addfeatures-image-container addfeatures5-image-container">
                                <img className="addfeatures-image addfeatures5-image" src="/assets/add5.png" alt="Add 5"/>
                            </div>
                            <div className="addfeatures-text-container">
                                <span className="addfeatures-text">Real People Nearby</span>
                                <span className="addfeatures-subtext">Discover and connect with people around you effortlessly.</span>
                            </div>
                        </div>
                    </div>
                    <div className="addphone-container">
                        <div className="add-text-upper add-phone-text">VARIETY</div>
                        <div className="add-text-bottom add-phone-text">FEATURES</div>
                        <img className="add-phone-image" src="/assets/addphone.png" alt="Phone Image"/>
                    </div>
                </div>
            </section>
        </>
    )
}
