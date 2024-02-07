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
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM15.016 13.07a.667.667 0 1 0 1.334-.002.667.667 0 0 0-1.334.002Zm-7.364 0a.667.667 0 1 0 1.334-.002.667.667 0 0 0-1.334.002Zm9.6-5.654-1.331 2.307c2.286 1.243 3.85 3.558 4.079 6.293H4c.229-2.735 1.793-5.05 4.079-6.293L6.747 7.415a.277.277 0 0 1 .48-.277l1.348 2.336A8.22 8.22 0 0 1 12 8.74a8.22 8.22 0 0 1 3.425.733l1.348-2.336a.277.277 0 0 1 .48.277Z'
      />
    </svg>
  );
};
