import React, { type ReactNode } from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  children?: ReactNode;
  color?: string;
  size?: number | string;
  height?: number | string;
  width?: number | string;
}

const colors = {
  error: "#ef5350",
  info: "#03a9f4",
  warning: "#ff9800",
};

const sizes = {
  small: 20,
  large: 35,
};

const SvgIcon: React.FC<SvgIconProps> = ({
  children,
  color = "info",
  size = "small",
  height,
  width,
  ...props
}) => {
  const computedColor = colors[color as keyof typeof colors] || color;
  const computedHeight = sizes[size as keyof typeof sizes] || height;
  const computedWidth = sizes[size as keyof typeof sizes] || width;

  return (
    <svg
      {...props}
      color={computedColor}
      height={computedHeight}
      width={computedWidth}
    >
      {children}
    </svg>
  );
};

export { SvgIcon, type SvgIconProps };
