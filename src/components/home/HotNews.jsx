import { Typography, css } from "@mui/material";
import PropTypes from "prop-types";
import ContainerContent from "../common/ContainerContent";
import NewsBox from "../common/NewsBox";
import icon from "../../assets/Image/hotNew/Group 13110.svg";

HotNews.propTypes = {
  news: PropTypes.array,
};

function HotNews(props) {
  const { news } = props;
  const arrNews = [...news];
  const firstItem = arrNews.shift();
  return (
    <div
      css={css`
        margin-top: 60px;
      `}
    >
      <ContainerContent>
        <>
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
              Thông tin nổi bật
            </Typography>
          </div>
          <div css={css``}>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                gap: 20px;
                margin-bottom: 109px;
              `}
            >
              <div
                css={css`
                  flex: 1;
                  height: 440px;
                `}
              >
                <NewsBox
                  css={css`
                    border-radius: 8px;
                  `}
                  news={firstItem}
                  width={580}
                  height={440}
                />
              </div>
              <div
                css={css`
                  flex: 1;

                  height: 440px;
                  display: flex;
                  flex-wrap: wrap;
                  gap: 20px;
                `}
              >
                {arrNews.map((item) => (
                  <div
                    key={item.id}
                    css={css`
                      max-width: 280px;
                      max-height: 210px;
                      border-radius: 8px;
                    `}
                  >
                    <NewsBox
                      css={css`
                        gap: 20px;
                      `}
                      news={item}
                      width={280}
                      height={210}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </ContainerContent>
    </div>
  );
}

export default HotNews;
