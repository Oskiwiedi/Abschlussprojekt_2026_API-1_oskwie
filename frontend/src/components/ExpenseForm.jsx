import { useState } from 'react'
import api from '../api/axiosInstance'

const KATEGORIEN = [
    'Benzin',
    'Service',
    'Versicherung',
    'Reparatur',
    'Zubehör',
    'Steuer',
    'Sonstiges'
]

function ExpenseForm(props) {
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [motorcycleId, setMotorcycleId] = useState('')

    const handleSubmit = async () => {
        await api.post(`/expenses?motorcycleId=${motorcycleId}`, {
            amount, category, description, date
        })
        props.onSave()
        setAmount('')
        setCategory('')
        setDescription('')
        setDate('')
        setMotorcycleId('')
    }

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Neue Ausgabe</h2>
            <div className="flex flex-col gap-4">
                <input
                    type="number"
                    placeholder="Betrag (CHF)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/5 text-white"
                >
                    <option value="">Kategorie wählen</option>
                    {KATEGORIEN.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Beschreibung"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="number"
                    placeholder="Motorrad ID"
                    value={motorcycleId}
                    onChange={(e) => setMotorcycleId(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition"
                >
                    Speichern
                </button>
            </div>
        </div>
    )
}

export default ExpenseForm