// import React from "react";
// import {DUMMY_RESUME_DATA,
//     resumeTemplates,
//     themeColorPalette
// } from '../../utils/data';
// import {LuCircleCheckBig} from 'react-icons/lu';
// const ThemeSelector=({
//     selectedTheme,
//     setSelectedTheme,
//     resumeData,
//     onClose
// })=>{
//     return(
//         <div>ThemeSelector</div>
//     )
// }
// export default ThemeSelector;

import React, { useState } from "react";
import {
  resumeTemplates,
  themeColorPalette,
} from "../../utils/data";
import { LuCircleCheckBig } from "react-icons/lu";

const ThemeSelector = ({ selectedTheme, setSelectedTheme, onClose }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(
    selectedTheme?.theme || ""
  );
  const [selectedPalette, setSelectedPalette] = useState(
    selectedTheme?.colorPalette || ""
  );

  const handleSave = () => {
    setSelectedTheme({
      theme: selectedTemplate,
      colorPalette: selectedPalette,
    });
    onClose();
  };

  return (
    <div className="p-4 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Select Template</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {resumeTemplates.map((template) => (
            <div
              key={template.id}
              className={`relative cursor-pointer border rounded-lg overflow-hidden ${
                selectedTemplate === template.id
                  ? "border-purple-600 ring-2 ring-purple-400"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <img
                src={template.previewImg}
                alt={template.label}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h4 className="text-sm font-medium">{template.label}</h4>
                <p className="text-xs text-gray-500">
                  {template.description}
                </p>
              </div>
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 text-green-600">
                  <LuCircleCheckBig size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Select Color Palette</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(themeColorPalette).map(([key, palette]) => (
            <div
              key={key}
              className={`cursor-pointer flex items-center gap-1 p-1 rounded-lg border ${
                selectedPalette === key
                  ? "border-purple-600 ring-2 ring-purple-400"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedPalette(key)}
            >
              {palette.map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="btn-small-light" onClick={onClose}>
          Cancel
        </button>
        <button
          className="btn-small"
          onClick={handleSave}
          disabled={!selectedTemplate || !selectedPalette}
        >
          Apply Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
