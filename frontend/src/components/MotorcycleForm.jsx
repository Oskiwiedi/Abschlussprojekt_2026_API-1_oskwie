// MotorcycleForm.jsx
// Formular zum Hinzufügen eines neuen Motorrads mit Marke, Modell, Baujahr und Kennzeichen
// Author: Oskar Wiederhold

import { useState } from "react";
import api from "../api/axiosInstance.js";

function MotorcycleForm(props) {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [licensePlate, setLicensePlate] = useState('')

    const handleSubmit = async () => {
        await api.post('/motorcycles', { brand, model, year, licensePlate })
        // Eltern-Komponente benachrichtigen und alle Felder zurücksetzen
        props.onSave()
        setBrand('')
        setModel('')
        setYear('')
        setLicensePlate('')
    }

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Motorrad hinzufügen</h2>
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Marke"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="text"
                    placeholder="Modell"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="number"
                    placeholder="Jahr"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="text"
                    placeholder="Kennzeichen"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
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

export default MotorcycleForm