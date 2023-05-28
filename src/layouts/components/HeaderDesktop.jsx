import Container from "../../components/common/Container";
import CommonButton from "../../components/common/CommonButton";
import logo from "../../assets/Image/Header/logo.png";
import arrow_down from "../../assets/Image/Header/arrow-down.png";
import { IconButton, Typography, useTheme } from "@mui/material";
import icon from "../../assets/Image/Header/Group 13256.png";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Login from "../../pages/userLogin/Login";
import CloseIcon from "@mui/icons-material/Close";

function HeaderDesktop() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  return (
    <header>
      <Container>
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          `}
        >
          {/* <div onClick={() => goToHome()}>
            <img src={logo} alt="logo" />
          </div> */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul
            css={css`
              display: flex;
            `}
          >
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                variant="subtitle2"
                href="#"
                component="a"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Mua bán
              </Typography>
              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                href="!#"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Cho thuê
              </Typography>

              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                href="!#"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Sang nhượng
              </Typography>

              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                href="!#"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Dự án
              </Typography>

              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Link
                css={css`
                  text-decoration: none;
                `}
                to="/tin-tuc"
              >
                <Typography
                  vairiant="subtitle2"
                  component="a"
                  css={css`
                    text-decoration: none;
                    color: #1f1f1f;
                    padding-right: 16px;
                    &:hover {
                      text-shadow: 1px 0 0 currentColor;
                    }
                  `}
                >
                  Thông tin
                </Typography>

                <img src={arrow_down} alt="" />
              </Link>
            </li>
            <li
              css={css`
                list-style: none;
                padding: 0 16px;
                &::before {
                  display: inline-block;
                  content: "";
                  width: 1px;
                  height: 16px;
                  background: #c4c4c4;
                  position: relative;
                  top: -10px;
                  left: -12px;
                }
              `}
            >
              <img src={icon} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 16px;
                  cursor: pointer;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                  }
                `}
              >
                Ký gửi
              </Typography>
            </li>

            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="button"
                onClick={handleClickOpen}
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 16px;
                  cursor: pointer;
                  border: none;
                  background: none;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                  }
                `}
              >
                Đăng nhập
              </Typography>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  <div
                    css={css`
                      display: flex;
                      justify-content: space-between;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        flex: 1;
                        justify-content: center;
                      `}
                    >
                      <img src={logo} alt="" />
                    </div>
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Login />
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </li>
            <li
              css={css`
                list-style-type: none;
                display: flex;
                align-items: center;
              `}
            >
              <CommonButton
                startIcon={<BorderColorOutlinedIcon />}
                variant={"outlined"}
                css={css`
                  text-align: center;
                  color: ${theme.palette.primary.main};
                  padding: 9px 12px;
                  display: flex;
                  align-items: center;
                  font-size: 16px;
                  text-transform: unset;
                  line-height: 16px;
                  border-radius: 8px;
                `}
              >
                Đăng tin
              </CommonButton>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default HeaderDesktop;
