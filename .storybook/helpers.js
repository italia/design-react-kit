import path from 'path';

export const findTheReadme = component => {
    try {
        return require(`raw-loader!design-web-toolkit/src/components/${component}/README.md`);
    } catch (e) {
        return '';
    }
};
