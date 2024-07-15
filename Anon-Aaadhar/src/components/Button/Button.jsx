import React from 'react';
import './Button.css';

function Button({ text, colour, onClick }) {
  return (
    <button className={`btn ${colour}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
