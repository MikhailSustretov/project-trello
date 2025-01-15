import { ICard } from '@/entities/List/ui/ListCard/IListCard';

export interface BoardRequest {
    title?: string;
    custom?: {
        description?: string;
        color?: string;
    };
}

export interface BoardResponse {
    id: number;
    title: string;
    custom?: {
        description?: string;
        color?: string;
    };
}

export interface CreationResponse {
    result: string;
    id: number;
}

export interface DeletionResponse {
    result: string;
}

export interface FullBoardResponse {
    title: string;
    custom?: {
        description?: string;
        color?: string;
    };
    users: [
        {
            id: number;
            username: string;
        },
    ];
    lists: [
        {
            id: number;
            title: string;
            cards: [ICard];
        },
    ];
}
