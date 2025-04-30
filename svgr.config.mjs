import { types } from "@babel/core";

export default {
  typescript: true,
  outDir: "./src/icons",
  replaceAttrValues: {
    "#323232": "currentColor",
    "#222": "currentColor",
    "#000": "currentColor",
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
  template: function svgrCustomTemplate({ componentName, jsx }, { tpl }) {
    const name = componentName.replace(/^Svg/, "Icon");
    // Очищаем старые атрибуты svg (по желанию)
    jsx.openingElement.attributes = [];

    // Добавляем необходимые атрибуты вручную
    jsx.openingElement.attributes.push(
      types.jsxAttribute(
        types.jsxIdentifier("xmlns"),
        types.stringLiteral("http://www.w3.org/2000/svg"),
      ),
      types.jsxAttribute(
        types.jsxIdentifier("width"),
        types.jsxExpressionContainer(types.identifier("size")),
      ),
      types.jsxAttribute(
        types.jsxIdentifier("height"),
        types.jsxExpressionContainer(types.identifier("size")),
      ),
      types.jsxAttribute(
        types.jsxIdentifier("viewBox"),
        types.stringLiteral("0 0 24 24"),
      ),
      types.jsxAttribute(
        types.jsxIdentifier("fill"),
        types.stringLiteral("none"),
      ),
      types.jsxAttribute(
        types.jsxIdentifier("color"),
        types.jsxExpressionContainer(types.identifier("color")),
      ),

      types.jSXSpreadAttribute(types.identifier("props")),
    );
    return tpl`
      
    import PropTypes from 'prop-types';
    
     

      const ${name} = ({ color = 'currentColor', size = '24', ...props }) => {
          return ${jsx};
      }
        
      
      ${name}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };
   
	export default ${name};
    `;
  },
};
