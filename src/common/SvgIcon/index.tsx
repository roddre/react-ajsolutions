import { SvgIconProps } from "../types";

export const SvgIcon = ({
  src,
  width,
  height,
  alt = "",
  decorative = false,
}: SvgIconProps) => (
  <img
    src={`/img/svg/${src}`}
    alt={decorative ? "" : alt}
    aria-hidden={decorative}
    width={width}
    height={height}
  />
);
