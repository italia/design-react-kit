function defaultTemplate(
  { imports, componentName, props, jsx, interfaces },
  { tpl }
) {
  return tpl`${imports}
    ${interfaces}
  export const component = (${props}) => {
    return ${jsx};
  };
    `;
}
module.exports = defaultTemplate;
