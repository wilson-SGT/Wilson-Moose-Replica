"use client"
import "./Features.css"

export default function About() {
    return(
        <>
            <section className="section section-3" id="key-features">
                <img src="/assets/reference-screenshot3.png" alt="reference image" className="section-reference"/>
                <div className="content-container3">
                    <div className="text-container3">
                        <div className="key-label">
                            <img src="/assets/key-badge.png" alt="Key Badge" className="key-badge"/>
                            <span className="span-key-label">Key Features</span>
                        </div>
                        <div className="key-title">
                            <span className="key-title-1">Built for Real.</span>
                            <br/>
                            <span className="key-title-2">Designed for You.</span>
                        </div>
                    </div>
                    <div className="features-container">
                        <div className="features-1">
                            <img src="/assets/BackgroundCard1.png" alt="Background Card" className="background-features1"/>
                        </div>
                        <div className="features-2">
                            <img src="/assets/BackgroundCard2.png" alt="Background Card" className="background-features2"/>
                        </div>
                        <div className="features-3">
                            <img src="/assets/BackgroundCard3.png" alt="Background Card" className="background-features3"/>
                        </div>
                        <div className="features-4">
                            <img src="/assets/BackgroundCard4.png" alt="Background Card" className="background-features4"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}