// Dashboard.jsx
// Übersichtsseite mit Kennzahlen zu Motorrädern, Gesamtausgaben und den letzten Einträgen
// Author: Oskar Wiederhold

import PageHeader from "../components/PageHeader.jsx";
import api from "../api/axiosInstance.js";
import { useEffect, useState } from "react";

function Dashboard() {
    const [motorcycles, setMotorcycles] = useState([])
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        api.get('/motorcycles').then(res => setMotorcycles(res.data))
        api.get('/expenses').then(res => setExpenses(res.data))
    }, [])

    // Gesamtkosten aller Ausgaben summieren
    const totalCost = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)

    return (
        <div className="p-6">
            <PageHeader title="Dashboard" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                    <p className="text-white/60">Anzahl Motorräder</p>
                    <h2 className="text-4xl font-bold text-white mt-2">{motorcycles.length}</h2>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                    <p className="text-white/60">Gesamtausgaben</p>
                    <h2 className="text-4xl font-bold text-orange-400 mt-2">{totalCost.toFixed(2)} CHF</h2>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                    <p className="text-white/60">Anzahl Ausgaben</p>
                    <h2 className="text-4xl font-bold text-white mt-2">{expenses.length}</h2>
                </div>
            </div>
            <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Letzte Ausgaben</h2>
                {/* Die letzten 5 Ausgaben in umgekehrter Reihenfolge anzeigen (neueste zuerst) */}
                {expenses.slice(-5).reverse().map(expense => (
                    <div key={expense.id} className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-white">{expense.category}</span>
                        <span className="text-orange-400 font-bold">{expense.amount} CHF</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard