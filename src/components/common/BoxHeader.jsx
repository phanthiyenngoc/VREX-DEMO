import { useState } from "react";
import PropTypes from "prop-types";
import { css, useTheme } from "@emotion/react";
import List from "@mui/material/List";
import logo from "../../assets/Image/Header/logo.png";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Login from "../../pages/userLogin/Login";

BoxHeader.propTypes = {
  //   open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

function BoxHeader(props) {
  const { handleDrawerClose } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/tin-tuc/tim-kiem?filterKeyword=${search}`);
  };
  const { search, setSearch } = useState("");
  const keyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = useState(false);

  const handleClickOpen = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen3(false);
  };

  return (
    <div
      css={css`
        width: 100%;
        padding: 20px;
      `}
    >
      <div
        css={css`
          width: 100%;
          padding: 16px 16px 10px;

          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <IconButton onClick={handleDrawerClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>

      <Divider />

      <Paper
        css={css`
          margin: 20px 0;

          border: none;
          box-shadow: none;
          border: none;
          background: #f4f4f4;
        `}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          css={css`
            background: #f4f4f4;
            border-radius: none;
          `}
          onClick={() => handleSearch()}
          type="button"
          label="Search"
          sx={{ p: "10px" }}
        >
          <SearchIcon color="secondary" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          css={css`
            color: #333;
            background: #f4f4f4;
            border: none;
            outline: none;
          `}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          inputProps={{ label: "Search" }}
          onKeyDown={(event) => keyDown(event)}
          placeholder="Search"
        />
      </Paper>

      <List>
        <ListItemButton>
          <Link
            css={css`
              text-decoration: none;
            `}
            to="/"
          >
            <ListItemText primary="Trang chủ" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Mua bán" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Cho thuê" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Sang nhượng" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Dự án" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Thông tin" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Tin thị trường" />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Tin Vrex" />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Phận tích và báo cáo" />
            </ListItemButton>
            <Divider />
            <List>
              <ListItemButton onClick={handleClick1}>
                <ListItemText primary="Khóa học bất động sản" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="khóa học" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="kiến thức môi giới" />
                  </ListItemButton>
                  <Divider />
                </List>
              </Collapse>
            </List>
            <List>
              <ListItemButton onClick={handleClick2}>
                <ListItemText primary="Cẩm nan kiến thức" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Chủ bất động sản" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Góc pháp lý" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Phong thủy" />
                  </ListItemButton>
                  <Divider />
                </List>
              </Collapse>
            </List>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary="Liên hệ" />
        </ListItemButton>
      </List>
      <Stack
        css={css`
          margin-top: 16px;
        `}
        direction="row"
        spacing={2}
      >
        <Button
          variant="outlined"
          startIcon={<DriveFileRenameOutlineOutlinedIcon />}
          css={css`
            text-transform: none;
            width: 100%;
            cursor: pointer;
          `}
        >
          Ký gửi
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          startIcon={<PermIdentityOutlinedIcon />}
          css={css`
            text-transform: none;
            width: 100%;
            cursor: pointer;
            margin: 16px 0;
          `}
        >
          Đăng nhập
        </Button>
        <Dialog
          open={open3}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <DialogContent
            css={css`
              overflow-x: hidden;
            `}
          >
            <Login />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
      <Stack css={css``} direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<DriveFileRenameOutlineOutlinedIcon />}
          css={css`
            text-transform: none;
            width: 100%;
            cursor: pointer;
          `}
        >
          Đăng tin
        </Button>
      </Stack>
    </div>
  );
}

export default BoxHeader;
