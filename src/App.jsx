import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css"; 

const App = () => {
  const [title, setTitle] = useState("Welcome, this is useState Homework.");
  const [inputText, setInputText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const changeTitle = (value) => {
    setTitle(value);
  };

  const changeText = (newText) => {
    setInputText(newText);
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

    
    document.body.classList.remove(
      "gradient-sea-blue",
      "gradient-purple-love",
      "gradient-mango"
    );

   
    if (newColor === "sea-blue") {
      document.body.classList.add("gradient-sea-blue");
    } else if (newColor === "purple-love") {
      document.body.classList.add("gradient-purple-love");
    } else if (newColor === "mango") {
      document.body.classList.add("gradient-mango");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{title}</h1>
      <div className="mb-3">
        {title === "Welcome, this is useState Homework." && (
          <input
          type="text"
          className="form-control"
          placeholder="Enter title..."
          value={inputText}
          onChange={(event) => changeText(event.target.value)}
        />
        )}
      </div>

      {title === "Welcome, this is useState Homework." && (
        <button
          className="btn btn-primary w-100"
          onClick={() => changeTitle(inputText)}
        >
          Change title
        </button>
      )}

      {title !== "Welcome, this is useState Homework." && (
        <div className="mt-3">
          <select
            className="form-select"
            onChange={handleColorChange}
            value={selectedColor}
          >
            <option value="">Select Color</option>
            <option value="sea-blue">Sea Blue</option>
            <option value="purple-love">Purple Love</option>
            <option value="mango">Mango</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default App;
