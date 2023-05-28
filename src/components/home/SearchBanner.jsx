import arrow_down from "../../assets/Image/TopBanner/arrow_down.svg";
import search from "../../assets/Image/TopBanner/search.svg";
import { css } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const listButtons = ["Mua bán", "Cho thuê", "Sang nhượng", "Dự án"];

const SearchBanner = () => {
  const [activeBtn, setActiveBtn] = useState("Mua bán");
  const handleActiveBtn = (btnName) => {
    setActiveBtn(btnName);
  };
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // navigate(`/tin-tuc/tim-kiem?filterKeyword=${search}`);
    navigate(`/tim-kiem-tin-dang?filterKeyword=${search}`);
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <section>
      <Box
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f6f6f6;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          width: 100%;
          max-width: 480px;
          overflow: hidden;
        `}
      >
        {listButtons.map((p, index) => (
          <Button
            key={index}
            onClick={() => handleActiveBtn(p)}
            css={css`
              padding: 14px 24px;
              border-radius: 0;
              width: auto;
              flex-grow: 1;

              ${activeBtn != p
                ? `
                color:#AFAFAF;
                background:#f6f6f6;
                `
                : ` 
                 background:#ffffff;
                `}
            `}
          >
            {p}
          </Button>
        ))}
      </Box>
      <section
        css={css`
          background: #ffffff;
          /* Below / Primary */

          box-shadow: 0px 14px 20px rgba(0, 0, 0, 0.04);
          border-radius: 0px 8px 8px 8px;
          padding: 16px;
        `}
      >
        <div
          css={css`
            display: inline-flex;
            align-items: center;
            padding-left: 16px;
            text-align: center;
            margin-top: 16px;
            width: 100%;
            height: 48px;
            background: #f6f6f6;
            border-radius: 4px;
          `}
        >
          <Typography
            variant="Body 2"
            component="span"
            css={css`
              color: #1f1f1f;
              &::after {
                display: inline-block;
                content: "";
                width: 1px;
                height: 24px;
                background: #e2e2e2;
                position: relative;
                top: 3px;
                left: 48px;
              }
            `}
          >
            Loại BĐS
          </Typography>
          <img
            css={css`
              padding: 0 16px;
            `}
            src={arrow_down}
            alt=""
          />
          <Typography
            variant="Body 2"
            component="input"
            css={css`
              flex: 1;
              color: #a8a8a8;
              margin-left: 16px;
              height: 24px;
              border: none;
              background: #f6f6f6;
              outline: none;
              &::placeholder {
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                color: #a8a8a8;
              }
            `}
            type="text"
            placeholder="Nhập từ khóa bạn cần tìm"
            vualue={search}
            onChange={(e) => setSearch(e.tag.value)}
            onKeyDown={(event) => keyDown(event)}
          ></Typography>
          <div
            onClick={() => handleSearch()}
            css={css`
              display: inline-flex;
              justify-content: center;
              align-items: center;
              width: 48px;
              height: 48px;
              background: #f37506;
              border-radius: 0px 4px 4px 0px;
              cursor: pointer;
              border: none;
            `}
          >
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => handleSearch()}
            >
              <SearchIcon
                css={css`
                  color: white;
                `}
              />
            </IconButton>
          </div>
        </div>
        <div
          css={css`
            display: inline-flex;
            align-items: center;

            width: 100%;
            margin: 16px 0;
          `}
        >
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-textbox" css={css``}>
              Tìm kiếm nổi bật
            </InputLabel>
            {/* <BootstrapInput id="demo-customized-textbox" /> */}
          </FormControl>
          {/* <Box sx={{ width: "100%", bgcolor: "background.paper" }}>

        </Box> */}
        </div>
      </section>
    </section>
  );
};

export default SearchBanner;
