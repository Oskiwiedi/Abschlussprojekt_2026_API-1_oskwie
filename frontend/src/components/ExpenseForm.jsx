// ExpenseForm.jsx
// Formular zum Erfassen einer neuen Ausgabe – verknüpft Ausgaben mit einem Motorrad
// Author: Oskar Wiederhold

import { useState, useEffect } from 'react'
import api from '../api/axiosInstance'

// Vordefinierte Ausgabenkategorien für den Kategorie-Dropdown
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
    const [motorcycles, setMotorcycles] = useState([])

    // Motorradliste beim ersten Rendern laden, damit der Dropdown befüllt werden kann
    useEffect(() => {
        api.get('/motorcycles').then(res => setMotorcycles(res.data))
    }, [])

    const handleSubmit = async () => {
        // motorcycleId als Query-Parameter, da die Verknüpfung zum Motorrad serverseitig erfolgt
        await api.post(`/expenses?motorcycleId=${motorcycleId}`, {
            amount, category, description, date
        })
        // Eltern-Komponente informieren und Formular zurücksetzen
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
                <select
                    value={motorcycleId}
                    onChange={(e) => setMotorcycleId(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/5 text-white"
                >
                    <option value="">Motorrad wählen</option>
                    {motorcycles.map(m => (
                        <option key={m.id} value={m.id}>{m.brand} {m.model} ({m.year})</option>
                    ))}
                </select>
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