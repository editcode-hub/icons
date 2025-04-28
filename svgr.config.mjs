import { types } from "@babel/core";

export default {
  typescript: true,
  outDir: "./src/icons",
  replaceAttrValues: {
    "#323232": "currentColor",
  },
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      "removeXMLNS",
    ],
  },
  template: function svgrCustomTemplate(
    { interfaces, componentName, jsx },
    { tpl },
  ) {
    jsx.openingElement.name.name = "SvgIcon";
    jsx.closingElement.name.name = "SvgIcon";

    jsx.openingElement.attributes.push(
      types.jSXSpreadAttribute(types.identifier("props")),
    );
    const name = componentName.replace(/^Svg/, "Icon");

    return tpl`
      
      import { SvgIcon, type SvgIconProps } from '../ui';
      ${interfaces};
     

      const ${name} = (props: SvgIconProps) => (
        ${jsx}
      );
      
   
	export default ${name};
    `;
  },
};
