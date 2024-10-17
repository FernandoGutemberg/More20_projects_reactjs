import React from 'react';
import TextStyleConfig from './TextStyleConfig';
import ImageUpload from './ImageUpload';

import { useState } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const GeneratePDF = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fontSize, setFontSize] = useState("12");
  const [fontColor, setfontColor] = useState("#000");
  const [isBold, setIsBold] = useState(false);


  const generatePdf = () => {
   const customStyle = {
    
   }

    const documentDefinition = {
      content: [
        { text: `Título: ${title}` },
        { text: `Descrição: ${description}` },


      ],
    };

    pdfMake.createPdf(documentDefinition).download();
  };

  return (
    <div className="container">
      <label className='label'>
        Título:
        <input
          type="text"
          className='input'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label className='label'>
        Descrição:
        <input
          type="text"
          className='input'
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
      </label>

      <TextStyleConfig
        fontSize={fontSize}
        setFontColor={fontColor}
        isBold={isBold}
        setIsBold={setIsBold} />

      <ImageUpload />
      <button className='button' onClick={generatePdf}>Gerar PDF</button>

    </div>
  );
};

export default GeneratePDF;
