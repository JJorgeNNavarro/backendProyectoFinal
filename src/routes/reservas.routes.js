import  express  from "express"
import{
    createReservas,
    getAllReservas,
    editReservas,
    deleteReservas
} from '../controllers/reservas.controller.js'


const router = express ()

router.get  ('/api/reservas', getAllReservas)

router.delete ('/api/reservas', deleteReservas)

router.patch ('/api/reservas', editReservas)

router.post ('/api/reservas', createReservas)

export default router