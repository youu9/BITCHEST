import {MenuType, RouteInfo} from './header.metadata';

/**
 * Route pour la generation auto des titre et lien dans la navbar
 *@see  HeaderComponent
 *@author Younes CHBADA
 *@version 1.0
 *  */

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'BITCHEST', menuType: MenuType.BRAND },
  { path: '', title: 'Home', menuType: MenuType.LEFT},
  //{ path: 'notfound', title: 'notfound', menuType: MenuType.LEFT },
  { path: 'admin', title: 'admin', menuType: MenuType.LEFT },
  { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT},
];

