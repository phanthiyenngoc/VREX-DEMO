import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { css } from "@emotion/react";
import ContainerContent from "../common/ContainerContent";
import { Typography } from "@mui/material";

import SearchBanner from "./SearchBanner";

import { UserContext } from "../../contexts/user";
import { useContext } from "react";

const TopBanner = (props) => {
  const { homeTopBanners } = props;

  const user = useContext(UserContext);
  console.log("user TopBanner", user);

  return (
    <>
      <Box
        css={css`
          position: relative;
        `}
      >
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
        >
          {homeTopBanners.map((p, index) => (
            <SwiperSlide key={index}>
              <img
                src={getImageUrl(p.bannerUrl)}
                css={css`
                  width: 100%;
                `}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <ContainerContent>
          <section
            css={css`
              position: relative;
            `}
          >
            <Box
              css={css`
                width: 100%;
                position: absolute;
                left: 0;
                top: -150px;
                z-index: 99;
              `}
            >
              <Typography
                variant="h4"
                component={"h4"}
                css={css`
                  max-width: 408px;
                  margin-bottom: 40px;
                  color: white;
                `}
              >
                Nền tảng Bất Động Sản công nghệ 4.0
              </Typography>
            </Box>
          </section>
        </ContainerContent>
      </Box>

      <ContainerContent>
        <Box
          css={css`
            position: relative;
            top: -48px;
            z-index: 99;
          `}
        >
          <SearchBanner />
        </Box>
      </ContainerContent>
    </>
  );
};

TopBanner.propTypes = {
  homeTopBanners: PropTypes.array.isRequired,
};

TopBanner.defaultProps = {
  homeTopBanners: [],
};

export default TopBanner;
