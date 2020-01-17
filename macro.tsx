const { createMacro } = require("babel-plugin-macros");

export default createMacro(removeDataCy);

function removeDataCy({ references, babel }) {
  const t = babel.types;
  references.default.forEach(referencePath => {
    if (
      process.env.NODE_ENV == "production" ||
      process.env.REACT_APP_CUSTOM_ENV == "prod" ||
      process.env.REACT_APP_CUSTOM_ENV == "production"
    ) {
      referencePath.parentPath.parentPath.remove();
    } else {
      const attribute = String(
        referencePath.parent.quasi.quasis[0].value.cooked
      ).split("=");
      const [attributeName, attributeValue] = attribute;
      const parsedAttributeValue = babel.parse(attributeValue).program
        .directives[0].value.value;

      referencePath.parentPath.parentPath.replaceWith(
        t.jsxAttribute(
          t.jsxIdentifier(attributeName),
          t.stringLiteral(parsedAttributeValue)
        )
      );
    }
  });
}
