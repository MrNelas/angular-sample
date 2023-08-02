import { MenuItem } from 'src/app/models/interfaces/menu/menu-item.interface';

import { RouteAngularTitleEnum } from '../enums/route-title.enum';
import { RouteAngularEnum } from '../enums/route.enum';

/** Пункты меню */
export const ROUTES_ANGULAR: MenuItem[] = [
  { link: RouteAngularEnum.forms, title: RouteAngularTitleEnum.forms },
  { link: RouteAngularEnum.zone, title: RouteAngularTitleEnum.zone },
  { link: RouteAngularEnum.change, title: RouteAngularTitleEnum.change },
];
