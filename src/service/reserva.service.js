import Reservas from '../models/reserva.model.js'



//servicio para crear una reserva
export const createReservacionService = async ({fechaEntrada, fechaSalida, habitacion}) =>{

    const newReserva = new Reservas ({
        fechaEntrada,
        fechaSalida,
        habitacion
    })
    await newReserva.save ()
    return newReserva
}

//servicio para obtener reservas
export const getAllReservasService = async ({fechaEntrada, fechaSalida, habitacion}) =>{
    const query = {}
    if (fechaEntrada) query.fechaEntrada = fechaEntrada
    if (fechaSalida) query.fechaSalida = fechaSalida
    if (habitacion) query.habitacion = habitacion
    const reservasBuscadas = await Reservas.find(query)
    return reservasBuscadas
}

//servicio para editar reservas 
export const patchReservasService = async ({fechaEntrada, fechaSalida, habitacion, id}) =>{
    const query = {}
    if (fechaEntrada) query.fechaEntrada = fechaEntrada
    if (fechaSalida) query.fechaSalida = fechaSalida
    if (habitacion) query.habitacion = habitacion
    const reservasEditadas = await Reservas.findByIdAndUpdate (id, query)
    return reservasEditadas
}

//servicio para eliminar reservas 
export const deleteReservasService = async ({id}) => {
    const reservaEliminada = await Reservas.findById(id)
    if (!reservaEliminada) throw new Error ('reserva no encontrada')
    await Reservas.findByIdAndDelete(id)
}


