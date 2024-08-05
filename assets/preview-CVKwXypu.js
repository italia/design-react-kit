import { c as create } from "./index-CClgydmT.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
const theme = create({
  base: "light",
  colorPrimary: "#00C5CA",
  colorSecondary: "#0066CC",
  // UI
  appBg: "#F3F3F5",
  appContentBg: "#FFF",
  appBorderColor: "grey",
  appBorderRadius: 4,
  brandTitle: "Design React Kit",
  brandUrl: "https://github.com/italia/design-react-kit"
});
const preview = {
  parameters: {
    docs: {
      theme,
      toc: {
        headingSelector: "h1, h2, h3",
        title: "Indice"
      },
      source: {
        type: "dynamic"
      }
    },
    options: {
      storySort: {
        order: [
          "Documentazione",
          ["Welcome", "Organizzare gli spazi", "Organizzare i contenuti", "Menu di navigazione", "Componenti", "Form", "Utilities"],
          "*"
        ]
      }
    }
  }
};
export {
  preview as default
};