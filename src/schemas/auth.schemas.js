import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El usuario es requerido",
  }),
  email: z
    .string({
      required_error: "el Email es requerido",
    })
    .email({ message: "email invalido" }),
  password: z
    .string({
      required_error: "Se requiere contraseña",
    })
    .min(6, { message: "la contraseña debe tener al menos 6 digitos" }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "el email es requerido",
    })
    .email({
      message: "email inválido",
    }),
  password: z
    .string({
      required_error: "se requiere contraseña",
    })
    .min(6, { message: "la contraseña debe tener al menos 6 digitos" }),
});
