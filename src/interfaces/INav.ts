import { ILinkItem } from "./INavItem";

export interface INavData {
  title: string;
  slug: {
    current: string;
  };
  link: string;
}

export interface INav<T extends ILinkItem[]> {
  items: T;
}
