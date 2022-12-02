import { Typography, Button } from "@mui/material";
import { KeyProps } from "../../../locales/ts.models";
import "./Key.css";
import jsonMuiStylesENUM from "../../../locales/muiStylesENUM";
const { TEXT_VARIANT_H5 } = jsonMuiStylesENUM;

const Key: React.FC<KeyProps> = ({
  isGuessed,
  blockAllLetters,
  letter,
  onGuessedLetter,
}) => {
  let additionalClasses = `Key ${isGuessed && "Key__disabled"} ${
    blockAllLetters && "Key__disabled"
  }`;

  return (
    <Button
      key={`key${letter}`}
      sx={{ border: 2, m: "2px" }}
      onClick={() => {
        onGuessedLetter(letter);
      }}
      className={additionalClasses}
    >
      <Typography variant={TEXT_VARIANT_H5}>{letter}</Typography>
    </Button>
  );
};

export default Key;
