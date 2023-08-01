import { RouteTitleEnum } from '../enums/route/route-title.enum';
import { RouteEnum } from '../enums/route/route.enum';
import { MenuItem } from '../interfaces/menu/menu-item.interface';

/** Пункты меню */
export const ROUTES_APP: MenuItem[] = [
  {
    link: RouteEnum.main,
    title: RouteTitleEnum.main,
    main: true,
  },
  {
    link: RouteEnum.javascript,
    title: RouteTitleEnum.javascript,
    main: true,
  },
  {
    title: RouteTitleEnum.angular,
    main: false,
    subItems: [
      { link: RouteEnum.forms, title: RouteTitleEnum.forms },
      { link: RouteEnum.zone, title: RouteTitleEnum.zone },
    ],
  },
  {
    title: RouteTitleEnum.rxjs,
    main: false,
    subItems: [
      { link: RouteEnum.rxjs, title: RouteTitleEnum.rxjs },
      { link: RouteEnum.rxjsHoo, title: RouteTitleEnum.rxjsHoo },
    ],
  },
  {
    title: RouteTitleEnum.typescript,
    main: false,
    subItems: [
      { link: RouteEnum.tsGen, title: RouteTitleEnum.tsGen },
      { link: RouteEnum.tsUtils, title: RouteTitleEnum.tsUtils },
    ],
  },
];
