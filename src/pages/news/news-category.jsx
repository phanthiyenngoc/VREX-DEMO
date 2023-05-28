import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ContainerContent from "../../components/common/ContainerContent";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RightCategory from "../../components/common/RightCategory";
import RightTopic from "../../components/common/RightTopic";
import RightNewsBox from "../../components/common/RightNewsBox";
import { useEffect, useState } from "react";
import {
  getPostCategoryDetail,
  getUIPostList,
  getUIPostViewMore,
  getAllPostCategory,
  getPostTags,
} from "../../api/news";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import NewsBox3 from "../../components/common/NewsBox3";
import getImageUrl from "../../utils/getImage";

import Pagination from "@mui/material/Pagination";

NewsCategory.propTypes = {
  newsList: PropTypes.array,
};

// function TodoList() {
//   const[ todoList, setTodoList] = useState(['love', 'easy', 'frontend']);
//   function removeTodo(index){
//     const newTodoList = [...todoList];

//     newTodoList.splice(index, 1);
//     setTodoList(newTodoList);
//   }
//   return (
//     <ul>
//       {todoList.map((todo, index)=>(
//         <li key={todo.id}
//         onClick={()=>removeTodo(index)}>{todo.title}</li>
//       ))}
//     </ul>
//   )
// }

function NewsCategory() {
  let { newsCategoryId } = useParams();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState({});
  const rowsPerPage = 10;

  const callAPI = async () => {
    try {
      setPage(1);
      const [newsCategory, newsList, viewMore, postCategory, postTags] =
        await Promise.all([
          getPostCategoryDetail(newsCategoryId),
          getUIPostList(newsCategoryId, page, rowsPerPage),
          getUIPostViewMore(),
          getAllPostCategory(),
          getPostTags(),
        ]);

      const result = {
        newsCategory: newsCategory.data.result, // Thông tin danh mục
        newsList: newsList.data.result, // Danh sách tin tức
        viewMore: viewMore.data.result, // Tin xem nhiều
        postCategory: postCategory.data.result, //Danh mục
        postTags: postTags.data.result, //Chủ đề được quan tâm
      };

      setTotalCount(result.newsList.totalCount);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, currentPage) => {
    setPage(currentPage);
    try {
      getUIPostList(newsCategoryId, currentPage, rowsPerPage).then((resp) => {
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
        //diễn giải
        //const object = {
        // newsCategory: newsCategory.data.result, // Thông tin danh mục
        // newsList: newsList.data.result, // Danh sách tin tức //10 item
        // viewMore: viewMore.data.result, // Tin xem nhiều
        // postCategory: postCategory.data.result, //Danh mục
        // postTags: postTags.data.result, //Chủ đề được quan tâm
        // ===============================================
        // newsList: resp.data.result // 3 item
        // newsList: resp.data.result // 4 item
        // }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, [newsCategoryId]);

  return (
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
                {data && data.newsCategory && (
                  <div
                    css={css`
                      display: flex;
                      gap: 12px;
                    `}
                  >
                    <img src={getImageUrl(data.newsCategory.iconUrl)} alt="" />
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
                {/* {data && data.posts && data.posts.length >= 1 && (
                  <NewsBox3 newsList1={data.posts[0]} />
                )} */}
                {/* {data &&
                  data.viewMore &&
                  data.viewMore.map((item, index) => (
                    <div key={index}>
                      <NewsBox3 key1={item.id} newsList1={item} />
                    </div>
                  ))} */}
              </div>
            </Grid>
            <Grid item xs={4}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
                css={css`
                  margin-bottom: 24px;
                  padding: 6px 0;
                  box-shadow: none;
                  background: #f6f6f6;
                  min-width: 380px;
                  height: 35px;
                `}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Nhập từ khóa bạn cần tìm"
                  inputProps={{ "aria-label": "Nhập từ khóa bạn cần tìm" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon color="secondary" />
                </IconButton>
              </Paper>
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
  );
}

export default NewsCategory;
