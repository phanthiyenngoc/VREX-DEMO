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

export default NewsDetail;
