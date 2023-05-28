SearchPost.propTypes = {};

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getUIPostList,
  getUIPostViewMore,
  getAllPostCategory,
  getPostTags,
} from "../../api/news";
import { Box, Pagination, Typography, css } from "@mui/material";
import RightCategory from "../../components/common/RightCategory";
import RightTopic from "../../components/common/RightTopic";
import RightNewsBox from "../../components/common/RightNewsBox";

import ContainerContent from "../../components/common/ContainerContent";
import Grid from "@mui/material/Grid";
import getImageUrl from "../../utils/getImage";
import NewsBox3 from "../../components/common/NewsBox3";
import SearchPanel from "../../components/common/SearchPanel";
//import api getUIPostList
function SearchPost() {
  let [searchParams] = useSearchParams(); // doc từ url xuống
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState({});
  //tao rowsPerPage
  const filterKeyword = searchParams.get("filterKeyword"); // lấy value ra
  const tag = searchParams.get("tag");
  const rowsPerPage = 10;

  const callAPI = async () => {
    try {
      setPage(1);
      const [newsList, viewMore, postCategory, postTags] = await Promise.all([
        getUIPostList(null, page, rowsPerPage, filterKeyword, tag),
        getUIPostViewMore(),
        getAllPostCategory(),
        getPostTags(),
      ]);

      const result = {
        newsList: newsList.data.result, // Danh sách tin tức
        viewMore: viewMore.data.result, // Tin xem nhiều
        postCategory: postCategory.data.result, //Danh mục
        postTags: postTags.data.result, //Chủ đề được quan tâm
      };

      setTotalCount(result.newsList.totalCount);
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event, currentPage) => {
    setPage(currentPage);
    try {
      getUIPostList(null, page, rowsPerPage, filterKeyword, tag).then(
        (resp) => {
          //cách 1: set lại state và dùng lại data cũ
          // setData(prev=>(
          //   {
          //     ...prev,
          //     newsList:resp.data.result
          //   }
          // ));

          //cách 2: set lại state và dùng lại data cũ
          const object = { ...data, newsList: resp.data.result };
          setData(object);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, [filterKeyword, tag]);

  //viet ham goi api
  // => getUIPostList(null,page,filterKeyword,tag)
  //useEffect
  return (
    <div>
      <div
        css={css`
          padding: 48px 8px;
        `}
      >
        <ContainerContent>
          <Box>
            <Grid container spacing={6}>
              <Grid item xs={8}>
                <div>
                  <h3>
                    Tìm Kiếm {filterKeyword}
                    {tag}
                  </h3>
                  {/* <span>Kết quả tìm kiếm {data.newsList.totalCount}</span> */}
                </div>
                <div>
                  {data && data.newsCategory && (
                    <div
                      css={css`
                        display: flex;
                        gap: 12px;
                      `}
                    >
                      <img
                        src={getImageUrl(data.newsCategory.iconUrl)}
                        alt=""
                      />
                      <Typography
                        variant="h3"
                        component={"h3"}
                        css={css`
                          font-size: 28px;
                        `}
                      >
                        {data.newsCategory.name}
                      </Typography>
                    </div>
                  )}
                  {data &&
                    data.newsList &&
                    data.newsList.items.map((item) => (
                      <NewsBox3 news={item} key={item.id} />
                    ))}

                  <Pagination
                    count={
                      totalCount == 0 ? 0 : Math.ceil(totalCount / rowsPerPage)
                    }
                    page={page}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <SearchPanel />
                <RightCategory postCategory={data && data.postCategory} />
                <RightTopic postTags={data && data.postTags} />
                <RightNewsBox
                  newsList={data && data.viewMore}
                  title={"Tin xem nhiều nhất"}
                />
              </Grid>
            </Grid>
          </Box>
        </ContainerContent>
      </div>
    </div>
  );
}

export default SearchPost;
