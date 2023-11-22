import Habitaciones from "../models/habitaciones.models.js";

//servicio para crear una nueva habitacion en la base de datos
export const createHabitacionService = async ({
  titulo,
  descripcion1,
  descripcion2,
  descripcion3,
  imagen1,
  tipo,
  precio,
}) => {
  const newHabitacion = new Habitaciones({
    titulo,
    descripcion1,
    descripcion2,
    descripcion3,
    imagen1,
    tipo,
    precio,
  });
  await newHabitacion.save();
  return newHabitacion;
};
//servicio para obtener habitaciones
export const getAllHabitacionesService = async ({
  tipo,
  idHabitacionBuscada,
}) => {
  let habitacionesBuscadas;

  if (idHabitacionBuscada) {
    habitacionesBuscadas = await Habitaciones.find({
      _id: idHabitacionBuscada,
    });
  }
  if (tipo) {
    habitacionesBuscadas = await Habitaciones.find({ tipo: tipo });
  }

  return habitacionesBuscadas;
};

// servicio para editar habitaciones
export const putHabitacionesService = async ({
  titulo,
  descripcion1,
  descripcion2,
  descripcion3,
  imagen1,
  id,
  tipo,
  precio,
}) => {
  const query = {};
  if (titulo) query.titulo = titulo;
  if (descripcion1) query.descripcion1 = descripcion1;
  if (descripcion2) query.descripcion2 = descripcion2;
  if (descripcion3) query.descripcion3 = descripcion3;
  if (imagen1) query.imagen1 = imagen1;
  if (tipo) query.tipo = tipo;
  if (precio) query.precio = precio;

  const habitacionesEditadas = await Habitaciones.findByIdAndUpdate(id, query);
  return habitacionesEditadas;
};

//servicio para eliminar habitaciones
export const deleteHabitacionesService = async ({ id }) => {
  const habitacionEliminada = await Habitaciones.findById(id);
  if (!habitacionEliminada) throw new Error("Habitacion no encontrada");
  return await Habitaciones.findByIdAndDelete(id);
};
