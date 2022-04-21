import React from "react";
import { useState } from "react";

const Color = ({ hue, text, newHue, newText }) => {
  const [hues, setHues] = useState(hue);
  const [texts, setTexts] = useState(text);

  const clickHandler = () => {
    setHues(newHue)
    setTexts(newText)
  };
  return (
    <div>
      <section>
        <button onClick={clickHandler}>Change colors</button>

        <h2>Name: {hues}</h2>
        <p>{texts}</p>
      </section>
    </div>
  );
};

export default Color;
