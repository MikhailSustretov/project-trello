export interface BoardRequest {
    title: string;
    custom?: {
        description?: string;
    };
}

export interface BoardResponse {
    id: number;
    title: string;
    custom?: {
        description?: string;
    };
}
