import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "bootstrap-italia/dist/css/italia-icon-font.css";
import "../assets/docs.min.css";

// addon-options
// https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
  // name to display in the top left corner
  name: "design-react-kit",
  // URL for name in top left corner to link to
  url: "https://github.com/italia/design-react-kit/"
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
