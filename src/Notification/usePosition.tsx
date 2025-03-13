import { createContext, useContext } from 'react';
import { NotificationCommonProps } from './types';

export const PositionContext = /* @__PURE__ */ createContext<NotificationCommonProps['fix']>(undefined);

export function usePosition() {
  const context = useContext(PositionContext);
  return context;
}
