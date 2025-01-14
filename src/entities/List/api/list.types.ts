export interface CreateOrUpdateListRequestData {
    title?: string;
    position?: number;
}

export interface CreateCardRequestData {
    title: string;
    list_id: number;
    position: number;
    description?: string;
    custom?: {
        deadline: string;
    };
}

export interface UpdateCardRequestData {
    title?: string;
    list_id?: number;
    position?: number;
    description?: string;
    custom?: {
        deadline: string;
    };
}
