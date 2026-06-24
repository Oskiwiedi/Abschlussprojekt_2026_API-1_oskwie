// Products.jsx
// Preisvergleichsseite – sucht Motorradteile via eBay-API und zeigt Ergebnisse sortierbar an
// Author: Oskar Wiederhold

import PageHeader from "../components/PageHeader.jsx";
import { useEffect, useState } from "react";
import api from "../api/axiosInstance.js";

function Products() {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [sortOrder, setSortOrder] = useState('asc')

    useEffect(() => {
        api.get('/products').then(res => setProducts(res.data))
    }, [])

    const handleSearch = async () => {
        if (!query) return
        setLoading(true)
        await api.post(`/scraping/fetch?query=${query}`)
        await new Promise(resolve => setTimeout(resolve, 3000))
        const res = await api.get('/products')
        setProducts(res.data)
        setLoading(false)
    }

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price
        return b.price - a.price
    })

    return (
        <div className="p-6">
            <PageHeader title="Preisvergleich" />
            <div className="mt-6 flex gap-2">
                <input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="z.B. motorrad bremsbelaege"
                    className="bg-white/5 border border-white/10 rounded-xl p-3 text-white w-full"
                />
                <select
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 text-white"
                >
                    <option value="asc">Preis aufsteigend</option>
                    <option value="desc">Preis absteigend</option>
                </select>
                <button onClick={handleSearch} className="bg-orange-500 text-white px-6 py-3 rounded-xl">
                    {loading ? 'Suche läuft...' : 'Suchen'}
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedProducts.length === 0 ? (
                    <p className="text-white/60 col-span-3 text-center py-8">Noch keine Produkte gesucht.</p>
                ) : (
                    sortedProducts.map(product => (
                        <div key={product.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                            {product.imageUrl && (
                                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-contain mb-4" />
                            )}
                            <h3 className="text-white font-bold">{product.name}</h3>
                            {product.price && (
                                <p className="text-orange-400 font-bold mt-2">{product.price} €</p>
                            )}
                            {product.url && (
                                <a href={product.url} target="_blank" className="text-white/60 text-sm mt-2 block hover:text-orange-400">
                                    Auf eBay ansehen →
                                </a>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Products