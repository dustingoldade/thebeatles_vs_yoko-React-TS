import "./App.css";
import { useState, useEffect } from "react";
import { beatlesImages, yokoImages } from "./img/imgIndex";
import { phrasesToGuess } from "./locales/songTitles";
import { returnRandomItemInArray, returnGridSize } from "./helpers/utils";

const useGamePlay = () => {
  const [blockAllLetters, setBlockAllLetters] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [winModalText, setWinModalText] = useState(true);
  const [activePhrase, setActivePhrase] = useState("");
  const [guessedLettersArray, setGuessedLettersArray] = useState<string[]>([]);
  const [lettersToDisplay, setLettersToDisplay] = useState<string[]>([]);
  const [scoreboardArray, setScoreBoardArray] = useState([0, 0, 0, 0]);
  const [scoreBoardGridSizes, setScoreBoardGridSizes] = useState({
    leftGrid: 0,
    rightGrid: 0,
    centerGrid: 0,
  });
  const [activeImgs, setActiveImgs] = useState({
    activeYokoImg: yokoImages[0],
    activeBeatlesImg: beatlesImages[0],
  });
  const [winLossScores, setWinLossScored] = useState({
    theBeatles: 0,
    yoko: 0,
  });

  /////////////////////////
  //// Game Play Logic ////
  /////////////////////////

  const newGame = () => {
    // line 35 is required as the useEffect that sets the scoreBoardGridSizes has the scoreBoardArray as a dependency. The result is that occasional timing of the functed updates the new photo is executed split second before the grid size is shown. This results in a flash of the new photo, which is visually annoying
    // setScoreBoardGridSizes({
    //   leftGrid: 0,
    //   rightGrid: 0,
    //   centerGrid: 12,
    // });

    setScoreBoardArray([0, 0, 0, 0]);
    setBlockAllLetters(false);

    //Reset the scoreboard and the letters that have been guessed
    setGuessedLettersArray([]);
    // Pick new photos -- used in ScoreBoard Component and pick a new random phrase
    newPhotos();
    setActivePhrase(returnRandomItemInArray(phrasesToGuess));
    setIsModal(false);
  };

  const checkGuessedLetter = (letter: string) => {
    setGuessedLettersArray((prevState) => [letter, ...prevState]);
  };

  // Check if the game is won or loss:
  useEffect(() => {
    if (guessedLettersArray.length < 1) return;

    activePhrase.includes(guessedLettersArray[0])
      ? correctGuess()
      : incorrectGuess();

    // On Win
    if (checkIfWin(activePhrase, guessedLettersArray)) {
      runWinFunctions();
    }
    // On Loss
    if (checkIfLoss()) {
      runLossFunctions();
    }
  }, [guessedLettersArray]);

  const checkIfWin = (activePhrase: string, guessedLetters: string[]) => {
    for (let i = 0; i <= activePhrase.length - 1; i++) {
      const activeLetter = activePhrase[i];
      if (activeLetter === " ") {
        continue;
      } //Needed to skip over spaces in the active phrase (occurs when phrases are more than one word)
      if (!guessedLetters.includes(activeLetter)) {
        return false;
      }
    }
    return true;
  };

  const checkIfLoss = () => {
    if (scoreboardArray[0] === -1) return true;
    return false;
  };

  const correctGuess = () => {
    for (let i in scoreboardArray) {
      if (scoreboardArray[i] !== 1) {
        scoreboardArray[i] = 1;
        break;
      }
    }
  };

  const incorrectGuess = () => {
    const scoreboardArrayLength = scoreboardArray.length - 1;
    for (let i = 0; i <= scoreboardArrayLength; i++) {
      const reverseIndex = scoreboardArrayLength - i;
      if (scoreboardArray[reverseIndex] !== -1) {
        scoreboardArray[reverseIndex] = -1;
        return;
      }
    }
  };

  const runWinFunctions = () => {
    setWinModalText(true);
    setIsModal(true);
    setWinLossScored((prevState) => {
      return { ...prevState, theBeatles: prevState.theBeatles++ };
    });
  };

  const runLossFunctions = () => {
    setWinModalText(false);
    setIsModal(true);
    setWinLossScored((prevState) => {
      return { ...prevState, yoko: prevState.yoko++ };
    });
  };

  /////////////////////////
  ///// Display Logic /////
  /////////////////////////

  const newPhotos = () => {
    setActiveImgs({
      activeYokoImg: returnRandomItemInArray(yokoImages),
      activeBeatlesImg: returnRandomItemInArray(beatlesImages),
    });
  };

  useEffect(() => {
    const tempArray = [];
    for (const letter of activePhrase) {
      if (guessedLettersArray.includes(letter)) {
        tempArray.push(letter);
        continue;
      }
      if (letter === " ") {
        tempArray.push(" ");
      } else {
        tempArray.push("_");
      }
    }
    setLettersToDisplay(tempArray);
  }, [guessedLettersArray, activePhrase]);

  //Sets the width of the three different Grid items that occupy the scoreboard and hold either a photo of the Beatles, blank, or Yoko Ono
  useEffect(() => {
    let leftGrid = returnGridSize(scoreboardArray, 1);
    let rightGrid = returnGridSize(scoreboardArray, -1);
    let centerGrid = 12 - leftGrid - rightGrid;
    setScoreBoardGridSizes({
      leftGrid: leftGrid,
      rightGrid: rightGrid,
      centerGrid: centerGrid,
    });
  }, [guessedLettersArray, scoreboardArray]);

  return {
    blockAllLetters,
    isModal,
    winModalText,
    activePhrase,
    guessedLettersArray,
    lettersToDisplay,
    scoreboardArray,
    scoreBoardGridSizes,
    activeImgs,
    winLossScores,
    newGame,
    checkGuessedLetter,
  };
};

export default useGamePlay;
