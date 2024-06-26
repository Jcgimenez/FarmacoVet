import InfoDev from "@/components/InfoDev";
import Navbar from "@/components/NavBar";
import React, { useState, useEffect } from 'react';

interface FarmacosI {
  id: number;
  nombre: any;
  descripcion: string;
  grupo: string;
  mecanismo: string;
  familia_nombre: string;
}

export default function List() {
  const [resultado, setResultado] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-primary">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white p-24">
        {resultado && (
          <div className="bg-complementary text-primary">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nombre</th>
                  <th className="border px-4 py-2">Descripción</th>
                  <th className="border px-4 py-2">Grupo</th>
                  <th className="border px-4 py-2">Mecanismo</th>
                  <th className="border px-4 py-2">Familia</th>
                </tr>
              </thead>
              <tbody>
                {resultado.map((farmaco: FarmacosI) => (
                  <tr key={farmaco.id}>
                    <td className="border px-4 py-2">{farmaco.nombre}</td>
                    <td className="border px-4 py-2">{farmaco.descripcion}</td>
                    <td className="border px-4 py-2">{farmaco.grupo}</td>
                    <td className="border px-4 py-2">{farmaco.mecanismo}</td>
                    <td className="border px-4 py-2">{farmaco.familia_nombre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <InfoDev />
    </div>
  );
}
