class DASHBOARD {
    private root = '/';

    HOME = this.root;
    GENRES = `${this.root}genres`;
    STUDY = `${this.root}study`;
    ANIME = {
        ROOT: `${this.root}anime`,
        ANIME_ID: (id: string, title: string) => `${this.root}anime/${id}/${title}`
    };
    MANGA = {
        ROOT: `${this.root}manga`,
        MANGA_ID: (id: string, title: string) => `${this.root}manga/${id}/${title}`
    };
    CHARACTERS = {
        ROOT: `${this.root}characters`,
        MANGA_ID: (id: string, title: string) => `${this.root}characters/${id}/${title}`
    };
    SEARCH = {
        ROOT: `${this.root}search`,
        QUERY: (result: string, category: string) => {
            const params = new URLSearchParams();
            if (result.trim()) params.set("result", result.trim());
            if (category) params.set("category", category);
            return `/search?${params.toString()}`;
        },
    };
}

export const DASHBOARD_PAGES = new DASHBOARD();