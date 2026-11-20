"use client"
import "./Features.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Features() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".key-title",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(".key-titles", {
                opacity: 0,
                y: 50,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
            })
        gsap.fromTo(".item2-text", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".item2-text",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
        gsap.fromTo(".item2-subtext", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".item2-subtext",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: ".item2-image-container",
                start: "20% bottom",
                end: "40% top",
                toggleActions: "play reverse play reverse",
            }
        })
            .fromTo(".item2-images", {
                opacity: 0,
                y: -50,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
            })

        gsap.timeline({
            scrollTrigger: {
                trigger: ".item1-image-container",
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            }
        })
            .to(".item1-main-image", {
                rotate: 0,
                duration: 1,
                ease: "power3.out",
            })
            .to(".item1-p1", {
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
            }, "-=0.65")
            .to(".item1-p2", {
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
            }, "<")
            .to(".item1-p3", {
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
            }, "<")
            .to(".item1-p4", {
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
            }, "<")
            .to(".item1-p5", {
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
            }, "<")
            .to(".item1-p6", {
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.out",
                opacity: 1,
            }, "<")
            .to(".item1-line", {
                opacity: 1,
                duration: 1,
            }, "<+=0.3")
        gsap.timeline({
            scrollTrigger: {
                trigger: ".item1-text-container",
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        })
            .fromTo(".item1-texts", {
                opacity: 0,
                y: 50,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.25,
            })
        gsap.fromTo(".item3-text", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".item3-text",
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        })
        gsap.fromTo(".item3-subtext", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".item3-subtext",
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        })
        gsap.fromTo(".item4-text", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".item4-text",
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        })
        gsap.fromTo(".item4-download-button", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".item4-download-button",
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        })
    })
    return(
        <>
            <section className="section section-3" id="key-features">
                <div className="content-container3">
                    <div className="text-container3">
                        <div className="key-label">
                            <img src="/assets/key-badge.png" alt="Key Badge" className="key-badge"/>
                            <span className="span-key-label">Key Features</span>
                        </div>
                        <div className="key-title">
                            <span className="key-title-1">
                                <span className="key-titles">Built </span>
                                <span className="key-titles">for </span>
                                <span className="key-titles">Real. </span>
                            </span>
                            <span className="key-title-2">
                                <span className="key-titles">Designed </span>
                                <span className="key-titles">for </span>
                                <span className="key-titles">You.</span>
                            </span>
                        </div>
                    </div>
                    <div className="features-container">
                        <div className="features-1">
                            <img src="/assets/BackgroundCard1.png" alt="Background Card" className="background-features1"/>
                            <div className="item1-container">
                                <div className="item1-image-container">
                                    <img className="item1-line" src="/assets/item1-line.png" alt="" />
                                    <div className="item1-icons-container" aria-hidden="true">
                                        <img className="item1-p1" src="/assets/item1-p1.png" alt="" />
                                        <img className="item1-p2" src="/assets/item1-p2.png" alt="" />
                                        <img className="item1-p3" src="/assets/item1-p3.png" alt="" />
                                        <img className="item1-p4" src="/assets/item1-p4.png" alt="" />
                                        <img className="item1-p5" src="/assets/item1-p5.png" alt="" />
                                        <img className="item1-p6" src="/assets/item1-p6.png" alt="" />
                                    </div>
                                    <img className="item1-main-image" src="/assets/item1.png"/>
                                </div>
                                <div className="item1-text-container">
                                    <span className="item1-text item1-texts">Trust What You See</span>
                                    <span className="item1-subtext item1-texts">No fake profiles, no misleading content - just real people and real moments. Moose ensures everything you see is authentic, so you can scroll and connect without second guessing.</span>
                                </div>
                            </div>
                        </div>
                        <div className="features-2">
                            <img src="/assets/BackgroundCard2.png" alt="Background Card" className="background-features2"/>
                            <div className="item2-container">
                                <div className="item2-text-container">
                                    <span className="item2-text">Be Yourself, Without Pressure</span>
                                    <span className="item2-subtext">Forget the need to be perfect. Share your life as it is - unfiltered, unedited, and real, in a space where authenticity matters more than appearance.</span>
                                </div>
                                <div className="item2-image-container">
                                    <img className="item2-first-image item2-images" src="/assets/itemlayer1.png"/>
                                    <img className="item2-second-image item2-images" src="/assets/itemlayer2.png"/>
                                    <img className="item2-third-image item2-images" src="/assets/itemlayer3.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="features-3">
                            <img src="/assets/BackgroundCard3.png" alt="Background Card" className="background-features3"/>
                            <div className="item3-container">
                                <div className="item3-text-container">
                                    <span className="item3-text">Connect for Real</span>
                                    <span className="item3-subtext">Go beyond likes and curated personas.  Connect with real people and build genuine relationships based on trust, not lusion.</span>
                                </div>
                                <div className="item3-image-container">
                                    <img className="item3-first-image" src="/assets/item3layer1.png"/>
                                    <img className="item3-second-image" src="/assets/item3layer2.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="features-4">
                            <img src="/assets/BackgroundCard4.png" alt="Background Card" className="background-features4"/>
                            <div className="item4-container">
                                <div className="item4-image-container">
                                    <img className="item4-image" src="/assets/item4.png"/>
                                </div>
                                <div className="item4-text-container">
                                    <span className="item4-text">Get the app</span>
                                    <div className="item4-download">
                                        <div className="item4-download-button">
                                            <div className="item4-download-texts">
                                                <span className="download-now-item4">
                                                    Download Now
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
