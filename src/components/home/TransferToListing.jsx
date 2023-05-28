import PropTypes from "prop-types";
import ListingBox from "../common/ListingBox";
import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import IconButton from "@mui/material/IconButton";

import icon from "../../assets/Image/TopProject/icon.svg";
import "swiper/css";
import { Typography } from "@mui/material";
const TransferToListing = (props) => {
  const { listListing } = props;
  return (
    <div
      css={css`
        margin: 60px 0;
      `}
    >
      <ContainerContent>
        <>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <div
              css={css`
                display: flex;
                gap: 12px;
                position: relative;
                margin-bottom: 24px;
              `}
            >
              <img src={icon} alt="" />
              <Typography variant="h5" component={"h5"}>
                Các sản phẩm sang nhượng nổi bật
              </Typography>
            </div>
            <Typography variant="Body2" component={"span"}>
              <Typography
                css={css`
                  color: #757575;
                  text-decoration: none;
                `}
                variant="Body2"
                component={"a"}
                href="#"
              >
                Xem tất cả
              </Typography>
            </Typography>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 16px;
              position: relative;
            `}
          >
            <Swiper
              slidesPerView={4}
              autoplay={{
                delay: 2500,
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {listListing.map((item) => (
                <SwiperSlide key={item.id}>
                  <ListingBox item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <IconButton
              color="secondary"
              className="swiper-button-prev"
              css={css`
                position: absolute;
                top: 60px;
                left: -20px;
                z-index: 99;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
              `}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              color="secondary"
              className="swiper-button-next"
              css={css`
                position: absolute;
                top: 60px;
                right: -10px;
                z-index: 99;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
              `}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </>
      </ContainerContent>
    </div>
  );
};

TransferToListing.propTypes = {
  listListing: PropTypes.array.isRequired,
};

export default TransferToListing;
