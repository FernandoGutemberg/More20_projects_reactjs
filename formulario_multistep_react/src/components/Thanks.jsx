import React from 'react';
import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco....</h2>
      <p>
        A sua opnicão é muito importante, em breva você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir a sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avalização:</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
      </p>




    </div>
  );
};

export default Thanks;
