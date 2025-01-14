import axios, { AxiosInstance, AxiosError } from 'axios';
import { useEffect } from 'react';

import { api } from '@/shared/config';
import { useLoading } from '@/shared/context';
import { notification } from '@/shared/lib';

const METHODS_WITH_NOTIFICATIONS = ['POST', 'PUT', 'DELETE'];

export const useAxios = (): AxiosInstance => {
    const { setIsLoading } = useLoading();

    const instance = axios.create({
        baseURL: api.baseURL,
        headers: {
            Authorization: 'Bearer 123',
            'Content-Type': 'application/json',
        },
    });

    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use(
            (config) => {
                setIsLoading(true);
                return config;
            },
            (error) => {
                setIsLoading(false);
                return Promise.reject(error);
            }
        );

        const responseInterceptor = instance.interceptors.response.use(
            (response) => {
                setIsLoading(false);

                if (METHODS_WITH_NOTIFICATIONS.includes(response.config.method?.toUpperCase() || '')) {
                    notification.success(response.statusText || 'Success');
                }

                return response;
            },
            (error: AxiosError) => {
                setIsLoading(false);

                if (METHODS_WITH_NOTIFICATIONS.includes(error.config?.method?.toUpperCase() || '')) {
                    const message = error.response?.data?.statusText || 'Произошла ошибка';
                    notification.error(message);
                }

                return Promise.reject(error);
            }
        );

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        };
    }, [instance, setIsLoading]);

    return instance;
};
