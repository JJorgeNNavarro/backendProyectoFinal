import{
    createReservacionService,
    getAllReservasService,
    patchReservasService,
    deleteReservasService
} from '../service/reserva.service.js'



//controlador para crear una reserva 
export const createReservas  = async (req, res) =>{
    try{
        const newReserva = await createReservacionService (req.body)
        res.status (201).json ({newReserva})
    } catch (error){
        res.status(500).json ({error})
    }
}

//controlador para obtener todas las reservas
export const getAllReservas = async (req, res) => {
    try{
        const reservas = await getAllReservasService(req.query)
        res.status(201).json ({reservas})
    } catch (error){
        console.log(error);
        res.status(500).json ({error})
    }
}

//controlador para editar las reservas 
export const editReservas = async (req, res) =>{
    try{
        const reservas = await patchReservasService(req.body)
        res.status(201).json ({reservas})
    } catch (error){
        console.log(error);
        res.status(500).json ({error})
    }
}

//controlador para eliminar reservas 
export const deleteReservas = async (req, res) => {
    try{
        const reservas = await deleteReservasService (req.query)
        res.status(201).json ({reservas})
    }catch (error){
        console.log(error);
        res.status(500).json ({error})
    }
}