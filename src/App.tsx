import * as React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Keyboard from "./components/keyboard/Keyboard";
import LettersToDisplay from "./components/lettersToDisplay/LettersToDisplay";
import Modal from "./components/modal/Modal";
import NewGameBtn from "./components/newGameBtn/NewGameBtn";
import Scoreboard from "./components/scoreboard/Scoreboard";
import jsonText from "./locales/en.json";
import useGamePlay from "./useGamePlay";
const { New_Game_Button_Label } = jsonText;
const App = () => {
  const {
    blockAllLetters,
    isModal,
    winModalText,
    activePhrase,
    guessedLettersArray,
    lettersToDisplay,
    scoreBoardGridSizes,
    activeImgs,
    winLossScores,
    newGame,
    checkGuessedLetter,
  } = useGamePlay();

  return (
    <>
      {isModal && (
        <Modal
          winModalText={winModalText}
          activeImgs={activeImgs}
          activePhrase={activePhrase}
          winLossScores={winLossScores}
          newGame={newGame}
        />
      )}
      <Header />
      <Scoreboard
        activeImgs={activeImgs}
        scoreBoardGridSizes={scoreBoardGridSizes}
      />
      <LettersToDisplay lettersToDisplay={lettersToDisplay} />
      <Keyboard
        guessedLettersArray={guessedLettersArray}
        onGuessedLetter={checkGuessedLetter}
        activePhrase={activePhrase}
        blockAllLetters={blockAllLetters}
      />
      <NewGameBtn newGame={newGame} buttonTitle={New_Game_Button_Label} />
    </>
  );
};

export default App;
