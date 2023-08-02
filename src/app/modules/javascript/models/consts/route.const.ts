import { MenuItem } from 'src/app/models/interfaces/menu/menu-item.interface';

import { RouteJavascriptTitleEnum } from '../enums/route-title.enum';
import { RouteJavascriptEnum } from '../enums/route.enum';

/** Пункты меню */
export const ROUTES_JAVASCRIPT: MenuItem[] = [
  { link: RouteJavascriptEnum.javascript, title: RouteJavascriptTitleEnum.javascript },
];
