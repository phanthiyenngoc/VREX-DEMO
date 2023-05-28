import PropTypes from "prop-types";
import { css } from "@emotion/react";
import getImageUrl from "../../utils/getImage";

RightNewsBox.propTypes = {
  newsList: PropTypes.array,
  title: PropTypes.string,
};

function RightNewsBox(props) {
  const { newsList, title } = props;
  if (!newsList || newsList.length == 0) return <></>;

  return (
    <div
      css={css`
        padding: 1.5rem;
        border-width: 1px;
        border-style: solid;
        border-radius: 0.5rem;
        border-color: rgba(238, 238, 238);
      `}
    >
      <h6
        css={css`
          font-size: 20px;
          margin: 0;
          margin-bottom: 24px;
        `}
      >
        {title}
      </h6>
      <div>
        {newsList.map((item, index) => (
          <>
            <div
              key={index}
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  width: 112px;
                  min-width: 112px;
                  height: 68px;
                  margin-right: 12px;
                `}
                key={item.id}
              >
                <img
                  css={css`
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    border-radius: 4px;
                  `}
                  src={getImageUrl(item.avatarUrl, 112)}
                  alt=""
                />
              </div>

              <div>
                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  <a
                    css={css`
                      color: rgba(243, 117, 6);
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 12px;
                    `}
                    href="#"
                  >
                    {item.postCategoryName}
                  </a>
                </p>
                <p
                  css={css`
                    margin: 0;
                    font-size: 14px;
                    font-weight: 400;

                    color: #757575;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                  `}
                >
                  {item.name}
                </p>
              </div>
            </div>
            <div
              css={css`
                width: 100%;
                height: 1px;
                background: #dddfe1;
                margin: 16px 0;
              `}
            ></div>
          </>
        ))}
      </div>
    </div>
  );
}

export default RightNewsBox;
