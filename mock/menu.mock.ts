import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/user-menus',
    method: 'get',
    response: () => {
      return [
        {
          'title': '首页',
          'icon': 'home',
          'path': '/admin'
        },
        {
          'title': '系统管理',
          'icon': 'system',
          'path': '/admin/system'
        },
      ];
    }
  }
] as MockMethod[];
