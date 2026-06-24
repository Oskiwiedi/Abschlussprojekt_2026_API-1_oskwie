// Expenses.jsx
// Seite zur Verwaltung von Ausgaben, zeigt Ausgabenliste, Erfassungsformular und Balkendiagramm nach Kategorie
// Autor: Oskar Wiederhold

import ExpenseForm from "../components/ExpenseForm.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useEffect, useState } from "react";
import api from "../api/axiosInstance.js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function Expenses() {
    const [expenses, setExpenses] = useState([])

    const fetchExpenses = () => {
        api.get('/expenses').then(res => setExpenses(res.data))
    }

    const handleDelete = async (id) => {
        await api.delete(`/expenses/${id}`)
        fetchExpenses()
    }

    useEffect(() => {
        fetchExpenses()
    }, [])

    // Ausgaben nach Kategorie aggregieren für das Balkendiagramm (Summe pro Kategorie)
    const data = expenses.reduce((acc, expense) => {
        const existing = acc.find(item => item.name === expense.category)
        if (existing) {
            existing.value += parseFloat(expense.amount)
        } else {
            acc.push({ name: expense.category, value: parseFloat(expense.amount) })
        }
        return acc
    }, [])

    // Datum von ISO-Format (YYYY-MM-DD) in deutsches Format (DD.MM.YYYY) umwandeln
    const formatDate = (dateStr) => {
        if (!dateStr) return ''
        const [year, month, day] = dateStr.split('-')
        return `${day}.${month}.${year}`
    }

    return (
        <div className="p-6">
            <PageHeader title="Ausgaben" />
            <div className="mt-6">
                <ExpenseForm onSave={fetchExpenses} />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {expenses.length === 0 ? (
                    <p className="text-white/60 col-span-3 text-center py-8">Noch keine Ausgaben erfasst.</p>
                ) : (
                    expenses.map(expense => (
                        <div key={expense.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white">{expense.amount} CHF</h3>
                            <p className="text-white/60 mt-1">Kategorie: {expense.category}</p>
                            <p className="text-white/60">Beschreibung: {expense.description}</p>
                            <p className="text-white/60">Datum: {formatDate(expense.date)}</p>
                            <button
                                onClick={() => handleDelete(expense.id)}
                                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                            >
                                Löschen
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Ausgaben nach Kategorie</h2>
                {expenses.length === 0 ? (
                    <p className="text-white/60 text-center py-8">Noch keine Ausgaben vorhanden.</p>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#ffffff60" />
                            <YAxis stroke="#ffffff60" />
                            <Tooltip />
                            <Bar dataKey="value" fill="#f97316" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    )
}

export default Expenses