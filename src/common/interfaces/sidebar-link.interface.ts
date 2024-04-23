import { IconType } from '@/@types/common.type';

export interface ISidebarLink {
  name: string;
  route?: string;
  key: string;
  icon?: IconType;
  children?: ISidebarLink[];
}

export interface ISidebarItem {
  title?: string;
  key: string;
  links?: ISidebarLink[];
  isDivider?: boolean;
}

export default ISidebarItem;
