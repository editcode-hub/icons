import * as icons from "../icons";
import { SvgIcon, type SvgIconProps } from "../ui";

export default {
  title: "SvgIcon",
  component: SvgIcon,
};

const Icons = () => (
  <>
    {Object.values(icons).map((Icon, index) => (
      <Icon key={index} color="orange" height={48} width={48} />
    ))}
  </>
);

export const Playground = Icons.bind({});
