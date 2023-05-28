import React from "react";
import PropTypes from "prop-types";
import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";
import getImageUrl from "../../utils/getImage";
import CommonButton from "../common/CommonButton";

MiddleBanner2.propTypes = {
  homeMiddleBanner2: PropTypes.array.isRequired,
};

BannerBox.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function BannerBox(props) {
  const { item, index } = props;
  console.log(index);
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          max-width: 580px;
          max-height: 240px;
        `}
        key={item.id}
      >
        <img
          css={css`
            width: 100%;
            object-fit: cover;
            border-radius: 4px;
          `}
          src={getImageUrl(item.bannerUrl, 580)}
          alt=""
        />
      </div>
      <div
        css={css`
          width: 100%;
          height: 100%;
          z-index: 1;
          padding: 16px;
          position: absolute;
          left: 0px;
          top: 0;
        `}
      >
        <div
          css={css`
            border: 1px solid;
            border-image-slice: 1;
            border-image-source: linear-gradient(180deg, #ffc600, #f37506);
            width: 100%;
            height: 100%;
            border-radius: 4px;
            color: white;
            font-family: "Playfair Display";
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 37px;
            text-align: center;

            color: #ffffff;
          `}
        >
          <div
            css={css`
              max-width: 150px;
              position: absolute;
              top: 50%;
              left: 64px;
              transform: translateY(-50%);
            `}
          >
            {index == 0 ? "Tư vấn Pháp lý" : `Tính lãi vay mua nhà`}
            <CommonButton
              css={css`
                min-width: 120px;
                height: 32px;
                background: #ffc600;
                box-shadow: 0px 2px 0px #f37506;
                border-radius: 4px;
                font-family: "SFU Eurostile";
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 1.14;

                color: #440656;
                &:hover {
                  opacity: 0.9;
                  background: #ffc600;
                }
              `}
            >
              xem thêm
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleBanner2(props) {
  const { homeMiddleBanner2 } = props;
  console.log("homeMiddlebanner2", homeMiddleBanner2);
  return (
    <ContainerContent>
      <div
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        {homeMiddleBanner2.map((item, index) => (
          <BannerBox key={item.id} index={index} item={item} />
        ))}
      </div>
    </ContainerContent>
  );
}

export default MiddleBanner2;
