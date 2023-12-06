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
      <path d='M13.125 3h2.228c.161.804.608 1.82 1.389 2.826.765.986 1.78 1.674 3.133 1.674v2.25c-1.973 0-3.455-.915-4.5-2.057v7.682A5.625 5.625 0 1 1 9.75 9.75V12a3.375 3.375 0 1 0 3.375 3.375V3Z' />
    </svg>
  );
};
