import { css } from "@emotion/react";
import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import { Typography } from "@mui/material";
import onSale from "../../assets/Image/TopProject/1 (1).svg";
import comingSoon from "../../assets/Image/TopProject/2 (1).svg";
import sold from "../../assets/Image/TopProject/3 (1).svg";
import { toVietNameseCurrencyFormat } from "../../utils/format";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import address from "../../assets/Image/TopProject/icon-address.svg";
import building from "../../assets/Image/TopProject/Building.svg";
import business from "../../assets/Image/TopProject/Business.svg";

const projectStatus = {
  onSale: "Đang bán",
  comingSoon: "Sắp mở bán",
  sold: "Đã bán",
};

ProjectBox.propTypes = {
  itemData: PropTypes.object,
};

function ProjectBox(props) {
  const { itemData } = props;
  console.log("ItemData", itemData);

  let price = "";
  if (itemData.minUnitPrice) {
    price = `Giá từ ${toVietNameseCurrencyFormat(itemData.minUnitPrice)}`;
  }
  if (itemData.maxUnitPrice) {
    price = `Giá từ ${toVietNameseCurrencyFormat(
      itemData.minUnitPrice
    )} ~  ${toVietNameseCurrencyFormat(itemData.maxUnitPrice)}`;
  }
  return (
    <div
      css={css`
        /* max-width: 380px; */
        position: relative;
      `}
    >
      <div
        css={css`
          position: relative;
          overflow: hidden;
          max-height: 214px;
          border-radius: 8px;
        `}
      >
        <img
          css={css`
            width: 100%;
            border-radius: 8px;
            object-fit: cover;
          `}
          src={getImageUrl(itemData.avatarUrl, 380)}
          alt=""
        />
        <IconButton
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            color: white;
          `}
          color="secondary"
          aria-label="add an alarm"
        >
          <FavoriteBorderOutlinedIcon />
        </IconButton>

        <div
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            height: 36px;
          `}
        >
          {itemData.status == projectStatus.onSale ? (
            <img src={onSale} alt="onSale" />
          ) : itemData.status == projectStatus.comingSoon ? (
            <img src={comingSoon} alt="comingSoon" />
          ) : (
            <img src={sold} alt="sold" />
          )}
        </div>
      </div>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: start;
        `}
      >
        <Typography
          variant="Body1"
          component={"span"}
          css={css`
            color: #f37506;
            min-height: 31px;
            margin-top: 12px;
            margin-bottom: 8px;
          `}
        >
          {price && (
            <>
              {price}/m<sup>2</sup>
            </>
          )}
        </Typography>
        <Typography
          css={css`
            color: #1f1f1f;
            font-weight: 700;
            margin: 8px 0;
          `}
          variant="subtitle1"
          component={"h6"}
          color={"#1f1f1f"}
        >
          {itemData.name}
        </Typography>
        <div
          css={css`
            display: flex;
            align-items: start;

            color: #757575;
          `}
        >
          <img src={address} alt="" />
          <Typography
            css={css`
              margin-left: 12px;
              color: #757575;
            `}
            variant="body2"
            component={"p"}
            color={"#757575;"}
          >
            {itemData.address}
          </Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: start;
            color: #757575;

            color: #757575;
            margin: 8px 0;
          `}
        >
          <img src={building} alt="" />
          <Typography
            css={css`
              margin-left: 12px;
              color: #757575;
            `}
            variant="body2"
            component={"p"}
            color={"#757575;"}
          >
            Quy mô: {itemData.scale}
          </Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: start;

            color: #757575;
          `}
        >
          <img src={business} alt="" />
          <Typography
            css={css`
              margin-left: 12px;
              color: #757575;
            `}
            variant="body2"
            component={"p"}
            color={"#757575;"}
          >
            Chủ đầu tư: {itemData.investor}
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default ProjectBox;
