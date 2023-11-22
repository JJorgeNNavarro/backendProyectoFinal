import  express  from "express"
import{
    createReservas,
    getAllReservas,
    editReservas,
    deleteReservas
} from '../controllers/reservas.controller.js'


const router = express ()

router.get  ('/', getAllReservas)

router.delete ('/', deleteReservas)

router.patch ('/', editReservas)

router.post ('/', createReservas)

export default router