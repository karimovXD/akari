class DASHBOARD {
    private root = '/';

    HOME = this.root;
    GENRES = {
        ROOT: `${this.root}genres`,
        GENRE_ID: (id: string, title: string) => `${this.GENRES.ROOT}/${id}/${title}`
    };
    STUDY = `${this.root}study`;
    ANIME = {
        ROOT: `${this.root}anime`,
        ANIME_ID: (id: string, title: string) => `${this.ANIME.ROOT}/${id}/${title}`
    };
    MANGA = {
        ROOT: `${this.root}manga`,
        MANGA_ID: (id: string, title: string) => `${this.MANGA.ROOT}/${id}/${title}`
    };
    CHARACTERS = {
        ROOT: `${this.root}characters`,
        MANGA_ID: (id: string, title: string) => `${this.CHARACTERS.ROOT}/${id}/${title}`
    };
    PEOPLE = {
        ROOT: `${this.root}people`,
        QUERY: (id: string, title: string) => `${this.PEOPLE.ROOT}/${id}/${title}`
    }
    SEARCH = {
        ROOT: `${this.root}search`,
        QUERY: (result: string, category: string) => {
            const params = new URLSearchParams();
            if (result.trim()) params.set("result", result.trim());
            if (category) params.set("category", category);
            return `${this.SEARCH.ROOT}?${params.toString()}`;
        },
    };
}

export const DASHBOARD_PAGES = new DASHBOARD();