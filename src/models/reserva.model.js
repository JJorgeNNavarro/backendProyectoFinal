import  { model, Schema } from "mongoose";

const reservaSchema = new Schema(
    {
        fechaEntrada: {
            type: Date,
            required : true,
        },
        fechaSalida: {
            type: Date,
            required : true,
        },
        habitacion: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Habitaciones",
        },
        usuario: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Habitaciones"
        }
    }
)

export default model("Reserva", reservaSchema)