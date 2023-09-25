import React from "react";

export const Result = ({ isWinner, answer, numOfGuesses }) => {
  const className = isWinner ? "happy" : "sad";
  return (
    <div class={className + " banner"}>
      {isWinner ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
};
