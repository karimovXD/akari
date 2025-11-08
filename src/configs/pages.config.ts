class DASHBOARD {
    private root = '/';

    HOME = this.root;
    MANGA = `${this.root}mangas`;
    GENRES = `${this.root}genres`;
    STUDY = `${this.root}study`;
    ANIME = {
        ROOT: `${this.root}anime`,
        ANIME_ID: (id: string) => `${this.root}anime/${id}`
    }
    SEARCH = {
        ROOT: `${this.root}search`,
        QUERY: (q: string) => `${this.root}search?result=${encodeURIComponent(q)}`,
    }
}

export const DASHBOARD_PAGES = new DASHBOARD();