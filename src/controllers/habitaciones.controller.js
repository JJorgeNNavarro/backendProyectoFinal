import {
    createHabitacionService, 
    getAllHabitacionesService,
    putHabitacionesService,
    deleteHabitacionesService
} from '../services/habitaciones.servicios'

//controlador para crear una habitacion 
const createHabitaciones = async (req, res) => {
    try{
        const newHabitacion = await createHabitacionService (req.body)
        res.status(201).json ({newHabitacion})
    } catch (error) {
        res.status(500).json ({error})
    }
}
//controlador para obtener las habitaciones
const getAllHabitaciones = async (req, res) => {
    try{
        const habitaciones = await getAllHabitacionesService(req.query)
        res.status(201).json ({habitaciones})
    } catch (error){
        console.log(error);
        res.status(500).json({error})
    }
}
//controlador para editar las habitaciones
const editHabitaciones = async (req, res) => {
    try {
        const habitaciones = await putHabitacionesService(req.query)
        res.status(201).json ({habitaciones})
    } catch (error) {
        console.log(error);
        res.status(500).json ({error})
    }
}
//controlador para eliminar habitaciones
const deleteHabitaciones = async (req, res) => {
    try{
        const habitaciones = await deleteHabitacionesService(req.query)
        res.status (201).json ({habitaciones})
    } catch (error) {
        console.log(error);
        res.status(500).json ({error})
    }
}

const controllerHabitacion = {
    createHabitaciones,
    getAllHabitaciones,
    editHabitaciones,
    deleteHabitaciones
}
export default controllerHabitacion
