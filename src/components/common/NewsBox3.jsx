import PropTypes from "prop-types";
import { css } from "@emotion/react";
import getImageUrl from "../../utils/getImage";
import { formatDatetime } from "../../utils/format";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
NewsBox3.propTypes = {
  news: PropTypes.object.isRequired,
};

function NewsBox3(props) {
  const { news } = props;
  const navigate = useNavigate();
  let tags = [];
  if (news.tags) {
    tags = news.tags.split(",,");
  }

  const handleTagClick = (tag) => {
    // navigate(`/tin-tuc/tim-kiem?tag=${tag}`);
    navigate(`/post/tim-kiem?tag=${tag}`);
  };

  return (
    <div>
      <Link
        css={css`
          text-decoration: none;
        `}
        // to={`/tin-tuc/${news.id}`}
        // to={`/post/${news.id}`}
      >
        <article
          css={css`
            margin-top: 1.5rem;
            display: flex;
          `}
        >
          <div>
            <img src={getImageUrl(news.avatarUrl, 184)} alt="" />
          </div>
          <div
            css={css`
              margin-left: 1rem;
            `}
          >
            <div
              css={css`
                display: flex;
              `}
            >
              <a
                css={css`
                  text-decoration: none;
                  font-size: 12px;
                  color: rgb(243, 117, 6);
                `}
                // href="/tin-tuc"
                href="/post"
              >
                Tin thị trường -{" "}
              </a>
              <span
                css={css`
                  color: rgb(117, 117, 117);
                  font-size: 12px;
                `}
              >
                {formatDatetime(news.creationTime, "DD/MM/YYYY")}
              </span>
            </div>
            <Typography
              variant="subtitle2"
              component="p"
              css={css`
                font-size: 14px;
                font-family: Nunito Sans, sans-serif;
                font-weight: bold;
              `}
            >
              {news.name}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              css={css`
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                font-size: 12px;
                font-family: Nunito Sans, sans-serif;
                color: #626262;
              `}
            >
              {news.shortDescription}
            </Typography>
            <Stack spacing={2} direction="row">
              {tags.map((tag, index) => (
                <Button
                  variant="text"
                  key={index}
                  onClick={() => handleTagClick(tag)}
                >
                  {/* <Link to={`/tin-tuc/tim-kiem?tag=${tag}`}> */}
                  {/* <Link to={`/tin-tuc/post?tag=${tag}`}> */}
                  <Link to={`/post/post?tag=${tag}`}>
                    <Typography
                      variant="subtitle2"
                      css={css`
                        font-size: 12px;
                        font-family: Nunito Sans, sans-serif;
                        color: #7a6aff;
                        text-decoration: none;
                        text-transform: none;
                      `}
                    >
                      #{tag}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Stack>
          </div>
        </article>

        <div
          css={css`
            width: 100%;
            height: 1px;
            margin: 24px 0;
            background: #dddfe1;
          `}
        ></div>
      </Link>
    </div>
  );
}

export default NewsBox3;
