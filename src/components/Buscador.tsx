import React, { useState } from 'react';

const Buscador: React.FC = () => {
    const [resultado, setResultado] = useState<any>(null);
    const [nombreF, setNombre] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/getFarmaco`);
            const data = await response.json();

            if (data.success) {
                setResultado(data.farmacos);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Error al buscar las ideas');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full justify-center items-center p-4">
            <form onSubmit={handleSubmit} className='w-full flex justify-center'>
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-3/4 md:w-1/2 lg:w-1/3 p-2 border border-secondary rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    value={nombreF}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button
                    className="p-2 bg-primary text-white rounded-r-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary flex gap-2"
                    type='submit'
                >
                    Buscar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default Buscador;
