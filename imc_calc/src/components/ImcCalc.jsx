import React from 'react';
import "./ImcCalc.css";

const ImcCalc = () => {
    return (
        <div id='calc-container'>
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <label htmlFor="height">Altura:</label>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        placeholder="Exemplo 1,75" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="weight">Peso:</label>
                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        placeholder="Exemplo 70,5" />
                </div>

                <div className="action-control">
                     <button>Calcular</button>
                     <button>Limpar</button>

                </div>

            </form>

        </div>
    );
};

export default ImcCalc;
