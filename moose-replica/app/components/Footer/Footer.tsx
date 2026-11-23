"use client"
import "./Footer.css"
import RollText from "../RollText/RollText"

export default function Benefits() {
    return(
        <>
            <section className="footer">
                <div className="footer-content-container">
                    <div className="footer-container">
                        <img className="footer-line" src="/assets/footer-line.png"/>
                        <div className="footer-text">
                            <span className="copyright-text">© 2025 Copyright - Moose Designed by SGT</span>
                            <div className="footer-download-button" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moose_social&hl=id", "_blank")}>
                                <span className="footer-download-text"><RollText text="Download Now" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
