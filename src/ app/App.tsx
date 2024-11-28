import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { BoardPage } from '../pages/BoardPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* rood page */}
                <Route path="/" element={<HomePage />} />

                {/* board page */}
                <Route path="/board/:board_id" element={<BoardPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
