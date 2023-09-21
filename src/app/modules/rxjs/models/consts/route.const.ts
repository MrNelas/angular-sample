import { MenuItem } from 'src/app/models/interfaces/menu/menu-item.interface';

import { RouteRxjsTitleEnum } from '../enums/route-title.enum';
import { RouteRxjsEnum } from '../enums/route.enum';

/** Пункты меню */
export const ROUTES_RXJS: MenuItem[] = [
  { link: RouteRxjsEnum.rxjs, title: RouteRxjsTitleEnum.rxjs },
  { link: RouteRxjsEnum.rxjsHoo, title: RouteRxjsTitleEnum.rxjsHoo },
  { link: RouteRxjsEnum.rxjsHot, title: RouteRxjsTitleEnum.rxjsHot },
];
