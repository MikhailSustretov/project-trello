import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Board } from './pages/Board/components/Board.tsx';

const DefaultPage: React.FC = () => (
    <div>
        <h1>Welcome to the React App</h1>
        <p>This is the default page.</p>
    </div>
);

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* rood page */}
                <Route path="/" element={<DefaultPage />} />

                {/* board page */}
                <Route path="/board" element={<Board />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
