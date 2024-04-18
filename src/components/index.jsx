import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#fff");

  const hexColorGenerator = () => {
    let hexCode = "";
    const hexChar = "A1B2C3E4F5";

    for (let i = 0; i < 6; i++) {
      hexCode += hexChar[Math.floor(Math.random() * hexChar.length)];
    }

    return "#" + hexCode;
  };

  const rgbColorGenerator = () => {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);

    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  };

  const handleRandomColor = () => {
    const colorTypeArr = ["hex", "rgb"];
    let typeChoiceNumber = Math.floor(Math.random() * 2);
    let typeChoice = colorTypeArr[typeChoiceNumber];
    setColorType(typeChoice);
    if (colorType === "hex") {
      setColor(hexColorGenerator());
    } else {
      setColor(rgbColorGenerator());
    }
  };

  const colorToDisplay = () => {
    return color;
  };

  return (
    <div className="container">
      <div
        className="content"
        style={{
          background: color,
        }}
      >
        <div className="btn-div">
          <button onClick={() => setColor(hexColorGenerator())}>
            Generate HEX Color
          </button>
          <button onClick={() => setColor(rgbColorGenerator())}>
            Generate RGB Color
          </button>
          <button onClick={handleRandomColor}>Generate Random Color</button>
        </div>
        <div className="display-section">
          <h3>Color On Display</h3>
          <h4>{colorToDisplay()}</h4>
        </div>
      </div>
    </div>
  );
}
