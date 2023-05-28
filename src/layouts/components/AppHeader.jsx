import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useTheme } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
const AppHeader = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(
    `(min-width:${theme.breakpoints.values.lg}px)`
  );

  if (isDesktop) return <HeaderDesktop />;

  return <HeaderMobile />;
};

export default AppHeader;
