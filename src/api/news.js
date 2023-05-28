// http là giống như fetch nhưng hiện tại là dùng axios để thay thế cho fetch
import http from "../utils/http";

export function getNewsDetail(newsId) {
  //tin tuc/id
  return http({
    url: `/api/services/app/Post/GetDetailDto?id=${newsId}`,
    method: "get",
  });
}

export function getPostCategoryDetail(newsCategoryId) {
  //tin tuc/id
  return http({
    url: `/api/services/app/postCategory/GetDetailDto?id=${newsCategoryId}`,
    method: "get",
    params: {
      id: newsCategoryId,
    },
  });
}

export function getUIRecentPost(newsId) {
  //tin moi
  return http({
    url: `/api/services/app/Post/GetUIRecentPost?id=${newsId}`,
    method: "get",
    params: {
      postId: newsId,
      rowsPerPage: 5,
      postType: 0,
    },
  });
}

export function getAllPostCategory() {
  //danh muc
  return http({
    url: `/api/services/app/PostCategory/GetAllPostCategory`,
    method: "get",
  });
}

export function getUIRelatedPostList(newsId) {
  //tcác tin lien quan
  return http({
    url: `/api/services/app/Post/GetUIRelatedPostList`,
    method: "get",
    params: {
      postId: newsId,
      rowsPerPage: 3,
      postType: 0,
    },
  });
}

export function getPostTags() {
  //chủ đề dc quan tam
  return http({
    url: `/api/services/app/HostSettings/GetPostTags`,
    method: "get",
  });
}

export function getUIPostCategoryList() {
  //tin tuc- tin thi truong
  return http({
    url: `/api/services/app/PostCategory/GetUIPostCategoryList`,
    method: "get",
    params: {
      postType: 0,
      take: 7,
    },
  });
}

export function getUIPostViewMore(newsid) {
  //tin thị trường news-category
  return http({
    url: `/api/services/app/Post/GetUIPostViewMore/?id=${newsid}`,
    method: "get",
    params: {
      postId: newsid,
      take: 5,
    },
  });
}

export function getUIPostList(
  postCategoryId,
  page,
  rowsPerPage,
  filterKeyword,
  tag
) {
  //Danh sách bài viết
  return http({
    url: `/api/services/app/Post/GetUIPostList`,
    method: "get",
    params: {
      postCategoryId: postCategoryId,
      postType: 0, //loại bài post
      page: page, // trang hiện tại
      rowsPerPage: rowsPerPage, // so luong item trong 1 trang,
      filterKeyword: filterKeyword,
      tag: tag,
    },
  });
}
