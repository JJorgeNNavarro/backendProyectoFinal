import {
    createHabitacionService, 
    getAllHabitacionesService,
    putHabitacionesService,
    deleteHabitacionesService
} from '../services/habitaciones.servicios.js'

//controlador para crear una habitacion 
export const createHabitaciones = async (req, res) => {
    try{
        const newHabitacion = await createHabitacionService (req.body)
        res.status(201).json ({newHabitacion})
    } catch (error) {
        res.status(500).json ({error})
    }
}
//controlador para obtener las habitaciones
export const getAllHabitaciones = async (req, res) => {
    try{
        const habitaciones = await getAllHabitacionesService(req.query)
        res.status(201).json ({habitaciones})
    } catch (error){
        console.log(error);
        res.status(500).json({error})
    }
}
//controlador para editar las habitaciones
export const editHabitaciones = async (req, res) => {
    try {
        const habitaciones = await putHabitacionesService(req.query)
        res.status(201).json ({habitaciones})
    } catch (error) {
        console.log(error);
        res.status(500).json ({error})
    }
}
//controlador para eliminar habitaciones
export const deleteHabitaciones = async (req, res) => {
    try{
        const habitaciones = await deleteHabitacionesService(req.query)
        res.status (201).json ({habitaciones})
    } catch (error) {
        console.log(error);
        res.status(500).json ({error})
    }
}


