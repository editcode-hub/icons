import PropTypes from "prop-types";
const IconFolderAdd = ({ color = "currentColor", size = "24", ...props }) => {
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
      <path
        stroke="currentColor"
        d="M20 14.5c0-.933 0-4.455-.182-4.812a1.67 1.67 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182H13.86c-.377 0-.565 0-.739-.048a1.3 1.3 0 0 1-.428-.206c-.146-.105-.264-.252-.5-.547l-.94-1.176c-.236-.294-.353-.441-.5-.547a1.3 1.3 0 0 0-.428-.206C10.15 6 9.962 6 9.586 6h-2.42c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757v7.444c0 .933 0 1.4.182 1.757.16.313.414.568.728.728.357.182.823.182 1.757.182H16M17.5 18.78H20m0 0h2.5m-2.5 0v2.5m0-2.5v-2.5"
      />
    </svg>
  );
};
IconFolderAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IconFolderAdd;
