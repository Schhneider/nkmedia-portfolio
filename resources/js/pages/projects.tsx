import { Head } from '@inertiajs/react';

export default function Projects() {
    return (
        <>
            <Head title="NKmedia" />
            <div className="top-nav">
                <div>
                    <nav>
                        <a href="/" className="white-text-main">Atpakaļ</a>
                    </nav> 
                </div>
                <div>
                    <h3>soctikli</h3>
                </div>
            </div>
            <div className="row">
                <a href="#" className="white-text-main">PROJECTS</a>
            </div>
            <div className="project-slides">
                <a href="/projects/automotive">
                    <div className="row-no-padding">
                        <div className="image-container project-preview-container">
                            <p className="image-overlay-text white-text-main">AUTOMOTIVE</p>
                            <video
                                className="project-preview"
                                src="/images/nkmedialv-web-bg-1.mp4"
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                                }}
                            />
                        </div>
                    </div>
                </a>
                <a href="/projects/commercials">
                    <div className="row-no-padding">
                        <div className="image-container project-preview-container">
                            <p className="image-overlay-text white-text-main">WEDDINGS</p>
                            <video
                                className="project-preview"
                                src="/images/nkmedialv-web-bg-1.mp4"
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                                }}
                            />
                        </div>
                    </div>
                </a>
                <a href="/projects/weddings">
                    <div className="row-no-padding">
                        <div className="image-container project-preview-container">
                            <p className="image-overlay-text white-text-main">COMMERCIALS</p>
                            <video
                                className="project-preview"
                                src="/images/nkmedialv-web-bg-1.mp4"
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                                }}
                            />
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}