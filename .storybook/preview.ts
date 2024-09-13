import { Preview } from "@storybook/react";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../assets/css/storybook-fixes.css";
import "../assets/docs/scss/bi-fonts.scss";
import "../assets/docs/scss/docs.scss";

import theme from "./theme";

const preview: Preview = {
    parameters: {
        docs: {
            theme: theme,
            toc: {
                headingSelector: "h1, h2, h3",
                title: "Indice",
            },
            source: {
                type: "dynamic",
            },
        },
        options: {
            storySort: {
                order: [
                    "Documentazione",
                    ["Welcome", "Organizzare gli spazi", "Organizzare i contenuti", "Menu di navigazione", "Componenti", "Form", "Utilities"],
                    "*",
                ],
            },
        },
    },
};

export default preview;
