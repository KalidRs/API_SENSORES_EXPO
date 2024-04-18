import { Schema, model } from "mongoose";

const sensoresSchema = new Schema({

    sensor_temperatura: {
        type: Number,
        required: true,
      },
      sensor_humedad: {
        type: Number,
        required: true,
      },
      sensor_proximidad: {
        type: Number
      },

}, {
    versionKey: false,
    timestamps: true
});

export default model('sensores', sensoresSchema);

