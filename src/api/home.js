// http là giống như fetch nhưng hiện tại là dùng axios để thay thế cho fetch
import http from "../utils/http";

export function getHomeData() {
  return http({
    url: `/home-page/getHomeData`,
    method: "get",
  });
}
