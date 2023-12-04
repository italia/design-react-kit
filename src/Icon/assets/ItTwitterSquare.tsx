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
      <path d='M19.5 22h-15C3.1 22 2 20.9 2 19.5v-15C2 3.1 3.1 2 4.5 2h15C20.9 2 22 3.1 22 4.5v15c0 1.4-1.1 2.5-2.5 2.5zm-9.8-4.9c1.9 0 3.8-.7 5.2-2.1S17 11.7 17 9.8v-.3c.5-.4.9-.8 1.3-1.3-.5.2-1 .3-1.5.4.5-.3.9-.8 1.1-1.4-.5.3-1.1.5-1.6.6-.5-.5-1.2-.8-1.9-.8-1.4 0-2.6 1.2-2.6 2.6 0 .2 0 .4.1.6-2-.2-4-1.2-5.3-2.8-.7 1.2-.3 2.7.8 3.4-.4 0-.8-.1-1.2-.3 0 1.2.9 2.3 2.1 2.5-.2.1-.4.1-.7.1h-.5c.3 1 1.3 1.8 2.4 1.8-.9.7-2 1.1-3.2 1.2h-.6c1.2.6 2.6 1 4 1z' />
    </svg>
  );
};
