import React, { CSSProperties } from 'react';
import { cssTransition, useToastContainer } from 'react-toastify';
import { Notification } from './Notification';
import { getBorderStyleFix } from './NotificationContent';
import { NotificationCommonProps } from './types';
import { PositionContext } from './usePosition';

const KitTransition = cssTransition({
  enter: `d-block`,
  exit: `d-none`,
  appendPosition: false
});

export interface NotificationManagerProps extends NotificationCommonProps {
  /* Stili inline da applicare al container */
  style?: CSSProperties;
}

export const NotificationManager = (props: NotificationManagerProps) => {
  const customStyle: CSSProperties = {
    ...props.style,
    ...getBorderStyleFix(props.fix)
  };

  const hookProps = {
    autoClose: props.duration ?? 6000,
    closeOnClick: props.closeOnClick ?? true,
    hideProgressBar: true,
    transition: KitTransition,
    rtl: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    newestOnTop: false, // TODO: sort this out
    draggable: false,
    role: 'alert',
    style: customStyle,
    enableMultiContainer: props.containerId != null // enable multi container when an explicit id is passed
  };

  const { getToastToRender, containerRef, isToastActive } = useToastContainer(hookProps);

  const { containerId, style, fix } = props;

  return (
    <PositionContext.Provider value={fix}>
      <div ref={containerRef} id={containerId as string} style={style}>
        {getToastToRender((_, toastList) => {
          return toastList.map(({ content, props: toastProps }) => {
            return (
              <Notification
                {...toastProps}
                isIn={isToastActive(toastProps.toastId)}
                key={`notification-${toastProps.key}`}
              >
                {content}
              </Notification>
            );
          });
        })}
      </div>
    </PositionContext.Provider>
  );
};
