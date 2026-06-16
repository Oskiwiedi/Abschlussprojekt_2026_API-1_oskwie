import PageHeader from "../components/PageHeader.jsx";
import { useEffect, useState } from "react";
import api from "../api/axiosInstance.js";

function Products() {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        api.get('/products').then(res => setProducts(res.data))
    }, [])

    const handleSearch = async () => {
        await api.post(`/scraping/fetch?query=${query}`)
        await new Promise(resolve => setTimeout(resolve, 1000))
        const res = await api.get('/products')
        setProducts(res.data)
    }

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
                <button onClick={handleSearch} className="bg-orange-500 text-white px-6 py-3 rounded-xl">
                    Suchen
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                        <h3 className="text-white font-bold">{product.name}</h3>
                        <p className="text-white/60 mt-1">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products