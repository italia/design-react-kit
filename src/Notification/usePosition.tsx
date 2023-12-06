import { createContext, useContext } from 'react';
import { NotificationCommonProps } from './types';

export const PositionContext = createContext<NotificationCommonProps['fix']>(undefined);

export function usePosition() {
  const context = useContext(PositionContext);
  return context;
}
