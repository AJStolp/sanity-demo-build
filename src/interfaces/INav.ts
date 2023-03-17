export interface INavItem {
  link: string;
}

export interface INavData {
  title: string;
  slug: {
    current: string;
  };
  link: string;
}

export interface INav<T extends INavItem[]> {
  items: T;
}
