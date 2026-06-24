// Navbar.jsx
// Responsive Navigationsleiste mit Desktop-Links und mobilem Hamburger-Menü
// Author: Oskar Wiederhold

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 text-white px-6 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Motorrad Kosten Manager</h1>

                {/* Hamburger Button - nur auf Mobile sichtbar */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                {/* Links - auf Desktop immer sichtbar */}
                <ul className="hidden md:flex gap-6">
                    <li><Link to="/" className="hover:text-orange-400 transition">Dashboard</Link></li>
                    <li><Link to="/motorcycles" className="hover:text-orange-400 transition">Motorräder</Link></li>
                    <li><Link to="/expenses" className="hover:text-orange-400 transition">Ausgaben</Link></li>
                    <li><Link to="/products" className="hover:text-orange-400 transition">Preisvergleich</Link></li>
                </ul>
            </div>

            {/* Mobile Menü */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col gap-4 mt-4">
                    <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-400 transition">Dashboard</Link></li>
                    <li><Link to="/motorcycles" onClick={() => setMenuOpen(false)} className="hover:text-orange-400 transition">Motorräder</Link></li>
                    <li><Link to="/expenses" onClick={() => setMenuOpen(false)} className="hover:text-orange-400 transition">Ausgaben</Link></li>
                    <li><Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-orange-400 transition">Preisvergleich</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar