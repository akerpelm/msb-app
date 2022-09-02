import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/Carousel.scss';

const ControlledCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="">
      <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
        {data.map(({ name, title, desc }, i) => {
          return (
            <Carousel.Item key={i}>
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p>{desc}</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;
