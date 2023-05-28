import PropTypes from "prop-types";

import ContainerContent from "./ContainerContent";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";

SupposedBox.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.any,
  time: PropTypes.string,
};

function SupposedBox(props) {
  const { logo, name, image, title, time } = props;
  return (
    <div>
      <ContainerContent>
        <div
          css={css`
            max-width: 780px;
            height: 664px;
            background: pink;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <img
              css={css`
                width: 23px;
                height: 29px;
                margin-right: 16px;
              `}
              src={getImageUrl(`${logo}`, 23)}
              alt=""
            />
            <span>{name}</span>
          </div>
          <div>
            <img src={image} alt="" />
            <img src={getImageUrl(image, 280)} alt="" />
            <div>
              <p>{title}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
}

export default SupposedBox;
