import axios from 'axios';
import './interceptors-filter';

  /**
   * get请求
   * @param url
   * @param queryParams
   * @param header
   */
  export async function get<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    return await axios.get<unknown, T>(url, { headers: config?.header, params: config?.params });
  }

  // public async pager<T>(url: string, request: PageRequest, config?: HttpRequestConfig): Promise<PageResponse<T>> {
  //   return this.get(url, {
  //     ...config,
  //     params: {
  //       ...request,
  //       ...config?.body,
  //       ...config?.params,
  //     },
  //   });
  // }

  /**
   * post请求
   * @param url
   * @param config
   */
  export async function post<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    return await axios.post<any, T>(url, config?.body, {
      headers: config?.header,
      params: config?.params,
    });
  }

  /**
   * put请求
   * @param url
   * @param config
   */
  export async function put<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    return await axios.put<any, T>(url, config?.body, {
      headers: config?.header,
      params: config?.params,
    });
  }

  /**
   * delete请求
   * @param url
   * @param config
   */
  export async function remove<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    return await axios.delete<any, T>(url, {
      headers: config?.header,
      params: config?.params,
      data: config?.body,
    });
  }

/**
 * http请求配置
 */
export interface HttpRequestConfig {
  header?: HttpHeader;
  params?: HttpQueryParams;
  body?: any;
}

/**
 * http请求头
 */
export interface HttpHeader {
  [key: string]: string;
}

/**
 * http请求地址栏参数
 */
export interface HttpQueryParams {
  [key: string]: any | any[];
}
