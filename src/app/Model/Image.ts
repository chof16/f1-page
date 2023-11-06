export interface Image {
    batchcomplete: string;
    query:         Query;
}

export interface Query {
    normalized: Normalized[];
    pages:      Pages;
}

export interface Normalized {
    from: string;
    to:   string;
}

export interface Pages {
    [key: string] : ImagePilot
}

export interface ImagePilot {
    pageid:    number;
    ns:        number;
    title:     string;
    thumbnail: Thumbnail;
    pageimage: string;
}

export interface Thumbnail {
    source: string;
    width:  number;
    height: number;
}
