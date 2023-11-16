import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
export function createAccesToken(payload) {
  return new Promise((resolve, reject) => {
    //tenemos que pasar 3 claves , el payload, la clave privada , y el tiempo de expiracion
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
