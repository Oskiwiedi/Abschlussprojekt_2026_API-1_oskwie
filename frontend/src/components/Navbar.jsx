import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 text-white px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Motorrad Kosten Manager</h1>
            <ul className="flex gap-6">
                <li><Link to="/" className="hover:text-orange-400 transition">Dashboard</Link></li>
                <li><Link to="/motorcycles" className="hover:text-orange-400 transition">Motorräder</Link></li>
                <li><Link to="/expenses" className="hover:text-orange-400 transition">Ausgaben</Link></li>
                <li><Link to="/products" className="hover:text-orange-400 transition">Preisvergleich</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar