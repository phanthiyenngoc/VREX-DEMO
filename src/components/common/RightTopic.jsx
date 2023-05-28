import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

RightTopic.propTypes = {
  postTags: PropTypes.string,
};

function RightTopic(props) {
  const { postTags } = props;
  console.log("postTags", postTags);
  if (!postTags || postTags.length == 0) return <></>;
  return (
    <div
      css={css`
        background: #ffff;
        margin-bottom: 24px;
      `}
    >
      <div
        css={css`
          padding: 24px;
          padding: 1.5rem;
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-width: 1px;
          border-style: solid;
          border-radius: 0.5rem;
          border-color: rgba(238, 238, 238);
          overflow: hidden;
        `}
      >
        <h4
          css={css`
            font-size: 20px;
            margin-bottom: 24px;
            color: #1f1f1f;
          `}
        >
          Chủ đề được quan tâm
        </h4>
        <div
          css={css`
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
          `}
        >
          {postTags.split(",").map((item, index) => (
            <div key={index}>
              <Stack
                css={css`
                  max-width: 150px;
                `}
              >
                <Button
                  css={css`
                    display: inline-block;
                    background-color: rgba(237, 243, 253);
                    margin: 5px 10px;
                    padding: 6px 16px;
                    border: none;
                    color: rgba(39, 110, 241);
                    box-shadow: none;
                    outline: none;
                    &:hover {
                      opacity: 1;
                      color: #fff;
                      background: rgba(39, 110, 241);
                    }
                  `}
                  variant="contained"
                >
                  <span
                    css={css`
                      color: rgba(39, 110, 241);
                      text-transform: capitalize;
                      display: inline-block;
                      text-decoration: none;

                      &:hover {
                        color: white;
                      }
                    `}
                  >
                    {item}
                  </span>
                </Button>
              </Stack>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightTopic;
