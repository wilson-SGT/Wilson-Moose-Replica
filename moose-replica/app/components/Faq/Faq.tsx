"use client"
import "./Faq.css"
import {useRef, useState} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Benefits() {
    const[openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]))

    const toggleIndex = (index: number) => {
        setOpenIndexes((prev) => {
            const next = new Set(prev)
            if (next.has(index)) {
                next.delete(index)
            } else {
                next.add(index)
            }
            return next
        })
    }

    type Faqs = {
        question: string;
        answer: string;
    }
    const Faqs: Faqs[] = [
        {
            question: "What makes Moose different from other social media apps?",
            answer: "MOOSE focuses on authenticity, allowing users to share genuine content without editing or filters. Our community values real connections and genuine interactions",
        },
        {
            question: "How does MOOSE ensure security and prevent fake accounts?",
            answer: "MOOSE uses facial recognition, device ID, and location verification during registration. This strict process ensures a trustworthy community where everyone is real."
        },
        {
            question: "Can I edit my posts after sharing?",
            answer: "You can edit captions and add additional context, but the original photos and videos remain unedited, preserving the authenticity of the content.",
        },
        {
            question: "What if I need help or have technical issues?",
            answer: "Our customer support team is available 24/7 to assist you with any issues or question you might have. Contact us through the app or on our website.",
        },
        {
            question: "Is MOOSE free to use?",
            answer: "Yes, MOOSE is free to download and use. We offer additional premium features for a fee, but the basic functionality is always free."
        },
        {
            question: "How does MOOSE stand out among social media platforms?",
            answer: "MOOSE is dedicated to authenticity. Our no-fake content policy, comprehensive security measures, and unique features like location-based dating ensure a genuine experience."
        },
        {
            question: "Can I form or join groups on MOOSE?",
            answer: "Yes! MOOSE allows you to create or join group chats, making it easy to connect with others based on shared interests or locations.",
        },
        {
            question: "What if I need help using the app?",
            answer: "Our dedicated customer support team is always here to assist you. Reach out via the app or on our website for any help you need.",
        }
    ]
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".faq-title",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(".faq-title-text", {
                opacity: 0,
                y: 75,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
            })
        gsap.timeline({
            scrollTrigger: {
                trigger: ".faqs-container",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(".faq-container", {
                opacity: 0,
                y: 75,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.2,
            })
    })

    return(
        <>
            <section className="section section6" id="faq">
                <div className="content-container6">
                    <div className="text-container6">
                        <div className="faq-label">
                            <img src="/assets/faq-badge.png" alt="FAQ Badge" className="faq-badge"/>
                            <span className="span-faq-label">FAQ</span>
                        </div>
                        <div className="faq-title">
                            <span className="faq-title-1">
                                <span className="faq-title-text">Frequently </span>
                                <span className="faq-title-text">Asked</span>
                            </span>
                            <span className="faq-title-2">
                                <span className="faq-title-text">Questions</span>
                            </span>
                        </div>
                    </div>
                    <div className="faqs-container">
                        {Faqs.map((item, index) => {
                            const isOpen = openIndexes.has(index);
                            return(
                                <div className={isOpen ? "faq-container open" : "faq-container"} onClick={() => toggleIndex(index)} key={item.question}>
                                    <div className="faq-upper">
                                        <div className="faq-question-container">
                                            <span className="faq-question">{item.question}</span>
                                            <div className="faq-button-container">
                                                <svg className="faq-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="faq-lower">
                                        <img className="faq-line" src="/assets/faq-line.png" alt="FAQ Line"/>
                                        <span className="faq-answer">{item.answer}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
