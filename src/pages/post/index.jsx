import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  getUIPostCategoryList,
  getUIPostViewMore,
  getAllPostCategory,
  getPostTags,
} from "../../api/news";
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerContent from "../../components/common/ContainerContent";
import { Navigation } from "swiper";
import { css } from "@emotion/react";
import getImageUrl from "../../utils/getImage";
import { Box, IconButton, Typography } from "@mui/material";
import SearchPanel from "../../components/common/SearchPanel";
import RightCategory from "../../components/common/RightCategory";
import RightTopic from "../../components/common/RightTopic";
import RightNewsBox from "../../components/common/RightNewsBox";
import NewsBox from "../../components/common/NewsBox";
import NewsBox2 from "../../components/common/NewsBox2";

import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import Grid from "@mui/material/Grid";
const RenderNews = (props) => {
  const { categoryList } = props;
  if (!categoryList || categoryList.categoryList < 1) return <></>;
  const array = [...categoryList];
  const firstItem = array.shift();
  return (
    <div>
      <div>
        {firstItem && <NewsBox news={firstItem} width={886} height={473} />}
      </div>
      <div
        css={css`
          position: relative;
          margin-top: 24px;
        `}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {array.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsBox2 news={item} width={260} />
            </SwiperSlide>
          ))}
        </Swiper>
        {array.length > 0 && (
          <>
            <IconButton
              color="secondary"
              className="swiper-button-prev"
              css={css`
                position: absolute;
                top: 28%;
                left: -20px;
                display: inline-flex;
                border: none;
                background: #ffffff;
                color: rgba(117, 117, 117, 1);
                /* Below / Low */
                transform: translateY(-50%);
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                z-index: 99;
                &:hover {
                  background: #ffffff;
                }
              `}
            >
              <KeyboardArrowLeftOutlinedIcon />
            </IconButton>

            <IconButton
              color="secondary"
              className="swiper-button-next"
              css={css`
                position: absolute;
                top: 28%;
                right: -20px;

                display: inline-flex;
                border: none;
                background: #ffffff;
                color: rgba(117, 117, 117, 1);
                /* Below / Low */

                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                z-index: 99;
                transform: translateY(-50%);
                &:hover {
                  background: #ffffff;
                }
              `}
            >
              <KeyboardArrowRightOutlinedIcon />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
};
RenderNews.propTypes = {
  categoryList: PropTypes.array,
};
function PostPage() {
  const [data, setData] = useState({});

  const callAPI = async () => {
    try {
      const [categoryList, viewMore, postCategory, postTags] =
        await Promise.all([
          getUIPostCategoryList(),
          getUIPostViewMore(),
          getAllPostCategory(),
          getPostTags(),
        ]);

      const result = {
        categoryList: categoryList.data.result,
        viewMore: viewMore.data.result, // Tin xem nhiều
        postCategory: postCategory.data.result, //Danh mục
        postTags: postTags.data.result,
      };
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <ContainerContent>
        <Box>
          <Grid container spacing={6}>
            <Grid item xs={8}>
              <div>
                {data &&
                  data.categoryList &&
                  data.categoryList.map((item, index) => (
                    <div
                      css={css`
                        margin: 40px 0;
                      `}
                      key={index}
                    >
                      {item.posts && item.posts.length > 0 && (
                        <>
                          <div
                            css={css`
                              display: flex;
                              gap: 12px;
                            `}
                          >
                            <img src={getImageUrl(item.iconUrl, 26)} alt="" />

                            <h3>
                              <Typography
                                css={css`
                                  font-size: 28px;
                                  text-decoration: none;
                                  color: black;
                                `}
                                component={"a"}
                                href="#"
                              >
                                {item.name}
                              </Typography>
                            </h3>
                          </div>
                          {item.posts && (
                            <RenderNews categoryList={item.posts} />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                {/* <SupposedBox /> */}
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                css={css`
                  margin-bottom: 20px;
                  max-width: 361px;
                `}
              >
                <SearchPanel />
              </div>
              <RightCategory postCategory={data && data.postCategory} />
              <RightTopic postTags={data && data.postTags} />
              <RightNewsBox
                categoryList={data && data.viewMore}
                title={"Tin xem nhiều nhất"}
              />
            </Grid>
          </Grid>
        </Box>
      </ContainerContent>
    </div>
  );
}

export default PostPage;
