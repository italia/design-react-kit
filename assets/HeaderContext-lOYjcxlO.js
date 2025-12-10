import { r as reactExports } from "./iframe-BhIAR_-T.js";
const SLIM = "slim";
const CENTER = "center";
const NAVBAR = "navbar";
const HeaderContext = /* @__PURE__ */ reactExports.createContext({});
const useHeaderContext = () => {
  const { type } = reactExports.useContext(HeaderContext);
  return type;
};
export {
  CENTER as C,
  HeaderContext as H,
  NAVBAR as N,
  SLIM as S,
  useHeaderContext as u
};
