import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { Input } from "./Input";
import { Guesses } from "./Guesses";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { Result } from "./Result";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.log({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(() => {
    const rows = range(NUM_OF_GUESSES_ALLOWED).map(() => ({
      id: crypto.randomUUID(),
      label: "",
    }));
    return rows;
  });
  const [guessInput, setGuessInput] = React.useState("");
  const [result, setResult] = React.useState("undecided");

  const isUndecided = result === "undecided";
  const isWinner = result === "winner";
  const numOfGuesses = guesses.reduce(
    (acc, guess) => acc + Boolean(guess.label),
    0
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const uppercaseValue = value.toUpperCase();
    setGuessInput(uppercaseValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const unusedSlotIndex = guesses.findIndex((guess) => guess.label === "");

    const nextGuesses = guesses.map((guess, index) => {
      if (index === unusedSlotIndex) {
        return {
          ...guess,
          label: guessInput,
        };
      }
      return guess;
    });

    if (guessInput === answer) setResult("winner");


    if (nextGuesses[NUM_OF_GUESSES_ALLOWED - 1].label && guessInput !== answer) {
      setResult("loser");
    }
    setGuesses(nextGuesses);
    setGuessInput("");
  };

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      {isUndecided ? (
        <Input
          guessInput={guessInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Result
          isWinner={isWinner}
          answer={answer}
          numOfGuesses={numOfGuesses}
        />
      )}
    </>
  );
}

export default Game;
