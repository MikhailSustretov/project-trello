export interface IList {
    id: number;
    title: string;
    position: number;
    cards: any[]; // можно уточнить тип карточек, если нужно
}
