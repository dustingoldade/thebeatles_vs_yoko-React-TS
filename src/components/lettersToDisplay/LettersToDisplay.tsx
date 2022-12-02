import { Box, Typography } from "@mui/material";
import "./LettersToDisplay.css";
import { LettersToDisplayProps } from "../../locales/ts.models";
import jsonMuiStylesENUM from "../../locales/muiStylesENUM";
const {
  DISPLAY_FLEX,
  JUSTIFY_CONTENT_CENTER,
  ALIGN_ITEMS_CENTER,
  TEXT_VARIANT_H4,
  TEXT_ALIGN_CENTER,
  COLOR_PRIMARY,
} = jsonMuiStylesENUM;

const LettersToDisplay: React.FC<LettersToDisplayProps> = ({
  lettersToDisplay,
}) => {
  return (
    <Box
      display={DISPLAY_FLEX}
      justifyContent={JUSTIFY_CONTENT_CENTER}
      alignItems={ALIGN_ITEMS_CENTER}
      className="LettersToDisplay__height"
    >
      {lettersToDisplay.map((letter, i) => (
        <Box minWidth="1.5rem" sx={{ px: "3px" }} key={"LetterToDisplay" + i}>
          <Typography
            variant={TEXT_VARIANT_H4}
            textAlign={TEXT_ALIGN_CENTER}
            sx={{ color: COLOR_PRIMARY }}
          >
            {letter}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LettersToDisplay;
