import express from 'express'
import{
    createHabitaciones,
    getAllHabitaciones,
    editHabitaciones,
    deleteHabitaciones
} from '../controllers/habitaciones.controller'

const router = express()

router.get ('/api/habitaciones', getAllHabitaciones)

router.delete('/api/habitaciones/:id', deleteHabitaciones)

router.put ('/api/habitaciones/:id', editHabitaciones)

router.post ('/api/habitaciones', createHabitaciones)

export default router; 

