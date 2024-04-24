import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
    return (
        <main>
            <header>
                <Navbar />
            </header>
            <section>
                <Router>
                    <Routes>
                        <Route path='/' Component={Home} />
                    </Routes>
                </Router>
            </section>
        </main>
    );
}

export default App;
