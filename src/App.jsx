import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import chroma from "chroma-js";
import "./styles.css";
const predefinedColors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];
export default function App() {
  const [listColor, setListColor] = useState([]);
  const [currentColor, setCurrentColor] = useState("#f44336");
  const [sharedPaletteId, setSharedPaletteId] = useState(null);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(1);
  const [selectedColorInfo, setSelectedColorInfo] = useState(null);
  const downloadRef = useRef(null);
  const handleColorClick = (color) => {
    setCurrentColor(color);
    setSelectedColorInfo({
      hex: color,
      rgb: chroma(color).rgb(),
      hsl: chroma(color).hsl(),
    });
  };
  const handleAddColor = () => {
    setListColor([...listColor, currentColor]);
  };
  const handleColorDelete = (color) => {
    setListColor(listColor.filter((c) => c !== color));
  };
  const generateAnalogousColors = () => {
    const analogousColors = chroma
      .scale([currentColor, "white"])
      .mode("lab")
      .colors(5);
    setListColor(analogousColors);
  };
  const handleHueChange = (hue) => {
    setHue(hue);
    setCurrentColor(chroma.hsl(hue, saturation, 0.5).hex());
  };
  const handleSaturationChange = (saturation) => {
    setSaturation(saturation);
    setCurrentColor(chroma.hsl(hue, saturation, 0.5).hex());
  };
  const savePalette = () => {
    const paletteText = listColor.join("\n");
    const blob = new Blob([paletteText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    downloadRef.current.href = url;
    downloadRef.current.download = "color_palette.txt";
    downloadRef.current.click();
    URL.revokeObjectURL(url);
  };
  const sharePalette = () => {
    const paletteId = listColor.join("-");
    setSharedPaletteId(paletteId);
    const shareableLink = `${window.location.origin}/palette/${paletteId}`;
    navigator.clipboard
      .writeText(shareableLink)
      .then(() => {
        alert("Palette link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };
  return (
    <div className="App">
      <h1>ColorME</h1>
      <p>
        Create your own color palette. Select colors from the list or the color
        picker. Click on boxes to fill them with colors.
      </p>
      <div className="section-divider">
        <h2>Your Color Palette</h2>
        <div id="wrapper">
          {listColor.map((color, index) => (
            <div key={index} className="item-color-wrapper">
              <div
                className="item-color"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
              <button onClick={() => handleColorDelete(color)}>Delete</button>
            </div>
          ))}
          <div className="item-color-wrapper">
            <div className="item-color" onClick={handleAddColor}>
              +
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={savePalette}>Save Palette</button>
          <button onClick={sharePalette}>Share Palette</button>
          {sharedPaletteId && (
            <p>
              Shareable Link: {window.location.origin}/palette/{sharedPaletteId}
            </p>
          )}
        </div>
      </div>
      <div className="section-divider">
        <h2>Color Picker</h2>
        <div className="color-picker-wrapper">
          <SketchPicker
            color={currentColor}
            onChange={(color) => setCurrentColor(color.hex)}
            onSwatchHover={(color) => {
              handleHueChange(color.hsl.h);
              handleSaturationChange(color.hsl.s);
            }}
          />
          <button onClick={generateAnalogousColors}>
            Generate Analogous Colors
          </button>
        </div>
      </div>
      <div className="section-divider">
        <h2>Predefined Colors</h2>
        <div className="predefined-colors">
          {predefinedColors.map((color, index) => (
            <div
              key={index}
              className="predefined-color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
      {selectedColorInfo && (
        <div className="selected-color-info">
          <h3>Selected Color Information</h3>
          <p>Hex: {selectedColorInfo.hex}</p>
          <p>RGB: {selectedColorInfo.rgb}</p>
          <p>HSL: {selectedColorInfo.hsl}</p>
        </div>
      )}
      <a ref={downloadRef} style={{ display: "none" }} />
    </div>
  );
}
