import { IconButton, InputBase, Paper, css } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function SearchPanel() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // navigate(`/tin-tuc/tim-kiem?filterKeyword=${search}`);
    navigate(`/tin-tuc/tim-kiem?filterKeyword=${search}`);
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  return (
    <Paper
      css={css`
        width: 100%;
      `}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Nhập từ khóa bạn cần tìm"
        inputProps={{ "aria-label": "Nhập từ khóa bạn cần tìm" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(event) => keyDown(event)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => handleSearch()}
      >
        <SearchIcon color="secondary" />
      </IconButton>
    </Paper>
  );
}

export default SearchPanel;
