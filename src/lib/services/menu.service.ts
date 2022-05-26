import { get } from './http.service';
import type { Menus } from '../model/menu';

export async function loadMenu(module?: string): Promise<Menus> {
  console.log(module);
  return await get(`/api/user-menus${module ? '/' + module : ''}`, {});
}
