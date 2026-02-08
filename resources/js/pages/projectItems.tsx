import { Head } from '@inertiajs/react';

export default function ProjectItems({ title, images, videos }) {
    return (
        <>
            <Head title="NKmedia" />
            <div className="top-nav">
                <div>
                    <nav>
                        <a href="/projects" className="white-text-main">Atpakaļ</a>
                    </nav> 
                </div>
                <div>
                    <h3>soctikli</h3>
                </div>
            </div>
            <div className="row">
                <span className="white-text-main">{title}</span>
            </div>
            <div className="row">
                <div className="project-portfolio-container">
                    {videos.map((src, i) => (
                        <div className="grid-item">
                            <video 
                                key={`vid-${i}`} 
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                autoPlay>
                                <source src={`/${src}`} />
                            </video>
                        </div>
                    ))}
                    {images.map((src, i) => (
                        <div className="grid-item">
                            <img key={`img-${i}`} src={`/${src}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}