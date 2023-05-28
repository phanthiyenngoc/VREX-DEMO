import { css } from "@emotion/react";
import logo from "../../assets/Image/mobile/logo.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";

import BoxHeader from "../../components/common/BoxHeader";

import IconButton from "@mui/material/IconButton";

function HeaderMobile() {
  const drawerWidth = 375;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      // width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <AppBar
          position="static"
          css={css`
            background: white;
          `}
        >
          <Toolbar
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 20px 16px 0;
            `}
          >
            <div
              css={css`
                width: 115.84px;
                height: 32px;
              `}
            >
              <img
                css={css`
                  object-fit: cover;
                  height: 32px;
                `}
                src={logo}
                alt=""
              />
            </div>

            <IconButton
              css={css`
                color: #333;
              `}
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div>
          <Drawer
            sx={{
              width: 375,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 375,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <BoxHeader handleDrawerClose={handleDrawerClose} />
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
