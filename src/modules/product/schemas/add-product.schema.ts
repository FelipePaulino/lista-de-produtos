import { z } from "zod";

export const addProductSchema = z.object({
  title: z
    .string({ required_error: "Título é obrigatório" })
    .min(1, { message: "Título é obrigatório" }),
  price: z.coerce.number({ required_error: "Preço é obrigatório" }).min(0),
  category: z
    .string({ required_error: "Categoria é obrigatório" })
    .min(1, { message: "Categoria é obrigatório" }),
  description: z.string(),
  thumbnail: z
    .string({ required_error: "Imagem é obrigatório" })
    .min(1, { message: "Imagem é obrigatório" })
    .url({ message: "URL inválida" }),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;
