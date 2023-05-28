import axios from "axios";

const http = axios.create({
  baseURL: "https://api-vrex.vercel.app",
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => {
    //   if (store.getters['user/token']) {
    //     config.headers["Authorization"] = "Bearer " + token;
    //   }
    // config.headers["Abp.TenantId"] = 1;

    config.params = {
      ...config.params,
      // culture: "vi",
      // "ui-culture": "vi-VN",
    };

    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    const res = response;

    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    // Message({
    // 	message: error.response.data.error.message.replace(/\[|\]/g, ''),
    // 	type: 'error',
    // 	duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default http;
