export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  children?: Menus;
  id?: string;
  parent?: Menu;
}

export type Menus = Menu[];
