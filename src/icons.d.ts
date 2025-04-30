/// <reference types="react" />

import { ComponentType, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;

export const FolderStroke: Icon;
export const FolderAdd: Icon;
export const FolderDel: Icon;
export const FolderCheckLight: Icon;
export const FolderSearchLight: Icon;
