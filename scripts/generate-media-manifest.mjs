import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const imagesRoot = path.resolve('public/images');
const outputPath = path.resolve('frontend/js/generated/projectMedia.ts');
const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp']);
const videoExtensions = new Set(['.m4v', '.mov', '.mp4', '.webm']);

async function getFiles(directory) {
    try {
        const entries = await readdir(directory, { withFileTypes: true });
        const files = [];

        for (const entry of entries) {
            const entryPath = path.join(directory, entry.name);
            if (entry.isDirectory()) {
                files.push(...(await getFiles(entryPath)));
            } else {
                files.push(entryPath);
            }
        }

        return files;
    } catch (error) {
        if (error.code === 'ENOENT') return [];
        throw error;
    }
}

const files = await getFiles(imagesRoot);
const mediaBySlug = {};

for (const file of files) {
    const relativePath = path.relative(path.resolve('public'), file).split(path.sep).join('/');
    const relativeToImages = path.relative(imagesRoot, file).split(path.sep).join('/');
    const [folder] = relativeToImages.split('/');
    const extension = path.extname(file).toLowerCase();
    const mediaType = imageExtensions.has(extension) ? 'images' : videoExtensions.has(extension) ? 'videos' : null;

    if (!mediaType) continue;
    const slug = folder && folder !== path.basename(file) ? folder : 'shared';
    mediaBySlug[slug] ??= { images: [], videos: [] };
    mediaBySlug[slug][mediaType].push(relativePath);
}

const sharedVideos = mediaBySlug.shared?.videos ?? [];
delete mediaBySlug.shared;

for (const media of Object.values(mediaBySlug)) {
    media.videos.push(...sharedVideos);
    media.images.sort();
    media.videos.sort();
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(
    outputPath,
    `export const projectMediaBySlug: Record<string, { images: string[]; videos: string[] }> = ${JSON.stringify(mediaBySlug, null, 4)};\n`,
);