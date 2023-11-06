import { mongoose } from "mongoose"

const habitacionSchema = new Schema ({

    titulo: {
        type: String,
        required: true
    },
    descripcion1: {
        type: String,
        required,
    },
    descripcion2: {
        type: String,
        required,
    },
    descripcion3: {
        type: String,
        required,
    },
    imagen1:{
        type: String,
        required,
    },
    imagen2:{
        type: String,
        required,
    },
    imagen3:{
        type: String,
        required,
    },
    imagen4:{
        type: String,
        required,
    }

})
export default  mongoose.model ('Habitaciones', habitacionSchema)