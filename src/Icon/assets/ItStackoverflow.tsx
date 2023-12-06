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
      <path d='M16.412 18.572V14.29h1.428V20H5v-5.71h1.428v4.282h9.984Z' />
      <path d='M7.857 17.145h7.137v-1.428H7.857v1.428ZM14.254 4l-1.146.852 4.26 5.727 1.146-.852L14.254 4Zm-3.54 3.377 5.484 4.567.913-1.097-5.484-4.567-.914 1.097ZM8.922 10.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294Zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397Z' />
    </svg>
  );
};
