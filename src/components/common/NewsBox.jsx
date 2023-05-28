import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";
import { formatDatetime } from "../../utils/format";
import { Link } from "react-router-dom";

NewsBox.propTypes = {
  news: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

function NewsBox(props) {
  const { news, width, height } = props;
  return (
    // <Link to={`/tin-tuc/${news.id}`}>
    <Link to={`/post/${news.id}`}>
      <div
        css={css`
          position: relative;
          overflow: hidden;
        `}
      >
        <img
          css={css`
            width: ${width}px;
            height: ${height}px;
            object-fit: cover;
            border-radius: 8px;
            transition: all 2s ease;
            &:hover {
              transform: scale(1.5);
            }
          `}
          src={getImageUrl(news.avatarUrl, width)}
          alt=""
        />
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 114px;
            left: 0;
            bottom: 0;
            background: linear-gradient(
              180deg,
              rgba(20, 20, 20, 0) 0%,
              #141414 100%
            );
          `}
        >
          <div
            css={css`
              position: absolute;
              bottom: 32px;
              left: 32px;
              z-index: 99;
            `}
          >
            <p
              css={css`
                color: white;
              `}
            >
              {news.name}
            </p>
            <span
              css={css`
                color: white;
              `}
            >
              {formatDatetime(news.issueDate)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsBox;
