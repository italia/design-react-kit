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
      <path d='M15.7 2H7.5C6.7 2 6 2.7 6 3.5V4h-.5C4.7 4 4 4.7 4 5.5v15c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V20h.5c.8 0 1.5-.7 1.5-1.5V6.3L15.7 2zm.3 1.7L18.3 6h-1.8c-.3 0-.5-.2-.5-.5V3.7zm1 16.8c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5v-15c0-.3.2-.5.5-.5H6v13.5c0 .8.7 1.5 1.5 1.5H17v.5zm1.5-1.5h-11c-.3 0-.5-.2-.5-.5v-15c0-.3.2-.5.5-.5H15v2.5c0 .8.7 1.5 1.5 1.5H19v11.5c0 .3-.2.5-.5.5zM9 9h8v1H9V9zm0 2h8v1H9v-1zm0 2h4v1H9v-1z' />
    </svg>
  );
};
