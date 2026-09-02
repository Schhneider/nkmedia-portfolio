import { createRoot } from 'react-dom/client';
import '../css/app.css';
import Welcome from './pages/welcome';
import Projects from './pages/projects';
import ProjectItems from './pages/projectItems';
import { useEffect, useMemo, useState } from 'react';
import { asset } from './lib/assets';

const projectMediaBySlug: Record<string, { images: string[]; videos: string[] }> = {
    automotive: {
        images: [
            'images/automotive/42fc9af1ad4332a6e95d95722ddf27a4.jpg',
            'images/automotive/59-DSC02723_pieturas_KarlisVolkovskisFoto.jpg',
            'images/automotive/da6f-60531465eb182-scaled.jpg',
            'images/automotive/DSC_0233-scaled.jpg',
            'images/automotive/EdgarsFoto_WEB_1001.jpg',
            'images/automotive/EdgarsFoto_WEB_1004-1.jpg',
            'images/automotive/IMG_0517.jpg',
            'images/automotive/Straßenbahn_Liepaja_CroTram.jpg',
        ],
        videos: ['images/nkmedialv-web-bg-1.mp4'],
    },
    commercials: {
        images: [
            'images/commercials/e1f3-6751b5d590d60.jpeg',
            'images/commercials/Foto_12-10-2023-preses-relīzei.jpg',
            'images/commercials/Untitdddled.jpg',
        ],
        videos: ['images/nkmedialv-web-bg-1.mp4'],
    },
    weddings: {
        images: [
            'images/weddings/42fc9af1ad4332a6e95d95722ddf27a4.jpg',
            'images/weddings/DSC_0233-scaled.jpg',
            'images/weddings/IMG_0517.jpg',
        ],
        videos: ['images/nkmedialv-web-bg-1.mp4'],
    },
};

function App() {
    const [route, setRoute] = useState(() => {
        const raw = window.location.hash.replace(/^#/, '') || '/';
        return raw.replace(/\/+$/, '') || '/';
    });

    useEffect(() => {
        const onHashChange = () => {
            const raw = window.location.hash.replace(/^#/, '') || '/';
            setRoute(raw.replace(/\/+$/, '') || '/');
        };

        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return useMemo(() => {
        if (route === '/projects') {
            return <Projects />;
        }

        if (route.startsWith('/projects/')) {
            const slug = route.replace('/projects/', '') || 'project';
            const title = slug.charAt(0).toUpperCase() + slug.slice(1);
            const media = projectMediaBySlug[slug] ?? projectMediaBySlug.automotive;
            const videos = media.videos.map((source) => asset(source));
            const images = media.images.map((source) => asset(source));

            return <ProjectItems title={title} videos={videos} images={images} />;
        }

        return <Welcome />;
    }, [route]);
}

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(<App />);
