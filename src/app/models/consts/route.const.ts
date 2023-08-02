import { RouteTitleEnum } from '../enums/route/route-title.enum';
import { RouteEnum } from '../enums/route/route.enum';
import { MenuItem } from '../interfaces/menu/menu-item.interface';

/** Пункты меню */
export const ROUTES_APP: MenuItem[] = [
  {
    link: RouteEnum.main,
    title: RouteTitleEnum.main,
  },
  {
    link: RouteEnum.javascript,
    title: RouteTitleEnum.javascript,
  },
  {
    link: RouteEnum.angular,
    title: RouteTitleEnum.angular,
  },
  {
    link: RouteEnum.rxjs,
    title: RouteTitleEnum.rxjs,
  },
  {
    link: RouteEnum.typescript,
    title: RouteTitleEnum.typescript,
  },
];
