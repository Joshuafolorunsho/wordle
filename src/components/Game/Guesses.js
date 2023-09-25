import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

export const Guesses = ({ answer, guesses }) => {
  const cols = range(5);

  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        const checkedGuessInfo = checkGuess(guess.label, answer);

        return (
          <p className="guess" key={guess.id}>
            {cols.map((_, index) => {
              const letterStatus =
                guess.label && checkedGuessInfo && checkedGuessInfo[index]
                  ? checkedGuessInfo[index].status
                  : "";
              return (
                <span className={"cell " + letterStatus} key={index}>
                  {guess.label ? guess.label[index] : undefined}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};
