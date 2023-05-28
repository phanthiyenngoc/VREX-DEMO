import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { toVietNameseCurrencyFormat } from "../../utils/format";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import IconButton from "@mui/material/IconButton";

ListingBox.propTypes = {
  item: PropTypes.object,
};

function ListingBox(props) {
  const { item } = props;

  let AreaSquare = "";
  if (item.areaSquare) {
    AreaSquare = `${item.areaSquare}`;
  }

  let BedroomCount = "";
  if (item.bedroomCount) {
    BedroomCount = `${item.bedroomCount}`;
  }

  let ToiletCount = "";
  if (item.toiletCount) {
    ToiletCount = `${item.toiletCount}`;
  }

  let Direction = "";
  if (item.direction) {
    Direction = `${item.direction}`;
  }

  return (
    <Link
      css={css`
        text-decoration: none;
      `}
      to={`/listing/${item.id}`}
    >
      <div
        css={css`
          max-width: 280px;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 157px;
            object-fit: cover;
            border-radius: 8px;
          `}
          src={getImageUrl(item.avatarUrl, 280)}
          alt=""
        />
        <div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 14px;
              margin-bottom: 10px;
            `}
          >
            <Typography
              variant="Body2"
              component={"span"}
              css={css`
                font-family: "SFU Eurostile";
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;

                color: #f37506;
              `}
            >
              {toVietNameseCurrencyFormat(item.price)}
            </Typography>
            {item.price && item.areaSquare && (
              <Typography
                variant="Body2"
                component={"span"}
                css={css`
                  font-family: "SFU Eurostile";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 20px;
                  color: #f37506;
                `}
              >
                {toVietNameseCurrencyFormat(item.price / item.areaSquare)}/m
                <sup>2</sup>
              </Typography>
            )}
          </div>

          <Typography
            css={css`
              color: #757575;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
            `}
            variant="subtitle1"
            component={"p"}
          >
            {item.name}
          </Typography>
          <Typography
            css={css`
              margin: 8px 0;
              color: #757575;
            `}
            variant="body2"
            component={"p"}
          >
            {item.address}
          </Typography>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <IconButton>
                <AspectRatioOutlinedIcon />
              </IconButton>
              <Typography
                css={css`
                  color: #757575;
                `}
                variant="Body2"
                component={"p"}
              >
                {AreaSquare}
              </Typography>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <IconButton>
                <SingleBedOutlinedIcon />
              </IconButton>
              <Typography
                css={css`
                  color: #757575;
                `}
                variant="Body2"
                component={"p"}
              >
                {BedroomCount}
              </Typography>
            </div>

            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <IconButton>
                <WcOutlinedIcon />
              </IconButton>
              <Typography
                css={css`
                  color: #757575;
                `}
                variant="Body2"
                component={"p"}
              >
                {ToiletCount}
              </Typography>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <IconButton>
                <ExploreOutlinedIcon />
              </IconButton>
              <Typography
                css={css`
                  color: #757575;
                `}
                variant="Body2"
                component={"p"}
              >
                {Direction}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListingBox;
