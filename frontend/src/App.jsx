// App.jsx
// Haupt-Komponente der Anwendung – definiert Routing und globales Seitenlayout
// Author: Oskar Wiederhold

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Expenses from './pages/Expenses.jsx'
import Products from './pages/Products.jsx'
import Motorcycles from "./pages/Motorcycles.jsx";
import Navbar from './components/Navbar'

export default App

function App() {
    // Animierter Farbverlauf als Hintergrund – CSS-Animation "gradientShift" ist in index.css definiert
    return (
        <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #0f0f1a, #1a1a2e, #16213e, #0f3460)', backgroundSize: '400% 400%', animation: 'gradientShift 10s ease infinite'}}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/motorcycles" element={<Motorcycles />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}