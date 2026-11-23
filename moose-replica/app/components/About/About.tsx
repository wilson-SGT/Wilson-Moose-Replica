"use client"
import "./About.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function About() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".content-container2",
                start: "center bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(".bubble", {
                opacity: 0,
                scale: 0.5,
                y: 50,
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power1.out",
                stagger: 0.1,
            })
            .fromTo(".title-mini-text", {
                opacity: 0,
                y: 50,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
            }, "<")
        gsap.fromTo(".sub-text", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".sub-text",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        })
        gsap.fromTo(".middle-download", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".middle-download",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        })
    })
    return(
        <>
            <section className="section section-2" id="about-us">
                <div className="content-container2">
                    <div className="inner-container">
                        <div className="bubble bubble-1">
                            <img src="/assets/bubble1.png" className="image-bubble-1" alt="Bubble 1"/>
                        </div>
                        <div className="bubble bubble-2">
                            <img src="/assets/bubble2.png" className="image-bubble-2" alt="Bubble 2"/>
                        </div>
                        <div className="bubble bubble-3">
                            <img src="/assets/bubble3.png" className="image-bubble-3" alt="Bubble 3"/>
                        </div>
                        <div className="bubble bubble-4">
                            <img src="/assets/bubble4.png" className="image-bubble-4" alt="Bubble 4"/>
                        </div>
                    </div>
                    <div className="text-container2">
                        <div className="title-text">
                            <span className="title-mini-text">The all-in-one social</span>
                            <br/>
                            <span className="title-mini-text">platform built on</span>
                            <br/>
                            <span className="title-mini-text">authenticity.</span>
                        </div>
                        <div className="sub-text">
                            <div className="line-left sec2-lines"/>
                            <span className="middle-sub-text">Feel at ease with a social space you can trust</span>
                            <div className="line-right2 sec2-lines"/>
                        </div>
                        <div className="middle-download">
                            <div className="middle-download-button" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moose_social&hl=id", "_blank")}>
                                <div className="middle-download-texts">
                                    <span className="download-now-text-2">
                                        Download Now
                                    </span>
                                </div>
                                <div className="middle-arrow-container">
                                    <img src="/assets/download.png" alt="download" className="middle-arrow-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}