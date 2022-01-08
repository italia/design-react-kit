import { createContext, useContext } from 'react';

export const SLIM = 'slim';
export const CENTER = 'center';
export const NAVBAR = 'navbar';

export const HeaderContext = createContext<{
  type?: typeof SLIM | typeof CENTER | typeof NAVBAR;
}>({});

export const useHeaderContext = () => {
  const { type } = useContext(HeaderContext);
  return type;
};
