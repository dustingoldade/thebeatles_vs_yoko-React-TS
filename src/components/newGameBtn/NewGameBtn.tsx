import { Typography, Button, Grid, Box } from "@mui/material";
import "./NewGameBtn.css";
import { NewGameBtnProps } from "../../locales/ts.models";
import jsonMuiStylesENUM from "../../locales/muiStylesENUM";
const {
  DISPLAY_FLEX,
  JUSTIFY_CONTENT_CENTER,
  COLOR_INHERIT,
  TEXT_VARIANT_H5,
  COLOR_PRIMARY,
} = jsonMuiStylesENUM;

const NewGameBtn: React.FC<NewGameBtnProps> = ({ newGame, buttonTitle }) => {
  return (
    <Grid item xs={3}>
      <Box display={DISPLAY_FLEX} justifyContent={JUSTIFY_CONTENT_CENTER}>
        <Box className="NewGameBtn" sx={{ bgcolor: COLOR_PRIMARY }}>
          <Button onClick={newGame} color={COLOR_INHERIT} sx={{ px: "9rem" }}>
            <Typography variant={TEXT_VARIANT_H5}>{buttonTitle}</Typography>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default NewGameBtn;
