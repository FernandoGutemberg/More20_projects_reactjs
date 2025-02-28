import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const [errors, setErros] = useState<User | null>(null);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();


        const data: User = {
            name,
            email,
            agree,
        };

        const validateErros = validate(data);

        console.log(data, validateErros);

        if (Object.keys(validateErros).length > 0) {
            alert("Tem erros!");
            return;

        }


        alert("Obrigado por se inscrever");
    };



    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Nome</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="rounded-ld py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

            </div>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">E-mail</label>
                <input
                    type="email"
                    placeholder="Insira seu melhor e-mail"
                    className="rounded-ld py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">
                    Leia os termos
                </a>
                <div className="flex gap-2 items-center">
                    <input type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)} />

                    <label className="text-sm" htmlFor="agree">Concordo com os termos</label>

                </div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cadastrar
            </button>



        </form>
    );
}

export default Form;
