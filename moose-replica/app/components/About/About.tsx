"use client"
import "./About.css"

export default function About() {
    return(
        <>
            <section className="section section-2" id="about-us">
                <div className="content-container2">
                    <div className="inner-container">
                        <div className="bubble-1">
                            <img src="/assets/bubble1.png" className="image-bubble-1" alt="Bubble 1"/>
                        </div>
                        <div className="bubble-2">
                            <img src="/assets/bubble2.png" className="image-bubble-2" alt="Bubble 2"/>
                        </div>
                        <div className="bubble-3">
                            <img src="/assets/bubble3.png" className="image-bubble-3" alt="Bubble 3"/>
                        </div>
                        <div className="bubble-4">
                            <img src="/assets/bubble4.png" className="image-bubble-4" alt="Bubble 4"/>
                        </div>
                    </div>
                    <div className="text-container2">
                        <div className="title-text">
                            <span>The all-in-one social</span>
                            <br/>
                            <span>platform built on</span>
                            <br/>
                            <span>authenticity.</span>
                        </div>
                        <div className="sub-text">
                            <div className="line-left"/>
                            <span className="middle-sub-text">Feel at ease with a social space you can trust</span>
                            <div className="line-right"/>
                        </div>
                        <div className="middle-download">
                            <div className="middle-download-button">
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