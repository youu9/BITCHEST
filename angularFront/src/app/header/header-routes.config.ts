import {MenuType, RouteInfo} from './header.metadata';

/**
 * Route pour la generation auto des titre et lien dans la navbar
 *@see  HeaderComponent
 *@author Younes CHBADA
 *@version 1.0
 *  */

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'BITCHEST', menuType: MenuType.BRAND },
  //{ path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT},
  { path: 'wallet', title: 'Portefeuille', menuType: MenuType.LEFT},
  { path: 'transaction', title: 'Transaction', menuType: MenuType.LEFT}
];
