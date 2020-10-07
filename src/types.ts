export type Factory<T> = () => T;
export type Consumer<T> = (arg: T) => void;
export type Runnable = () => void;

export interface MenuOption {
  size: string;
  price: number;
}

export interface MenuItem {
  item: string;
  options: MenuOption[];
}

export interface Menu {
  meta: {
    version: number;
    date: string;
  };
  menu: MenuItem[];
}

export interface Item {
  name: string;
  size: string;
  price: number;
}

export interface CartItem extends Item {
  quantity: number;
}
