export type NewGameBtnProps = {
  newGame: () => void;
  buttonTitle: string;
};

export type LettersToDisplayProps = {
  lettersToDisplay: string[];
};

export type ScoreboardProps = {
  activeImgs: {
    activeYokoImg: string;
    activeBeatlesImg: string;
  };
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
  activeImgs: {
    activeYokoImg: string;
    activeBeatlesImg: string;
  };
  activePhrase: string;
  winModalText: boolean;
  winLossScores: {
    theBeatles: number;
    yoko: number;
  };
  newGame: () => void;
};
