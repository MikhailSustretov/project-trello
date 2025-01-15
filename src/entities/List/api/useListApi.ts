import { CreationResponse, DeletionResponse } from '@/entities/Board/api';
import { useAxios } from '@/shared/api/useAxios.ts';

import { CreateCardRequestData, CreateOrUpdateListRequestData, UpdateCardRequestData } from './list.types.ts';

export const useListApi = () => {
    const axiosInstance = useAxios();

    const createNewList = async (boardId: number, data: CreateOrUpdateListRequestData): Promise<CreationResponse> => {
        if (!data.title) {
            throw new Error('The list must have a title');
        }

        if (!data.position) {
            throw new Error('Position is required');
        }

        try {
            const response = await axiosInstance.post(`/board/${boardId}/list`, data);
            return response.data;
        } catch (error) {
            console.error('Error creating list:', error);
            throw error;
        }
    };

    const updateList = async (
        boardId: number,
        listId: number,
        data: CreateOrUpdateListRequestData
    ): Promise<CreationResponse> => {
        if (!(data.title || data.position)) {
            throw new Error('At least one parameter (title or position) is required for list updating');
        }

        try {
            const response = await axiosInstance.put(`/board/${boardId}/list/${listId}`, data);
            return response.data;
        } catch (error) {
            console.error('Error updating list:', error);
            throw error;
        }
    };

    const addCardToList = async (boardId: number, cardData: CreateCardRequestData): Promise<CreationResponse> => {
        try {
            const response = await axiosInstance.post(`/board/${boardId}/card`, cardData);
            return response.data;
        } catch (error) {
            console.error('Error adding card to list:', error);
            throw error;
        }
    };

    const deleteList = async (boardId: number, listId: number): Promise<DeletionResponse> => {
        try {
            const response = await axiosInstance.delete(`/board/${boardId}/list/${listId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting list:', error);
            throw error;
        }
    };

    const updateListCard = async (
        boardId: number,
        cardId: number,
        updatedCardData: UpdateCardRequestData
    ): Promise<CreationResponse> => {
        try {
            const response = await axiosInstance.put(`/board/${boardId}/card/${cardId}`, updatedCardData);
            return response.data;
        } catch (error) {
            console.error('Error updating card:', error);
            throw error;
        }
    };

    const deleteCard = async (boardId: number, cardId: number): Promise<DeletionResponse> => {
        try {
            const response = await axiosInstance.delete(`/board/${boardId}/card/${cardId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting card:', error);
            throw error;
        }
    };

    return {
        createNewList,
        updateList,
        addCardToList,
        updateListCard,
        deleteList,
        deleteCard,
    };
};
