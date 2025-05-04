import PropTypes from "prop-types";
const IconTelegramBold = ({
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
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0m5.564 8.163c-.178 1.897-.962 6.503-1.36 8.627-.169.9-.498 1.2-.817 1.23-.697.062-1.224-.46-1.902-.905-1.054-.692-1.654-1.123-2.675-1.8-1.186-.78-.417-1.21.256-1.912.18-.184 3.247-2.976 3.305-3.227.01-.034.014-.15-.058-.213s-.174-.039-.247-.024q-.159.034-5.061 3.343-.716.494-1.302.48c-.43-.01-1.253-.243-1.868-.441-.75-.242-1.35-.373-1.296-.789q.039-.324.895-.663a617 617 0 0 1 6.997-3.014c3.334-1.384 4.025-1.626 4.476-1.636.101 0 .319.025.464.14a.5.5 0 0 1 .17.325q.04.238.023.479"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconTelegramBold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IconTelegramBold;
