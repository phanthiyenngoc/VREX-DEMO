import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ContainerContent from "../../components/common/ContainerContent";
import { useEffect, useState } from "react";
import {
  getNewsDetail,
  getUIRecentPost,
  getAllPostCategory,
  getUIRelatedPostList,
  getPostTags,
} from "../../api/news";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { css } from "@emotion/react";
// import getImageUrl from "../../utils/getImage.js";

import RightCategory from "../../components/common/RightCategory";
import RightTopic from "../../components/common/RightTopic";
import RightNewsBox from "../../components/common/RightNewsBox";

const DetailPost = () => {
  const { newsId } = useParams(); //lay61 /id
  const [detailData, setDetailData] = useState({});

  const callAPI = async () => {
    try {
      const [detail, recentPost, postCategory, relatedPostList, postTags] =
        await Promise.all([
          getNewsDetail(newsId),
          getUIRecentPost(newsId),
          getAllPostCategory(newsId),
          getUIRelatedPostList(newsId),
          getPostTags(),
        ]);

      const result = {
        detail: detail.data.result, // detail
        recentPost: recentPost.data.result, // Tin mới
        postCategory: postCategory.data.result, //Danh mục
        relatedPostList: relatedPostList.data.result, //Các tin liên quan:
        postTags: postTags.data.result, //Chủ đề được quan tâm
      };
      console.log(result);
      setDetailData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div
      css={css`
        background: #fafafa;
      `}
    >
      <ContainerContent>
        <Box>
          <Grid container spacing={6}>
            <Grid
              item
              xs={8}
              css={css`
                overflow: hidden;
              `}
            >
              <div
                css={css`
                  width: 100%;
                  background: white;
                  padding: 16px 20px;
                `}
              >
                {detailData && detailData.detail && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detailData.detail.fullDescription,
                    }}
                  ></div>
                )}
              </div>

              <div
                css={css`
                  display: block;
                  padding: 1rem;
                  margin-top: 1.25rem;
                  background-color: #dddfe1;
                `}
              >
                <p
                  css={css`
                    font-size: 16px;
                  `}
                >
                  Các tin liên quan
                </p>
                {detailData &&
                  detailData.relatedPostList &&
                  detailData.relatedPostList.items.map((item, index) => (
                    <ul
                      css={css`
                        color: #007aff;
                        font-size: 14px;
                      `}
                      key={index}
                    >
                      <li css={css}>{item.name}</li>
                    </ul>
                  ))}
              </div>
            </Grid>
            <Grid item xs={4}>
              <RightCategory postCategory={detailData.postCategory} />

              <RightTopic postTags={detailData.postTags} />

              <RightNewsBox
                newsList={detailData.recentPost && detailData.recentPost.items}
                title={"Tin mới"}
              />
            </Grid>
          </Grid>
        </Box>
      </ContainerContent>
    </div>
  );
};
export default DetailPost;
