import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="NKmedia" />
            <div className="top-nav">
                <div>
                    <nav>
                        <a href="#">Projekti</a>
                        <a href="#">Par mums</a>
                        <a href="#">Kontakti</a>
                    </nav> 
                </div>
                <div>
                    <h3>soctikli</h3>
                </div>
            </div>

            <div className="image-container">
                <img className="video-preview" src="/images/video_preview.png" alt="video" />
                <img className="image-overlay-logo" src="/images/NK-media-white 1.png" alt="logo" />
            </div>

            <div className="moreButton-container">
                <div>
                    <a className="moreButton" href="#">vairāk</a>
                </div>
                <div>
                    <img className="buttonDown" src="/images/arrow_down.png" alt="arrow" />
                </div>
            </div>
        </>
    );
}
