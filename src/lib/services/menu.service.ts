import { get } from './http.service';
import type { Menu, Menus } from '../model/menu';

let menuCache: Promise<Menus> | undefined = undefined;
let menuPathMap: Promise<{ [key: string]: Menu }> | undefined;

/**
 * 加载用户菜单
 * @param parent
 */
export async function loadMenu(parent: string = ''): Promise<Menus> {
  if (menuCache) {
    return await menuCache;
  }
  const menus = await get<Menus>(`/api/user-menus/${parent}`, {});
  setParent(menus);
  menuCache = new Promise<Menus>((resolve => {
    resolve(menus);
  }));
  return await menuCache;
}

/**
 * 获取url路径对应的菜单面包屑
 * @param pathname
 */
export async function getBreadcrumbs(pathname: string): Promise<Menus> {
  let menu: Menu | undefined;
  // 加载菜单
  await loadMenu();
  // 菜单生成map
  if (!menuPathMap) {
    menuPathMap = new Promise<{ [key: string]: Menu }>(resolve => {
      menuCache!.then(menus => {
        const map: { [key: string]: Menu } = {};
        addMenusToMap(menus, map);
        resolve(map);
      });
    });
  }
  const map = await menuPathMap;
  menu = map[pathname];
  const ret: Menus = [];
  while (menu) {
    ret.splice(0, 0, menu);
    menu = menu.parent;
  }
  return ret;
}

/**
 * 生成parent字段，为生成面包屑做准备
 * @param menus
 * @param parent
 */
function setParent(menus: Menus, parent?: Menu) {
  menus.forEach(it => {
    it.parent = parent;
    if (it.children) {
      setParent(it.children, it);
    }
  });
}

function addMenusToMap(menus: Menus, map: {[key: string]: Menu}) {
  menus.forEach(it => {
    map[it.path!] = it;
    if(it.children) {
      addMenusToMap(it.children, map);
    }
  });
}
