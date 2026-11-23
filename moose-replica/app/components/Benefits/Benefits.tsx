"use client"
import "./Benefits.css"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Benefits() {
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".benefit-container", sectionRef.current)
        cards.slice(0, -1).forEach((card) => {
            gsap.to(card, {
                opacity: 0,
                scale: 0.8,
                scrollTrigger: {
                    trigger: card,
                    start: "-20% top",
                    end: () => `+=${window.innerHeight * 0.7}`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });
        });
    }, { scope: sectionRef })
    return(
        <>
            <section ref={sectionRef} className="section section5">
                <div className="content-container5">
                    <div className="text-container5">
                        <div className="ben-label">
                            <img src="/assets/ben-badge.png" alt="Benefit Badge" className="ben-badge"/>
                            <span className="span-ben-label">Benefits</span>
                        </div>
                        <div className="ben-title">
                            <span className="ben-title-1">Experience</span>
                            <span className="ben-title-2">Future of Social Media</span>
                        </div>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-1-container benefit-container">
                            <img className="section5-card-bg" src="/assets/section5-bg.png" alt="Benefits" />
                            <div className="benefits-image-container">
                                <img className="benefits-image" src="/assets/benefit-0.png"/>
                            </div>
                            <div className="benefits-text-container">
                                <div className="benefits-upper-text-container">
                                    <span className="benefits-title">Feel at Ease, Every Time You Scroll</span>
                                    <span className="benefits-subtitle">Enjoy a social experience where everything feels more certain and trustworthy. Moose removes the doubt, so you can focus on what matters.</span>
                                </div>
                                <div className="benefits-lower-text-container">
                                    <div className="benefits-point benefits-point-1">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">No fake profiles or misleading content</span>
                                    </div>
                                    <div className="benefits-point benefits-point-2">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">A space you can explore without second guessing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefits-2-container benefit-container">
                            <img className="section5-card-bg" src="/assets/section5-bg.png" alt="Benefits" />
                            <div className="benefits-image-container">
                                <img className="benefits-image" src="/assets/benefit-1.png"/>
                            </div>
                            <div className="benefits-text-container">
                                <div className="benefits-upper-text-container">
                                    <span className="benefits-title">Be Yourself, Without the Pressure</span>
                                    <span className="benefits-subtitle">Share your life as it is, without the need to edit, impress, or keep up with unrealistic, standards. Moose gives you the freedom to just be you.</span>
                                </div>
                                <div className="benefits-lower-text-container">
                                    <div className="benefits-point benefits-point-1">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">No pressure to look perfect or curated</span>
                                    </div>
                                    <div className="benefits-point benefits-point-2">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">Authentic moments matter more than aesthetics</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefits-3-container benefit-container">
                            <img className="section5-card-bg" src="/assets/section5-bg.png" alt="Benefits" />
                            <div className="benefits-image-container">
                                <img className="benefits-image" src="/assets/benefit-2.png"/>
                            </div>
                            <div className="benefits-text-container">
                                <div className="benefits-upper-text-container">
                                    <span className="benefits-title">Build Real Connections That Matter</span>
                                    <span className="benefits-subtitle">Connect with people on a deeper level, where interactions feel genuine and meaningful. Moose is built for relationships, not just engagement.</span>
                                </div>
                                <div className="benefits-lower-text-container">
                                    <div className="benefits-point benefits-point-1">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">Talk to real people, not curated personas</span>
                                    </div>
                                    <div className="benefits-point benefits-point-2">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">Create connections based on trust, not appearance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefits-4-container benefit-container">
                            <img className="section5-card-bg" src="/assets/section5-bg.png" alt="Benefits" />
                            <div className="benefits-image-container">
                                <img className="benefits-image" src="/assets/benefit-3.png"/>
                            </div>
                            <div className="benefits-text-container">
                                <div className="benefits-upper-text-container">
                                    <span className="benefits-title">A Safer Space for Real People</span>
                                    <span className="benefits-subtitle">Feel more secure in a platform designed to protect its users and maintain authenticity. Moose prioritizes safety without compromising your experience.</span>
                                </div>
                                <div className="benefits-lower-text-container">
                                    <div className="benefits-point benefits-point-1">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">Reduced risk of fake accounts and scams</span>
                                    </div>
                                    <div className="benefits-point benefits-point-2">
                                        <div className="arrow-point">
                                            <img className="arrow-image" src="/assets/arrow-2.png"/>
                                        </div>
                                        <span className="benefits-point-text">Strong systems to keep the community trusted</span>
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
