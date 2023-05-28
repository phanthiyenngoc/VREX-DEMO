import PropTypes from "prop-types";
import { css } from "@emotion/react";
import ContainerContent from "../common/ContainerContent";
import icon from "../../assets/Image/TopProject/icon.svg";
import ProjectBox from "../common/ProjectBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Typography } from "@mui/material";

function TopProject(props) {
  const { projects } = props;

  return (
    <div>
      <ContainerContent>
        <section>
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
                Các dự án nổi bật
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
              position: relative;
              margin-right: -20px;
            `}
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {projects.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProjectBox itemData={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <IconButton
              color="secondary"
              className="swiper-button-prev"
              css={css`
                position: absolute;
                top: 110px;
                left: -21px;
                display: inline-flex;
                border: none;
                background: #ffffff;
                color: rgba(117, 117, 117, 1);
                /* Below / Low */
                transform: translateY(-50%);
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
                top: 110px;
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
                transform: translateY(-50%);
                &:hover {
                  background: #ffffff;
                }
              `}
            >
              <KeyboardArrowRightOutlinedIcon />
            </IconButton>
          </div>
        </section>
      </ContainerContent>
    </div>
  );
}

TopProject.propTypes = {
  projects: PropTypes.array.isRequired,
};

TopProject.defaultProps = {
  projects: [],
};

export default TopProject;
