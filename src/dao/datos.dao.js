import Sensores from "../models/datos.model.js";
const SensoresDAO={};

SensoresDAO.getAll=async()=>{
    const sensores=await Sensores.find({});
    return sensores;
};

SensoresDAO.insertOne=async(sensores)=>{
    return await Sensores.create(sensores);
};

export default SensoresDAO;