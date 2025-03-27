import { r as reactExports } from "./index-N7T0HPyM.js";
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
