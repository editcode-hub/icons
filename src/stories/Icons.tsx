import * as icons from "../icons";

export default {
  title: "SvgIcon",
  component: icons,
};

const Icons = () => {
  return (
    <>
      {Object.values(icons).map((Icon, index) => (
        <Icon key={index} color="orange" height={48} width={48} />
      ))}
    </>
  );
};

export const Playground = Icons.bind({});
