import { SvgIcon, type SvgIconProps } from "../ui";
const IconFolderSearchLight = (props: SvgIconProps) => (
  <SvgIcon width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={16.5} cy={16.5} r={2.5} stroke="#222" />
    <path stroke="#222" strokeLinecap="round" d="M18.5 18.5 21 21" />
    <path
      stroke="#222"
      d="M20 14.5c0-.933 0-4.455-.182-4.812a1.67 1.67 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182H13.86c-.377 0-.565 0-.739-.048a1.3 1.3 0 0 1-.428-.206c-.146-.105-.264-.252-.5-.547l-.94-1.176c-.236-.294-.353-.441-.5-.547a1.3 1.3 0 0 0-.428-.206C10.15 6 9.962 6 9.586 6h-2.42c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757v7.444c0 .933 0 1.4.182 1.757.16.313.414.568.728.728.357.182.823.182 1.757.182h5.953"
    />
  </SvgIcon>
);
export default IconFolderSearchLight;
