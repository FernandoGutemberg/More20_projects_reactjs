import React from 'react';
import "./ImcCalc.css";
import Button from './Button';

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
                    <Button id="calc-btn" text="Calcular" />
                    <Button id="clear-btn" text="Limpar"></Button>

                </div>

            </form>

        </div>
    );
};

export default ImcCalc;
