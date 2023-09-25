import React from "react";

export const Input = ({guessInput, handleChange, handleSubmit}) => {

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        onChange={handleChange}
      />
    </form>
  );
};
