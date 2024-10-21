import React, { useState } from 'react';
import Slide from './Slide';
import Indicators from './Indicators';

const Carousel = ({ imageUrls }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [manualChange, setChangeManual] = useState(false);

    return (
    <div className="carousel">
        {imageUrls.map((url, index) => (
            <Slide key={index} url={url} isActive={activeIndex === index}/>
        ))}
        <Indicators activeIndex={activeIndex} length={imageUrls.length}/>
        <button>Anterior</button>
        <button>Próximo</button>

    </div>
    );
};

export default Carousel;
