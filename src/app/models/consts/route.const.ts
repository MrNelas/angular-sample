import { RouteTitleEnum } from '../enums/route/route-title.enum';
import { RouteEnum } from '../enums/route/route.enum';
import { MenuItem } from '../interfaces/menu/menu-item.interface';

export const ROUTES_APP: MenuItem[] = [
  {
    link: RouteEnum.main,
    title: RouteTitleEnum.main,
  },
  {
    link: RouteEnum.forms,
    title: RouteTitleEnum.forms,
  },
  {
    link: RouteEnum.rxjs,
    title: RouteTitleEnum.rxjs,
  },
  {
    link: RouteEnum.rxjsHoo,
    title: RouteTitleEnum.rxjsHoo,
  },
  {
    link: RouteEnum.zone,
    title: RouteTitleEnum.zone,
  },
  {
    link: RouteEnum.tsUtils,
    title: RouteTitleEnum.tsUtils,
  },
  {
    link: RouteEnum.tsGen,
    title: RouteTitleEnum.tsGen,
  },
  {
    link: RouteEnum.javascript,
    title: RouteTitleEnum.javascript,
  },
];
