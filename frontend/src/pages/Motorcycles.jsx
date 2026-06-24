// Motorcycles.jsx
// Seite zur Verwaltung der Motorräder – Anzeige, Hinzufügen und Löschen von Einträgen
// Author: Oskar Wiederhold

import PageHeader from "../components/PageHeader.jsx";
import MotorcycleForm from "../components/MotorcycleForm.jsx";
import { useEffect, useState } from "react";
import api from "../api/axiosInstance.js";

function Motorcycles() {
    const [motorcycles, setMotorcycles] = useState([])

    // Separate Funktion, damit sie sowohl im useEffect als auch nach dem Speichern/Löschen aufgerufen werden kann
    const fetchMotorcycles = () => {
        api.get('/motorcycles').then(res => setMotorcycles(res.data))
    }

    const handleDelete = async (id) => {
        await api.delete(`/motorcycles/${id}`)
        fetchMotorcycles()
    }

    useEffect(() => {
        fetchMotorcycles()
    }, [])

    return (
        <div className="p-6">
            <PageHeader title="Meine Motorräder" />
            <div className="mt-6">
                <MotorcycleForm onSave={fetchMotorcycles} />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {motorcycles.length === 0 ? (
                    <p className="text-white/60 col-span-3 text-center py-8">Noch keine Motorräder erfasst.</p>
                )  : (
                    motorcycles.map(motorcycle => (
                    <div key={motorcycle.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white">{motorcycle.brand} {motorcycle.model}</h3>
                        <p className="text-white/60 mt-1">Jahrgang: {motorcycle.year}</p>
                        <p className="text-white/60">Kennzeichen: {motorcycle.licensePlate}</p>
                        <button
                            onClick={() => handleDelete(motorcycle.id)}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                        >
                            Löschen
                        </button>
                    </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Motorcycles