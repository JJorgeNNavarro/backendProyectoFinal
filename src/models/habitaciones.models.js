import { Schema, model } from "mongoose"

const habitacionSchema = new Schema ({

    titulo: {
        type: String,
        required: true
    },
    descripcion1: {
        type: String,
        required: true,
    },
    descripcion2: {
        type: String,
        required: true,
    },
    descripcion3: {
        type: String,
        required:true,
    },
    imagen1:{
        type: String,
        required: true,
    },
    imagen2:{
        type: String,
        required: true,
    },
    imagen3:{
        type: String,
        required: true,
    },
    imagen4:{
        type: String,
        required: true,
    }

})
export default  model ('Habitaciones', habitacionSchema)