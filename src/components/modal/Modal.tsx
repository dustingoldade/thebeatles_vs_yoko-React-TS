import WinsAndLosses from "./WinsAndLosses";
import { ModalProps } from "../../locales/ts.models";
import "./Modal.css";
import { Box, Typography, Button } from "@mui/material";
import jsonText from "../../locales/en.json";
import jsonMuiStylesENUM from "../../locales/muiStylesENUM";
const { Winner_Modal_Phrase, Loser_Modal_Phrase, Play_Again_Button } = jsonText;
const { TEXT_VARIANT_H5, TEXT_VARIANT_H6, COLOR_PRIMARY } = jsonMuiStylesENUM;

const Modal: React.FC<ModalProps> = ({
  activeImgs,
  activePhrase,
  winModalText,
  winLossScores,
  newGame,
}) => {
  let pic = activeImgs.activeBeatlesImg;
  let phrase = Winner_Modal_Phrase;

  if (!winModalText) {
    pic = activeImgs.activeYokoImg;
    phrase = Loser_Modal_Phrase;
  }

  const ModalContent = (
    <>
      <img src={pic} className="Modal__img" alt="" />
      <Box sx={{ py: "1rem" }}>
        <Typography variant={TEXT_VARIANT_H5}>{phrase}</Typography>
        <Typography variant={TEXT_VARIANT_H6}>"{activePhrase}"</Typography>
      </Box>
    </>
  );

  return (
    <Box className="Modal__overlay">
      <Box className="Modal__card">
        {ModalContent}
        <WinsAndLosses winLossScores={winLossScores} />
        <Button
          sx={{
            "&:hover": {
              opacity: 0.5,
              bgcolor: COLOR_PRIMARY,
            },
            mt: "1rem",
            bgcolor: COLOR_PRIMARY,
          }}
          variant="contained"
          onClick={newGame}
        >
          {Play_Again_Button}
        </Button>
      </Box>
    </Box>
  );
};

export default Modal;
