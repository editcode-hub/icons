import PropTypes from "prop-types";
const IconFolderCheckLight = ({
  color = "currentColor",
  size = "24",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      {...props}
    >
      <path stroke="currentColor" d="M4 16.5 6.5 19l5-5" />
      <path
        stroke="currentColor"
        d="M12.25 18.778h5.083c.934 0 1.4 0 1.757-.182.314-.16.569-.415.728-.728.182-.357.182-.823.182-1.757v-4.666c0-.934 0-1.4-.182-1.757a1.67 1.67 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182H13.86c-.377 0-.565 0-.739-.048a1.3 1.3 0 0 1-.428-.206c-.146-.105-.264-.252-.5-.547l-.94-1.176c-.236-.294-.353-.441-.5-.547a1.3 1.3 0 0 0-.428-.206C10.15 6 9.962 6 9.586 6h-2.42c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757V14.5"
      />
    </svg>
  );
};
IconFolderCheckLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IconFolderCheckLight;
