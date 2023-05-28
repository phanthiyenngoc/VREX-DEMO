import PropTypes from "prop-types";
import ListingBox from "../common/ListingBox";
import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
import "swiper/css";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Icon, Typography } from "@mui/material";
import icon from "../../assets/Image/TopProject/icon.svg";

const HotListing = (props) => {
  const { listListing } = props;
  console.log(listListing);
  return (
    <div
      css={css`
        margin-top: 60px;
      `}
    >
      <ContainerContent>
        <>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 24px;
            `}
          >
            <div
              css={css`
                display: flex;
                gap: 12px;
                position: relative;
              `}
            >
              <img src={icon} alt="" />
              <Typography css={css``} variant="h5" component={"h5"}>
                Các sản phẩm mua bán nổi bật
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
                top: 63px;
                left: -21px;
                display: inline-flex;
                border: none;
                background: #ffffff;
                color: rgba(117, 117, 117, 1);

                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                z-index: 99;
                &:hover {
                  background: #ffffff;
                }
              `}
            >
              <KeyboardArrowLeftOutlinedIcon />
            </IconButton>
            <IconButton
              color="secondary"
              className="swiper-button-next"
              css={css`
                position: absolute;
                top: 63px;
                right: -8px;

                display: inline-flex;
                border: none;
                background: #ffffff;
                color: rgba(117, 117, 117, 1);
                /* Below / Low */

                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                z-index: 99;

                &:hover {
                  background: #ffffff;
                }
              `}
            >
              <KeyboardArrowRightOutlinedIcon />
            </IconButton>
          </div>
        </>
      </ContainerContent>
    </div>
  );
};

HotListing.propTypes = {
  listListing: PropTypes.array.isRequired,
};

export default HotListing;
