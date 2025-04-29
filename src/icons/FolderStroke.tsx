import { SvgIcon, type SvgIconProps } from "../ui";
const IconFolderStroke = (props: SvgIconProps) => (
  <SvgIcon width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#222"
        d="M4.5 8.667c0-.934 0-1.4.182-1.757.16-.314.414-.569.728-.728C5.767 6 6.233 6 7.167 6h2.419c.376 0 .564 0 .738.048.154.042.3.112.429.206.146.106.263.253.499.547l.94 1.176c.236.295.354.442.5.547q.195.142.428.206c.174.048.362.048.739.048h3.474c.934 0 1.4 0 1.757.182.314.16.569.415.728.728.182.357.182.823.182 1.757v4.666c0 .933 0 1.4-.182 1.757-.16.313-.414.568-.728.728-.357.182-.823.182-1.757.182H7.167c-.934 0-1.4 0-1.757-.182a1.67 1.67 0 0 1-.728-.728C4.5 17.51 4.5 17.045 4.5 16.11z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);
export default IconFolderStroke;
