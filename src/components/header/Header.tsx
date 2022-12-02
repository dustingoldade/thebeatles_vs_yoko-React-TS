import { Box, Typography } from "@mui/material";
import "./Header.css";
import jsonText from "../../locales/en.json";
import muiStylesENUM from "../../locales/muiStylesENUM";
const {
  DISPLAY_FLEX,
  JUSTIFY_CONTENT_CENTER,
  ALIGN_ITEMS_CENTER,
  TEXT_VARIANT_H4,
  TEXT_ALIGN_CENTER,
  COLOR_PRIMARY,
  FONT_FAMILY,
} = muiStylesENUM;
const { Game_Title } = jsonText;

const Header = () => {
  return (
    <Box
      display={DISPLAY_FLEX}
      justifyContent={JUSTIFY_CONTENT_CENTER}
      alignItems={ALIGN_ITEMS_CENTER}
    >
      <Typography
        variant={TEXT_VARIANT_H4}
        textAlign={TEXT_ALIGN_CENTER}
        sx={{ my: 1, color: COLOR_PRIMARY, fontFamily: FONT_FAMILY }}
      >
        {Game_Title}
      </Typography>
    </Box>
  );
};

export default Header;
