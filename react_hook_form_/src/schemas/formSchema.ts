import {z} from 'zod';

export const formSchema = z.object {(
    name: z.string().noneempty('Campo obrigatório').min('3')

)}