import React from "react";
import { withDocs as withDefaults } from "storybook-readme";

export const StoryPreview = props => (
  <div
    style={{
      position: "relative",
      boxSizing: "border-box",
      margin: "16px 0 16px 0",
      padding: "50px 35px",
      border: "1px dashed #e5e5e5",
      backgroundColor: "#ffffff",
      transition: "background-color 0.2s",
      textAlign: "initial"
    }}
  >
    {props.children}
  </div>
);

export const FooterDocs = props => (
  <div
    style={{
      borderTop: "1px dashed #e5e5e5",
      paddingTop: "16px"
    }}
  >
    {props.children}
  </div>
);

export const withDocs = withDefaults({
  PreviewComponent: StoryPreview,
  FooterComponent: FooterDocs
});

export const requireContextPolyfill = () => {
  if (process.env.NODE_ENV === "test") {
    const fs = require("fs");
    const path = require("path");

    require.context = (
      base = ".",
      scanSubDirectories = false,
      regularExpression = /\.js$/
    ) => {
      const files = {};

      function readDirectory(directory) {
        fs.readdirSync(directory).forEach(file => {
          const fullPath = path.resolve(directory, file);

          if (fs.statSync(fullPath).isDirectory()) {
            if (scanSubDirectories) readDirectory(fullPath);

            return;
          }

          if (!regularExpression.test(fullPath)) return;

          files[fullPath] = true;
        });
      }

      readDirectory(path.resolve(__dirname, base));

      function Module(file) {
        return require(file);
      }

      Module.keys = () => Object.keys(files);

      return Module;
    };

    return require.context;
  }
};

export const envIs = env => {
  return process.env.NODE_ENV === env;
};
