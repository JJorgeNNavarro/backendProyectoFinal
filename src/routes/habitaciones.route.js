import express from 'express'
import{
    createHabitaciones,
    getAllHabitaciones,
    editHabitaciones,
    deleteHabitaciones
} from '../controllers/habitaciones.controller.js'

const router = express()

router.get ('/', getAllHabitaciones)

router.delete('/', deleteHabitaciones)

router.put ('/', editHabitaciones)

router.post ('/', createHabitaciones)

export default router; 

