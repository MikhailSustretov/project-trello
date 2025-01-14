// import type { List } from '../../../entities/List/model/types';

export interface BoardCustom {
    color?: string;
}

export interface Board {
    id: number;
    title: string;
    lists: List[];
    custom?: BoardCustom;
}

export interface BoardProps {
    board: Board;
    onUpdate: () => void;
    className?: string;
}
