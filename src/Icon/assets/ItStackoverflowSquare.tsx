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
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286Zm11.427 15.812H7.857v-1.428h7.137v1.428ZM13.108 4.852 14.254 4l4.26 5.727-1.146.852-4.26-5.727Zm3.09 7.092-5.485-4.567.914-1.097 5.484 4.567-.913 1.097Zm-.805 1.62-6.47-3.013.602-1.294 6.47 3.013-.602 1.294Zm-.41 1.8-6.985-1.469.294-1.397 6.985 1.469-.293 1.396Zm1.43-1.075v4.283H6.427V14.29H5V20h12.84v-5.71h-1.428Z'
      />
    </svg>
  );
};
