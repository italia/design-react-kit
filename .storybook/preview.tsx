import { Preview } from "@storybook/react";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../assets/css/fonts.css";
import "../assets/css/storybook-fixes.css";
import theme from "./theme";

/* const customStyle = {
    position: "relative",
    boxSizing: "border-box",
    margin: "0",
    padding: "48px 32px",
    textAlign: "initial",
} as CSSProperties; */

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
