import PropTypes from "prop-types";
import { css } from "@emotion/react";
import logo from "../../assets/Image/Footer/logo.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import icon_BCT from "../../assets/Image/Footer/download 1.svg";
import phone from "../../assets/Image/Footer/phone.svg";
import email from "../../assets/Image/Footer/hotro.svg";
import email01 from "../../assets/Image/Footer/hoptac.svg";
import { Typography, useTheme } from "@mui/material";
import bgFooter from "../../assets/Image/Footer/bg-footer.png";

AppFooter.propTypes = {
  img_logo: PropTypes.node,
  img_twitter: PropTypes.node,
  img_linked: PropTypes.node,
  img_face: PropTypes.node,
  img: PropTypes.node,
};

function AppFooter() {
  const theme = useTheme();
  return (
    <footer
      css={css`
        background: ${theme.palette.primary.dark};
        padding-top: 61px;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          background-image: url(${bgFooter});
          background-size: cover;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          max-width: 1180px;
          margin: 0 auto;
        `}
      >
        <section
          css={css`
            display: flex;
            gap: 89px;
            @media (max-width: ${theme.breakpoints.values.lg - 1}px) {
              flex-wrap: wrap;
            }
          `}
        >
          <ul>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <img src={logo} />
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href=""
                component="a"
                css={css`
                  text-decoration: none;
                  color: #ffffff;
                `}
              >
                02-04 Alexandre de Rhodes Ho Chi Minh City,Vietnam
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
                display: flex;
              `}
            >
              <Typography
                vairiant="Body 1"
                href=""
                component="a"
                css={css`
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  border: 1px solid white;
                  opacity: 0.2;
                  margin-right: 16px;
                  color: white;
                `}
              >
                {<TwitterIcon />}
              </Typography>
              <Typography
                vairiant="Body 1"
                href=""
                component="a"
                css={css`
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  border: 1px solid white;
                  opacity: 0.2;
                  margin-right: 16px;
                  color: white;
                `}
              >
                {<FacebookOutlinedIcon />}
              </Typography>
              <Typography
                vairiant="Body 1"
                href=""
                component="a"
                css={css`
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  border: 1px solid white;
                  opacity: 0.2;
                  margin-right: 16px;
                  color: white;
                `}
              >
                {<InstagramIcon />}
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <img src={icon_BCT} />
            </li>
          </ul>
          <ul>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Hỗ trợ
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <img src={phone} />
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <img src={email} />
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <img src={email01} />
            </li>
          </ul>
          <ul>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Subtitle 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Công ty
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Về Vrex
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Tuyển dụng
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Liên hệ
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Chính sách bảo mật
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Điều khoản sử dụng
              </Typography>
            </li>
          </ul>
          <ul>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Thông tin
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Thông tin nổi bật
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Thông tin thị trường
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Báo cáo và phân tích
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Cập nhật sản phẩm
              </Typography>
            </li>
            <li
              css={css`
                list-style-type: none;
                margin: 20px 0;
              `}
            >
              <Typography
                vairiant="Body 1"
                href="#"
                component={"a"}
                css={css`
                  color: white;
                  text-decoration: none;
                `}
              >
                Kiến thức cho môi giới
              </Typography>
            </li>
          </ul>
        </section>
        <span
          css={css`
            display: inline-block;
            width: 100%;
            height: 1px;
            margin: 0 auto;
            background: white;
            opacity: 0.2;
          `}
        ></span>
        <Typography
          component={"p"}
          vairiant="Body 1"
          css={css`
            color: white;
            text-align: center;
            margin-top: 24px;
            margin-bottom: 24px;
          `}
        >
          © 2021 - Vrex.vn. MST: 0319886988 - Sở KHĐT TP Hồ Chí Minh cấp ngày
          11/07/2019
        </Typography>
      </div>
    </footer>
  );
}

export default AppFooter;
