import { HugeiconsProps } from 'hugeicons-react';
// import { Icon } from 'iconsax-react';
import { ComponentType, CSSProperties, FC, ReactNode, RefAttributes } from 'react';

export interface ICommonProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export type IconType =
    // | Icon
    // | LucideIcon
    | FC<Omit<HugeiconsProps, 'ref'> & RefAttributes<SVGSVGElement>>
    | ComponentType<{
          className?: string;
          size?: number;
      }>;

export type WithProps = ICommonProps;
