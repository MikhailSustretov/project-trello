import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, BoardPage } from '@/pages';
import { LoadingProvider, useLoading, ProgressBar, toastConfig } from '@/shared';

const AppContent: React.FC = () => {
    const { isLoading } = useLoading();

    return (
        <>
            {isLoading && <ProgressBar />}
            <Toaster {...toastConfig} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/board/:board_id" element={<BoardPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

const App: React.FC = () => {
    return (
        <LoadingProvider>
            <AppContent />
        </LoadingProvider>
    );
};

export default App;
