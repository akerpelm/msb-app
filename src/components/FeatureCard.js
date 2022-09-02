import { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';

const FeatureCard = ({ feature: { title, text } }) => {
  const imageRef = useRef();
  const [spans, setSpanState] = useState(0);

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans());
  }, []);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;

    const test = Math.ceil(height / 10);

    setSpanState({ test });
  };

  return (
    <div style={{ gridRowEnd: `span ${spans.test}` }}>
      <Card ref={imageRef}>
        <h3>{title}</h3>
        <p>{text}</p>
      </Card>
    </div>
  );
};
export default FeatureCard;
