import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Configurar la conexión a la base de datos PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            // Consulta SQL para seleccionar todos los registros de la tabla 'farmacos'
            // que tienen una coincidencia en la tabla 'familias'
            const queryFarmacos = `
                SELECT 
                    farmacos.*, 
                    CASE 
                        WHEN CAST(farmacos.familia AS INTEGER) = 0 THEN '' 
                        ELSE familias.nombre 
                    END AS familia_nombre
                FROM farmacos 
                LEFT JOIN familias ON CAST(farmacos.familia AS INTEGER) = familias.id;
            `;

            // Conectar y ejecutar la consulta
            const client = await pool.connect();
            const result = await client.query(queryFarmacos);
            client.release();

            // Enviar la respuesta con los datos obtenidos
            res.status(200).json({ success: true, farmacos: result.rows });
        } catch (error) {
            console.error('Error en la consulta SQL:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ error: `Método ${req.method} no permitido` });
    }
};

export default handler;
