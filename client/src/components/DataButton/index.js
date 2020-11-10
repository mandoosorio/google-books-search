import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function DataButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick}>
      
    </button>
  );
}

export default DataButton;