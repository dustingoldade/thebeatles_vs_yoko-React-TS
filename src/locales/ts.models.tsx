import { type } from "os";

export type NewGameBtnProps = {
  newGame: () => void;
  buttonTitle: string;
};

export type LettersToDisplayProps = {
  lettersToDisplay: string[];
};

type ActiveImgs = {
  activeYokoImg: string;
  activeBeatlesImg: string;
};

export type ScoreboardProps = {
  activeImgs: ActiveImgs;
  scoreBoardGridSizes: {
    leftGrid: number;
    rightGrid: number;
    centerGrid: number;
  };
};

export type KeyboardProps = {
  guessedLettersArray: string[];
  onGuessedLetter: (letter: string) => void;
  activePhrase: string;
  blockAllLetters: boolean;
};

export type KeyProps = {
  isGuessed: boolean;
  letter: string;
  onGuessedLetter: (letter: string) => void;
  activePhrase: string;
  blockAllLetters: boolean;
};

export type WinsAndLossesProps = {
  winLossScores: {
    theBeatles: number;
    yoko: number;
  };
};

export type ModalProps = {
  activeImgs: ActiveImgs;
  activePhrase: string;
  winModalText: boolean;
  winLossScores: {
    theBeatles: number;
    yoko: number;
  };
  newGame: () => void;
};
