// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  ddclass: string;
  extralink: boolean;
  submenu: RouteInfo[];
  image?: string;
}
