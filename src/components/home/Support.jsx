import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";
import CommonButton from "../common/CommonButton";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import img from "../../assets/Image/Support/Rectangle 3030.svg";
import img_house from "../../assets/Image/Support/Group 342.svg";
import img_circle from "../../assets/Image/Support/Group 341.svg";

Support.propTypes = {
  SupportList: PropTypes.func,
};

SupportItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

function SupportItem(props) {
  const { title, desc } = props;
  return (
    <div
      css={css`
        max-width: 204px;
      `}
    >
      <Typography
        css={css`
          color: #afafaf;
          margin-bottom: 24px;
        `}
        variant="subtitle1"
        component={"h6"}
      >
        {title}
      </Typography>
      <Typography
        css={css`
          line-height: 24px;
        `}
        variant="body2"
        component={"p"}
      >
        {desc}
      </Typography>
    </div>
  );
}
function Support() {
  const SupportList = [
    {
      id: 1,
      title: "Bất động sản ở Hồ Chí Minh",
      desc: "Mua bán nhà đất Quận 2 Mua bán nhà đất Quận 7 Mua bán nhà đất Quận 9 Mua bán nhà đất Quận Tân Bình Mua bán nhà đất Quận Bình Thạnh Mua bán nhà đất Quận Gò Vấp Mua bán nhà đất Quận 8 Mua bán nhà đất Quận 10 Mua bán nhà đất Quận 1",
    },
    {
      id: 2,
      title: "Bất động sản ở Hà Nội",
      desc: "Dự án Vinhomes Ocean Park Dự án Vinhomes Smart City Mua bán nhà đất Hà Đông Bán nhà đất Hà Nội Bán căn hộ chung cư Hà Nội Mua bán nhà nguyên căn Hà Nội Bán nhà mặt phố Hà Nội Imperia Sky Garden Căn hộ King Palace",
    },
    {
      id: 3,
      title: "Bất động sản nổi bật",
      desc: "Bất động sản nổi bật Liền kề Aqua City Căn hộ chung cư Diamond Island Vinhomes Grand Park Quận 9 Vinhomes Central Park Căn hộ chung cư Safira Khang Điền Căn hộ chung cư Saigon Pearl Căn hộ chung cư Goldmark City Căn hộ chung cư Richmond City Liền kề tại Vinhomes Riverside",
    },
    {
      id: 4,
      title: "Nhà đất cho thuê",
      desc: "Nhà đất cho thuê Thuê nhà Hà Đông Phòng trọ Đà Nẵng Phòng trọ Bình Thạnh Cho thuê phòng trọ Cho thuê mặt bằng kinh doanh Cho thuê cửa hàng Cho thuê chung cư Thuê chung cư mini Cho thuê nhà nguyên căn",
    },
  ];
  return (
    <>
      <div
        css={css`
          background-image: url("${img}");
          width: 100%;
          height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <ContainerContent>
          <div
            css={css`
              display: flex;
              gap: 20px;
            `}
          >
            <div
              css={css`
                max-width: 580px;
                min-height: 240px;
                background: #440656;
                border-radius: 12px;
                padding: 36px;
                padding-left: 40px;
                position: relative;
              `}
            >
              <Typography
                css={css`
                  color: white;
                `}
                variant="h5"
                component={"h5"}
              >
                Hỗ trợ bán và cho thuê
              </Typography>
              <Typography
                css={css`
                  color: white;
                  margin-top: 16px;
                  margin-bottom: 40px;
                `}
                variant="Body2"
                component={"p"}
              >
                Với chi phí môi giới thấp, công nghệ và chuyên gia của Vrex sẽ
                tư vấn giá tốt nhất cho bạn
              </Typography>
              <CommonButton
                css={css`
                  min-width: 200px;
                  height: 40px;
                  background: #ffc600;
                  padding: 12px 24px;
                  border-radius: 4px;
                  color: #440656;
                  &:hover {
                    opacity: 0.9;
                    background: #ffc600;
                  }
                `}
              >
                Đăng tin
              </CommonButton>
              <img
                css={css`
                  position: absolute;
                  bottom: 0;
                  right: 0;
                `}
                src={img_house}
                alt=""
              />
            </div>
            <div
              css={css`
                max-width: 580px;
                min-height: 240px;
                background: #440656;
                border-radius: 12px;
                padding: 36px;
                padding-left: 40px;
                position: relative;
              `}
            >
              <Typography
                css={css`
                  color: white;
                `}
                variant="h5"
                component={"h5"}
              >
                Hỗ trợ mua và tìm thuê
              </Typography>
              <Typography
                css={css`
                  color: white;
                  margin-top: 16px;
                  margin-bottom: 40px;
                `}
                variant="Body2"
                component={"p"}
              >
                Thông tin căn hộ được cập nhật liên tục mỗi 5 phút, dịch vụ hoàn
                toàn miễn phí
              </Typography>
              <CommonButton
                css={css`
                  min-width: 200px;
                  height: 40px;
                  background: #ffc600;
                  padding: 12px 24px;
                  border-radius: 4px;
                  color: #440656;
                  &:hover {
                    opacity: 0.9;
                    background: #ffc600;
                  }
                `}
              >
                Liên hệ
              </CommonButton>
              <img
                css={css`
                  position: absolute;
                  bottom: 0;
                  right: 0;
                `}
                src={img_circle}
                alt=""
              />
            </div>
          </div>
        </ContainerContent>
      </div>
      <div
        css={css`
          padding: 60px 0;
        `}
      >
        <ContainerContent>
          <div
            css={css`
              display: flex;
              gap: 87px;
            `}
          >
            {SupportList.map((item, index) => (
              <div key={index}>
                <SupportItem
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </ContainerContent>
      </div>
    </>
  );
}

export default Support;
