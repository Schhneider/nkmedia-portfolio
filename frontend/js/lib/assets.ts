export function asset(path: string): string {
    const normalizedPath = path.replace(/^\/+/, '');
    const baseUrl = import.meta.env.BASE_URL.endsWith('/')
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

    return `${baseUrl}${encodeURI(normalizedPath)}`;
}
