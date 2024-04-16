import SensoresDAO from "../dao/datos.dao.js";


const sensoresController = {};

export const getAll = (req, res) =>{
    SensoresDAO.getAll()
    .then(result=>res.json(result))
    .catch(err=>res.json({
        status:"Servidor no encontrado"
    }))
}

export const insertOne = async (req, res) => {
    try {
        const result = await SensoresDAO.insertOne(req.body);
        res.json({ status: "Sensor Guardado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default sensoresController;
