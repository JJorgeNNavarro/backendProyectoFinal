import Habitaciones from '../models/habitaciones.models.js'


//servicio para crear una nueva habitacion en la base de datos
export const createHabitacionService = async ({titulo, descripcion1,descripcion2,descripcion3,imagen1,imagen2,imagen3,imagen4}) => {

const newHabitacion = new Habitaciones ({
    titulo, 
    descripcion1,
    descripcion2,
    descripcion3,
    imagen1,
    imagen2,
    imagen3,
    imagen4
})
 await newHabitacion.save();
 return newHabitacion;
}
//servicio para obtener habitaciones 
 export const getAllHabitacionesService = async ({titulo}) => {
 const query = {}
 if (titulo) query.titulo= titulo
const habitacionesBuscadas = await Habitaciones.find(query) 

return habitacionesBuscadas;

 }

// servicio para editar habitaciones
export const putHabitacionesService = async ({titulo, descripcion1,descripcion2,descripcion3,imagen1,imagen2,imagen3,imagen4, id}) =>{
   const query = {}
   if (titulo) query.titulo = titulo
   if (descripcion1) query.descripcion1 = descripcion1;
   if (descripcion2) query.descripcion2 = descripcion2;
   if (descripcion3) query.descripcion3 = descripcion3;
   if (imagen1) query.imagen1 = imagen1;
   if (imagen2) query.imagen2 = imagen2;
   if (imagen3) query.imagen3 = imagen3;
   if (imagen4) query.imagen4 = imagen4;
   const habitacionesEditadas = await Habitaciones.findByIdAndUpdate(id, query)
   return habitacionesEditadas

}

//servicio para eliminar habitaciones
export const deleteHabitacionesService = async ({id}) => {
    const habitacionEliminada = await Habitaciones.findById(id)
    if (!habitacionEliminada) throw new Error ('Habitacion no encontrada')
     await Habitaciones.findByIdAndDelete (id)
   
}



 