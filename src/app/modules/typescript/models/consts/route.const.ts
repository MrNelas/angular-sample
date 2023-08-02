import { MenuItem } from 'src/app/models/interfaces/menu/menu-item.interface';

import { RouteTypescriptTitleEnum } from '../enums/route-title.enum';
import { RouteTypescriptEnum } from '../enums/route.enum';

/** Пункты меню */
export const ROUTES_TYPESCRIPT: MenuItem[] = [
  { link: RouteTypescriptEnum.tsGen, title: RouteTypescriptTitleEnum.tsGen },
  { link: RouteTypescriptEnum.tsUtils, title: RouteTypescriptTitleEnum.tsUtils },
];
