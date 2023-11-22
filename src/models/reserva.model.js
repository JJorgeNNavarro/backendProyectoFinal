import  { model, Schema } from "mongoose";

const reservaSchema = new Schema(
    {
        fechaEntrada: {
            type: Date,
            required : true
        },
        fechaSalida: {
            type: Date,
            required : true
        },
        habitacion: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Habitaciones"
        },
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
)

export default model("Reserva", reservaSchema)