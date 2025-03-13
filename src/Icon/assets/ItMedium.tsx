import * as React from 'react';
import { SVGProps } from 'react';
import { SVGRProps } from '.';
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
      <path d='M13.281 12.625c0 3.107-2.525 5.625-5.64 5.625C4.524 18.25 2 15.732 2 12.625S4.525 7 7.64 7c3.116 0 5.641 2.518 5.641 5.625Zm6.188 0c0 2.924-1.263 5.295-2.82 5.295-1.558 0-2.82-2.371-2.82-5.295s1.262-5.295 2.82-5.295c1.557 0 2.82 2.371 2.82 5.295Zm2.531 0c0 2.62-.444 4.744-.992 4.744s-.992-2.125-.992-4.744c0-2.62.444-4.744.992-4.744S22 10.005 22 12.625Z' />
    </svg>
  );
};
