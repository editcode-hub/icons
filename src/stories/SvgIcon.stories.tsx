import React from "react";
import * as icons from "../icons";

export default {
  title: "Icon",
  component: icons,
};

const Template = () => {
  return (
    <>
      {Object.values(icons).map((Icon, index) => (
        <Icon key={index} height={48} width={48} />
      ))}
    </>
  );
};

export const Playground = Template.bind({});
