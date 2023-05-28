import http from "../utils/http";

export function getUIList(params) {
  //tin tuc/id
  return http({
    url: `/api/services/app/ListingSearch/GetUIList`,
    method: "get",
    params: params,
  });
}
