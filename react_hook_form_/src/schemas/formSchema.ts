import { z } from 'zod';

export const formSchema = z.object {(
    name: z.string().min('3', "O mínimo de caracteres é 3."),
        lastname: z.string().min(3, "O número mínimo de caracteres é 3."),
            gender: z.string().refine((field) => field !== "select", {
                message: "Você precisa escolher um gênero"

            })
            email: z.string().min(1, "O campo é obrigatório")
    

)};