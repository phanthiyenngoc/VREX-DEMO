import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";
import { formatDatetime } from "../../utils/format";
import { Link } from "react-router-dom";

NewsBox2.propTypes = {
  news: PropTypes.object,
  width: PropTypes.number,
};

function NewsBox2(props) {
  const { news, width } = props;
  return (
    <Link to={`/tin-tuc/${news.id}`}>
      <div
        css={css`
          position: relative;
          overflow: hidden;
          max-width: 244px;
          height: 244px;
          background-color: white;
        `}
      >
        <div
          css={css`
            width: 240px;
            max-height: 140px;
            overflow: hidden;
            border-radius: 8px;
          `}
        >
          <img
            css={css`
              width: 100%;

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
        </div>
        <div
          css={css`
            width: 100%;
            height: 114px;

            background: white;
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 100%;
              bottom: 0;
              left: 0px;
              z-index: 99;
            `}
          >
            <p
              css={css`
                color: #1f1f1f;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                bottom: 0;
              `}
            >
              {news.name}
            </p>
            <span
              css={css`
                color: #afafaf;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
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

export default NewsBox2;
