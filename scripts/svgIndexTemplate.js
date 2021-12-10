const path = require('path');

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

function defaultIndexTemplate(filePaths) {
  const iconsMap = [];
  const switchCases = [];
  for (const filePath of filePaths) {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    const kebabName = kebabCase(exportName);
    iconsMap.push(kebabName);
    switchCases.push(`case '${kebabName}': {
      return import('./${exportName}');
    }`);
  }
  const file = `
const iconList: Record<string, boolean> = {
  ${iconsMap.map((name) => `  "${name}": true,`).join('\n')}
};
export type IconName = keyof typeof iconList;

export const loadIcon = (
  name: IconName
) => {
  switch (name) {
${switchCases.join('\n')}
    default:
      throw Error('It should not land here')
  }
};

export function isBundledIcon(name: string): name is IconName {
  return name in iconList;
}

export const allIcons = Object.keys(iconList)
  `;
  return file;
}
module.exports = defaultIndexTemplate;
