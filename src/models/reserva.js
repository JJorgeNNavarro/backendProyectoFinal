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
        }
    }
)

export default model("reserva", reservaSchema)