import { Box, Typography } from "@mui/material";
import { WinsAndLossesProps } from "../../locales/ts.models";

const WinsAndLosses: React.FC<WinsAndLossesProps> = ({ winLossScores }) => {
  return (
    <Box>
      <Typography>The Beatles: {winLossScores.theBeatles}</Typography>
      <Typography>Yoko Ono: {winLossScores.yoko}</Typography>
    </Box>
  );
};

export default WinsAndLosses;
