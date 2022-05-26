import axios from 'axios';

axios.interceptors.request.use(
  (request) => {
    if (!request.headers) {
      request.headers = {};
    }
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // message.error(error.response.data.message);
    // if (error.response.status === 401) {
    //   // 未登录
    //   router.push('/login');
    // }
    return Promise.reject({ status: error.response?.status, ...error.response?.data });
  }
);
