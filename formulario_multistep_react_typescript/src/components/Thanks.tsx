import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

type ThanksProps = {
  data: {
    name: string,
    review: string,
    comment: string

  }
}

import './Thanks.css';
import { ReactElement } from 'react';

type emogiObject = {
  unsatisfied: ReactElement,
  neutral: ReactElement,
  satisfied: ReactElement,
  very_satisfied: ReactElement,

}

const emogiData: ReactElement = {
  unsatisfied: < BsFillEmojiFrownFill />,
  neutral: < BsFillEmojiNeutralFill />,
  satisfied: < BsFillEmojiSmileFill />,
  very_satisfied: < BsFillEmojiHeartEyesFill />,

};


const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>
        A sua opnicão é muito importante, em breva você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir a sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-date">
        <span>Satisfação com o produto:</span>
        {emogiData[data.review as keyof typeof emogiData]}
      </p>
      <p className="review-data">  
        <span>Comentário:</span> {data.comment}

      </p>


    </div>
  )
}

export default Thanks
