import { createRoot } from 'react-dom/client';
import '../css/app.css';
import Welcome from './pages/welcome';
import Projects from './pages/projects';
import ProjectItems from './pages/projectItems';
import { useEffect, useMemo, useState } from 'react';
import { asset } from './lib/assets';
import { projectMediaBySlug } from './generated/projectMedia';

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
            const media = projectMediaBySlug[slug] ?? { images: [], videos: [] };
            const videos = media.videos.map((source) => asset(source));
            const images = media.images.map((source) => asset(source));

            return <ProjectItems title={title} videos={videos} images={images} />;
        }

        return <Welcome />;
    }, [route]);
}

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(<App />);
