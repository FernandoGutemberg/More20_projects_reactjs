
const Form = () => {
    return (
        <form>
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" />

            </div>
            <div>
                <label>E-mail</label>
                <input type="email" placeholder="Insira seu melhor e-mail" />

            </div>
            <div>
                <a href="#">Leia os termos</a>
                <div>
                    <input type="checkbox" />
                    <label>Concordo com os termos</label>



                </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cadastrar
            </button>



        </form>
    );
}

export default Form;
