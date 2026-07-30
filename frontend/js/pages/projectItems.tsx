import { useEffect } from 'react';
import { asset } from '../lib/assets';

interface ProjectItemsProps {
    title?: string;
    images?: string[];
    videos?: string[];
}

export default function ProjectItems({ title = '', images = [], videos = [] }: ProjectItemsProps) {
    useEffect(() => {
        document.title = 'NKmedia';
    }, []);

    return (
        <>
            <div className="top-nav">
                <div>
                    <nav>
                        <a href="#/projects" className="white-text-main">Atpakaļ</a>
                    </nav> 
                </div>
                <div>
                    <h3>soctikli</h3>
                </div>
            </div>
            <div className="row">
                <div className="top-nav-mobile top-nav-padding">
                    <div>
                        <nav>
                            <a href="#/projects" className="white-text-second">Atpakaļ</a>
                        </nav> 
                    </div>
                </div>
            </div>
            <div className="row">
                <span className="white-text-main">{title}</span>
            </div>
            <div className="row">
                <div className="project-portfolio-container">
                    {videos.map((src, i) => (
                        <div className="grid-item" key={`vid-${i}`}>
                            <video
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                autoPlay
                                poster={asset('images/video_preview.png')}>
                                <source src={asset(src)} type={src.endsWith('.mp4') ? 'video/mp4' : undefined} />
                            </video>
                        </div>
                    ))}
                    {images.map((src, i) => (
                        <div className="grid-item">
                            <img key={`img-${i}`} src={asset(src)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}