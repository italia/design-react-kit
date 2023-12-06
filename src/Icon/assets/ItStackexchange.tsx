import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M4.48 11.5h14.96v3.08H4.48V11.5ZM4.48 7.52h14.96v3.08H4.48V7.52ZM17.1 3.4H6.88c-1.32 0-2.4 1.1-2.4 2.46v.8h14.96v-.8c0-1.36-1.04-2.46-2.34-2.46ZM4.48 15.46v.8c0 1.36 1.08 2.46 2.4 2.46h6.4v3.26l3.16-3.26h.7c1.32 0 2.4-1.1 2.4-2.46v-.8H4.48Z' />
    </svg>
  );
};
