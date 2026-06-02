import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 600) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const nextSectionRef = useRef<null | HTMLDivElement>(null);

    const scrollToNext = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!nextSectionRef.current) return;

        const windowWidth = (1920 / window.innerWidth) + 0.5;

        const offset = 300 / windowWidth;
        const elementTop = nextSectionRef.current.getBoundingClientRect().top;
        const scrollTop = window.pageYOffset;

        window.scrollTo({
            top: elementTop + scrollTop - offset,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const modal = document.getElementById("contact-modal");
        const btn = document.getElementById("contact-button");
        const btn_mobile = document.getElementById("contact-button-mobile");
        const span = document.getElementById("close-contact-modal");
        const moreButton = document.getElementById("more-button");
        const hamburger = document.getElementById("navbar");

        const openModal = (e: Event) => {
            e.preventDefault();
            if (modal?.style) {
                modal.style.display = "block";
            }
        };

        const closeModal = () => {
            if (modal?.style) {
                modal.style.display = "none";
            }
        };

        const hideMoreButtonForMobile = () => {
            if (!moreButton) return;
            moreButton?.classList.toggle("hide-faster");
        };

        btn?.addEventListener("click", openModal);
        btn_mobile?.addEventListener("click", openModal);
        span?.addEventListener("click", closeModal);
        hamburger?.addEventListener("change", hideMoreButtonForMobile);

        const outsideClick = (event: MouseEvent) => {
            if (event.target === modal) {
            closeModal();
            }
        };

        window.addEventListener("click", outsideClick);

        return () => {
            btn?.removeEventListener("click", openModal);
            span?.removeEventListener("click", closeModal);
            window.removeEventListener("click", outsideClick);
        };
    }, []);

    return (
        <>
            <Head title="NKmedia" />
            <div id="contact-modal" className="modal">
                <div className="modal-content">
                    <img className="modal-logo unselectable" src="/images/NK-media-white 1.png" alt="logo" />
                    <p className="white-text-main unselectable">+371 talrunis</p>
                    <p className="white-text-main unselectable">epasts</p>
                </div>
            </div>
            <div className="main-page">
                <div className="top-nav">
                    <div>
                        <nav>
                            <a href="/projects" className="white-text-main">Projects</a>
                            <a href="#" className="white-text-main">About</a>
                            <a id="contact-button" href="#" className="white-text-main">Contacts</a>
                        </nav> 
                    </div>
                    <div>
                        <h3>soctikli</h3>
                    </div>
                </div>

                <section className="top-nav-mobile">
                    <nav id="navbar" className="navigation" role="navigation">
                        <input id="toggle1" type="checkbox" />
                        <label className="hamburger1" htmlFor="toggle1">
                        <div className="top"></div>
                        <div className="meat"></div>
                        <div className="bottom"></div>
                        </label>
                    
                        <nav className="menu1">
                            <a className="white-text-main link1" href="/projects">Projects</a>
                            <a className="white-text-main link1" href="">About</a>
                            <a className="white-text-main link1 kbutton-nav" href="#" id="contact-button-mobile">Contacts</a>
                        </nav>
                    </nav>
                </section>

                <div className={`image-container ${hidden ? 'hide' : ''}`}>
                    <video
                        className="video-preview"
                        src="/images/nkmedialv-web-bg-1.mp4"
                        poster="/images/video_preview.png" // optional fallback
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        autoPlay
                        />
                    <img className="image-overlay-logo" src="/images/NK-media-white 1.png" alt="logo" />
                </div>
            </div>

            <a className={`moreButton-container ${hidden ? 'hide' : ''}`} href="#" id="more-button" onClick={scrollToNext}>
                <div>
                    <p className="moreButton white-text-main">vairāk</p>
                </div>
                <div>
                    <img className="buttonDown" src="/images/arrow_down.png" alt="arrow" />
                </div>
            </a>

            <div ref={nextSectionRef} className="row">
                <div className="projectPreview-container">
                    <div className="projectPreview-main-image">
                        <img src="/images/main-project-image.jpg" alt="project" />
                    </div>
                    <div className="projectPreview-extra-images">
                        <img src="/images/extra-project-image.jpg" alt="project" />
                        <img src="/images/extra-project-image2.jpg" alt="project" />
                    </div>
                </div>
                <div className="projectPreview-container-mobile">
                    <div className="projectPreview-extra-images-mobile">
                        <img src="/images/main-project-image.jpg" alt="project" />
                        <img src="/images/extra-project-image.jpg" alt="project" />
                        <img src="/images/extra-project-image2.jpg" alt="project" />
                    </div>
                </div>
            </div>

            <div className="row">
                <a href="/projects" className="white-text-main"><u>MORE PROJECTS</u></a>
            </div>

            <div className="row"></div>

            <div className="row">
                <div>
                    <div className="modal-content-footer">
                        <img className="modal-logo unselectable" src="/images/NK-media-white 1.png" alt="logo" />
                        <p className="white-text-main unselectable">+371 talrunis</p>
                        <p className="white-text-main unselectable">epasts</p>
                    </div>
                </div>
            </div>
        </>
    );
}
