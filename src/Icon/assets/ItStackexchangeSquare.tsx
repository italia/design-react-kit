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
        clipRule='evenodd'
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM8.012 5h8.57c1.09 0 1.962.922 1.962 2.063v.67H6v-.67C6 5.923 6.906 5 8.012 5ZM6 8.455h12.544v2.582H6V8.456Zm0 3.337h12.544v2.583H6v-2.583Zm0 3.32v.672c0 1.14.906 2.062 2.012 2.062h5.367v2.734l2.65-2.734h.587c1.107 0 2.012-.922 2.012-2.062v-.671H6Z'
      />
    </svg>
  );
};
