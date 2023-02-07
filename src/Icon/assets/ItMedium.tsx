import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M5 7.6c0-.2 0-.4-.2-.6L3.1 5v-.3h5.2l4 8.8 3.5-8.8h5V5l-1.4 1.4c-.1.1-.2.2-.2.4v10.1c0 .2 0 .3.2.4l1.4 1.4v.3h-7v-.3l1.4-1.4c.1-.1.1-.2.1-.4V8.7L11.4 19h-.6L6.1 8.7v6.9c0 .3.1.6.3.8l1.9 2.3v.3H2.9v-.3l1.9-2.3c.2-.2.3-.5.2-.8v-8z' />
    </svg>
  );
};
