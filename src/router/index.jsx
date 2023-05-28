import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../pages/Error";
import Loader from "../components/common/Loader";
import PostPage from "../pages/post";
import DetailPost from "../pages/post/detailPost";
import SearchPost from "../pages/post/SearchPost";
import PostCategory from "../pages/post/PostCategory";
import ListingSearch from "../pages/listing/ListingSearch";

const HomeLayout = lazy(() => import("../layouts/HomeLayout.jsx")); //lười khi nào cần mới tải component
const HomePage = lazy(() => import("../pages/home/index.jsx"));
const NewsPage = lazy(() => import("../pages/news/index.jsx"));
const NewsDetail = lazy(() => import("../pages/news/detail.jsx"));
const NewsCategory = lazy(() => import("../pages/news/news-category.jsx"));
const SearchNews = lazy(() => import("../pages/news/search.jsx"));

const ListingPage = lazy(() => import("../pages/listing/index.jsx"));
const UserProfileLayout = lazy(() =>
  import("../layouts/UserProfileLayout.jsx")
);
const UserInfo = lazy(() => import("../pages/user-info/index.jsx"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,

      children: [
        {
          path: "/",
          element: (
            <Loader>
              <HomePage />
            </Loader>
          ),
        },
        {
          path: "/tin-tuc", // Trang index
          element: (
            <Loader>
              <NewsPage />
            </Loader>
          ),
        },
        {
          path: "/post", // Trang demo
          element: (
            <Loader>
              <PostPage />
            </Loader>
          ),
        },
        {
          path: "/post/:newsId",
          element: (
            <Loader>
              <DetailPost />
            </Loader>
          ),
        },
        {
          path: "/post/tim-kiem", // Trang tìm kiếm tin tức
          element: (
            <Loader>
              <SearchPost />
            </Loader>
          ),
        },
        {
          path: "/danh-muc-bai-post/:newsCategoryId", //Trang danh mục tin tức
          element: (
            <Loader>
              <PostCategory />
            </Loader>
          ),
        },
        {
          path: "/tin-tuc/:newsId", // Trang chi tiết tin tức
          element: (
            <Loader>
              <NewsDetail />
            </Loader>
          ),
        },
        {
          path: "/tin-tuc/tim-kiem", // Trang tìm kiếm tin tứcBẤT ĐỘNG SẢ
          element: (
            <Loader>
              <SearchNews />
            </Loader>
          ),
        },
        {
          path: "/tim-kiem-tin-dang", // Trang tìm kiếm tin tức
          element: (
            <Loader>
              <ListingSearch />
            </Loader>
          ),
        },

        {
          path: "/danh-muc-tin-tuc/:newsCategoryId", //Trang danh mục tin tức
          element: (
            <Loader>
              <NewsCategory />
            </Loader>
          ),
        },

        {
          path: "/listing/:listingId",
          element: (
            <Loader>
              <ListingPage />
            </Loader>
          ),
        },
        {
          path: "/",
          element: (
            <Loader>
              <ListingSearch />
            </Loader>
          ),
        },
      ],
    },
    {
      path: "/thong-tin-ca-nhan",
      element: <UserProfileLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/thong-tin-ca-nhan",
          element: <UserInfo />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default router;
