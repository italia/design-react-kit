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
