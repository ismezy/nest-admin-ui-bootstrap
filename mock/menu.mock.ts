import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/user-menus',
    method: 'get',
    response: () => {
      return [
        { title: '首页', icon: 'home', path: '/admin' },
        {
          title: '系统管理', icon: 'system', path: '/admin/system', children: [
            { title: '数据字典', icon: 'dictionary', path: '/admin/system/dictionary', parent: 'system' },
            { title: '角色管理', icon: 'role-manager', path: '/admin/system/role', parent: 'system' },
            { title: '用户管理', icon: 'user-manager', path: '/admin/system/user', parent: 'system' },
          ]
        }
      ];
    }
  }, {
    url: '/api/user-menus/system',
    method: 'get',
    response: () => {
      return [
        { title: '数据字典', icon: 'dictionary', path: '/admin/system/dictionary', parent: 'system' },
        { title: '角色管理', icon: 'role', path: '/admin/system/role', parent: 'system' },
        { title: '用户管理', icon: 'user', path: '/admin/system/user', parent: 'system' },
      ];
    }
  }
] as MockMethod[];
