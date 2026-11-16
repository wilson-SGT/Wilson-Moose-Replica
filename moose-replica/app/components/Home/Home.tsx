"use client"
import "./Home.css"

export default function Home() {
    return(
        <>
            <section className="section section-1" id="home">
                <div className="content-container">
                    <div className="center-container">
                        <div className="text-container">
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
                                        <div className="line-right"></div>
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