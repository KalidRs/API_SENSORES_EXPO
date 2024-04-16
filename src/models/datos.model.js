import { Schema, model } from "mongoose";

const sensoresSchema = new Schema({

    sensor_temperatura: Number,
    sensor_humedad: Number,
    sensor_proximidad: Number

}, {
    versionKey: false,
    timestamps: true
});

export default model('sensores', sensoresSchema);

