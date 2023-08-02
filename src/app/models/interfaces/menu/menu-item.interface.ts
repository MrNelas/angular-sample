/** Элементы меню */
export type MenuItem = {
  link?: string;
  title: string;
  main?: boolean;
  subItems?: SubItems[];
};

/** Элементы выпадающего списка */
type SubItems = Pick<MenuItem, 'link' | 'title'>;
