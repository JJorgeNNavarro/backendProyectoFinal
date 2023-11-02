import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10); //primer valor de lo que quiero hashear y la cantidad e veces en el segundo valor
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save(); //cada await debe tener un async en la funcion que lo contiene, guarda el usuario con los datos actualizados
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie("token", token);

    // para guardar el usuario completo res.json(userSaved);
    //guardo solo algunos datos del usuario
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res
        .status(400)
        .json({ message: "Usuario o contraseña no encontrada" });
    //ver si coincide con los usuarios de la DB
    const isMatch = await bcrypt.compare(password, userFound.password); //primer valor de lo que quiero comparar con lo que traigo desde la DB
    //si no coincide la contraseña
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Usuario o contraseña no encontrada" });

    //crear token
    const token = await createAccesToken({ id: userFound._id });
    res.cookie("token", token);

    // para guardar el usuario completo res.json(userSaved);
    //guardo solo algunos datos del usuario
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//instalacion de BCRYPTJS para encriptar la contraseña
