import { useAxios } from '@/shared/api';

import { BoardRequest, BoardResponse, CreationResponse, DeletionResponse, FullBoardResponse } from './board.types';

export const useBoardApi = () => {
    const axiosInstance = useAxios();

    const createNewBoard = async (data: BoardRequest): Promise<CreationResponse> => {
        try {
            const response = await axiosInstance.post('/board', data);
            return response.data;
        } catch (error) {
            console.error('Error creating board:', error);
            throw error;
        }
    };

    const getBoards = async (): Promise<BoardResponse[]> => {
        try {
            const response = await axiosInstance.get('/board');
            return response.data.boards;
        } catch (error) {
            console.error('Error getting boards:', error);
            throw error;
        }
    };

    const getBoardById = async (boardId: number): Promise<FullBoardResponse> => {
        try {
            const response = await axiosInstance.get(`/board/${boardId}`);
            return response.data;
        } catch (error) {
            console.error('Error getting board by ID:', error);
            throw error;
        }
    };

    const updateBoard = async (boardId: number, newBoardData: BoardRequest): Promise<CreationResponse> => {
        try {
            const response = await axiosInstance.put(`/board/${boardId}`, newBoardData);
            return response.data;
        } catch (error) {
            console.error('Error updating board:', error);
            throw error;
        }
    };

    const deleteBoard = async (boardId: number): Promise<DeletionResponse> => {
        try {
            const response = await axiosInstance.delete(`/board/${boardId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting board:', error);
            throw error;
        }
    };

    return { createNewBoard, getBoards, getBoardById, updateBoard, deleteBoard };
};
