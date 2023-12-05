import Reservas from '../models/reserva.model.js'


//funcion para hacer que no se repitan las fechas reservadas
const reservasSuperpuestas = (reservaExistentes, nuevaReserva) =>{
    for (const reserva of reservaExistentes ) {
        const fechaEntradaExistente = new Date (reserva.fechaEntrada) ;
        const fechaSalidaExistente =new Date (reserva.fechaSalida) ;
        const nuevaFechaEntrada =new Date (nuevaReserva.fechaEntrada);
        const nuevaFechaSalida =new Date (nuevaReserva.fechaSalida); 
        if (
            (nuevaFechaEntrada >= fechaEntradaExistente && nuevaFechaEntrada < nuevaFechaSalida) ||
            (nuevaFechaSalida > fechaEntradaExistente && nuevaFechaSalida >= fechaSalidaExistente) ||
            (nuevaFechaEntrada <= fechaEntradaExistente && nuevaFechaSalida >= fechaSalidaExistente)
        )return true    
    }
    return false
    }
//servicio para crear una reserva
export const createReservacionService = async ({fechaEntrada, fechaSalida, habitacion, nombre, email}) =>{

    const newReserva = new Reservas ({
        fechaEntrada,
        fechaSalida,
        habitacion,
        nombre,
        email
    })
    const reservaExistentes = await Reservas.find({habitacion: habitacion})
    if (reservasSuperpuestas (reservaExistentes, newReserva)) throw new Error ('Fechas no disponibles');
    await newReserva.save ()
    return newReserva
}

//servicio para obtener reservas
export const getAllReservasService = async ({fechaEntrada, fechaSalida, habitacion, nombre, email, id}) =>{
    const query = {}
    if (fechaEntrada) query.fechaEntrada = fechaEntrada
    if (fechaSalida) query.fechaSalida = fechaSalida
    if (habitacion) query.habitacion = habitacion
    if (nombre) query.nombre = nombre
    if (email) query.email = email
    if (id) query._id = id

    const reservasBuscadas = await Reservas.find(query)
    return reservasBuscadas
}

//servicio para editar reservas 
export const patchReservasService = async ({fechaEntrada, fechaSalida, habitacion, id, nombre, email}) =>{
    const query = {}
    if (fechaEntrada) query.fechaEntrada = fechaEntrada
    if (fechaSalida) query.fechaSalida = fechaSalida
    if (habitacion) query.habitacion = habitacion
    if (nombre) query.nombre = nombre
    if (email) query.email = email
    const reservasEditadas = await Reservas.findByIdAndUpdate (id, query)
    return reservasEditadas
}

//servicio para eliminar reservas 
export const deleteReservasService = async ({id}) => {
    const reservaEliminada = await Reservas.findById(id)
    if (!reservaEliminada) throw new Error ('reserva no encontrada')
    await Reservas.findByIdAndDelete(id)
}

