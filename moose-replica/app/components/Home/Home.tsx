"use client"
import "./Home.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Home() {
    useGSAP(() => {
        const section = document.querySelector<HTMLElement>(".section-1")
        if (!section) return

        gsap.fromTo(".image-container", {
            yPercent: 0
        }, {
            yPercent: -30,
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })

        const xto = gsap.quickTo(".image-phone", "x", { duration: 0.6, ease: "power3" })
        const yto = gsap.quickTo(".image-phone", "y", { duration: 0.6, ease: "power3" })

        const follow = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect()
            xto(((e.clientX - rect.left) / rect.width - 0.5) * -40)
            yto(((e.clientY - rect.top) / rect.height - 0.5) * -40)
        }

        section.addEventListener("mousemove", follow)
        return () => section.removeEventListener("mousemove", follow)
    })

    return(
        <>
            <section className="section section-1" id="home">
                <div className="content-container">
                    <div className="center-container">
                        <div className="text-container1">
                            <div className="left-container">
                                <div className="left-text">
                                    Start sharing
                                    <br/>
                                    real moments
                                    <br/>
                                    <span className="left-highlight">
                                        <span className="left-line"/>
                                         With Moose
                                    </span>
                                </div>
                                <div className="left-download">
                                    <div className="left-download-button">
                                        <div className="left-download-texts">
                                            <span className="download-now-text download-now-text-1">
                                                Download Now
                                            </span>
                                        </div>
                                        <div className="left-arrow-container">
                                            <img src="/assets/download.png" alt="download" className="left-arrow-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src="/assets/phone-sec1.png" alt="Phone Image" className="image-phone"/>
                            </div>
                            <div className="right-container">
                                <div className="right-text">
                                    Discover the
                                    <br/>
                                    Social Media App That
                                    <br/>
                                    Values Authenticity
                                </div>
                            </div>
                        </div>
                        <div className="green-container">
                            <img src="/assets/green-container-bg.png" alt="Green Background" className="green-background"/>
                            <div className="text-container">
                                <div className="slide-animation">
                                    <h1 className="slide-animation-text">
                                        <span>MOOSE SOCIAL MEDIA • </span>
                                        <span>MOOSE SOCIAL MEDIA • </span>
                                    </h1>
                                </div>
                                <div className="line-divider">
                                    <img src="/assets/line-divider.png" alt="Line Divider" className="line-divider"/>
                                </div>
                                <div className="description-text">
                                    Connect with Real People and Share Genuine
                                    <br/>
                                    Moments Without Filters or Editing Tools.
                                </div>
                                <div className="list-container">
                                    <div className="list-item">
                                        <p className="list-item-text">Real</p>
                                        <div className="line-right"></div>
                                    </div>
                                    <div className="list-item">
                                        <p className="list-item-text">Unfiltered</p>
                                        <div className="line-right"></div>
                                    </div>
                                    <div className="list-item">
                                        <p className="list-item-text">Proven</p>
                                        <div className="line-right"></div>
                                    </div>
                                    <div className="list-item">
                                        <p className="list-item-text">Genuine</p>
                                        <div className="line-right"></div>
                                    </div>
                                    <div className="list-item">
                                        <p className="list-item-text">Authentic</p>
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