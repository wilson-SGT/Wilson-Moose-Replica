"use client"
import "./Features.css"

export default function Features() {
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
                            <span className="key-title-1">Built for Real.</span>
                            <span className="key-title-2">Designed for You.</span>
                        </div>
                    </div>
                    <div className="features-container">
                        <div className="features-1">
                            <img src="/assets/BackgroundCard1.png" alt="Background Card" className="background-features1"/>
                            <div className="item1-container">
                                <div className="item1-image-container">
                                    <img className="item1-main-image" src="/assets/item1.png"/>
                                </div>
                                <div className="item1-text-container">
                                    <span className="item1-text">Trust What You See</span>
                                    <span className="item1-subtext">No fake profiles, no misleading content - just real people and real moments. Moose ensures everything you see is authentic, so you can scroll and connect without second guessing.</span>
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
                                    <img className="item2-first-image" src="/assets/itemlayer1.png"/>
                                    <img className="item2-second-image" src="/assets/itemlayer2.png"/>
                                    <img className="item2-third-image" src="/assets/itemlayer3.png"/>
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