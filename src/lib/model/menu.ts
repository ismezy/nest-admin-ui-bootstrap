export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  children?: Menus;
}

export type Menus = Menu[];
