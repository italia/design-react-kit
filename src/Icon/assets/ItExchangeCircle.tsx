import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
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
      <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm5.1-8.9.8.8-4.3 4.3c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4L9 14.7V17H8v-4h4v1H9.7l2.4 2.5h.8l4.2-4.4zm-6-4.6-4.2 4.4-.8-.8 4.3-4.3c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4L15 9.3V7h1v4h-4v-1h2.3l-2.4-2.5h-.8z' />
    </svg>
  );
};
