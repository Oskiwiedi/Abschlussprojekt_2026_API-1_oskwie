import PageHeader from "../components/PageHeader.jsx";
import MotorcycleForm from "../components/MotorcycleForm.jsx";
import { useEffect, useState } from "react";
import api from "../api/axiosInstance.js";

function Motorcycles() {
    const [motorcycles, setMotorcycles] = useState([])

    useEffect(() => {
        api.get('/motorcycles').then(res => setMotorcycles(res.data))
    }, [])

    return (
        <div className="p-6">
            <PageHeader title="Meine Motorräder" />
            <div className="mt-6">
                <MotorcycleForm />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {motorcycles.map(motorcycle => (
                    <div key={motorcycle.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white">{motorcycle.brand} {motorcycle.model}</h3>
                        <p className="text-white/60 mt-1">Jahrgang: {motorcycle.year}</p>
                        <p className="text-white/60">Kennzeichen: {motorcycle.licensePlate}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Motorcycles