import React from 'react';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

import "./Thanks.css";

const emojiData = {
  undefined: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}



const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco....</h2>
      <p>
        A sua opnicão é muito importante, em breva você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir a sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avalização {data.name}:</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
        {data.comment}
      </p>




    </div>
  );
};

export default Thanks;
