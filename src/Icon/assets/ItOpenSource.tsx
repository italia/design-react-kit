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
      width={24}
      height={24}
      viewBox='0 0 24 24'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M12 2a10 10 0 0 0-3.18 19.48l1.75-5.75.29-1A3 3 0 0 1 9 12a3 3 0 0 1 6 0 3 3 0 0 1-1.87 2.76l.3 1 1.75 5.75A10 10 0 0 0 12 2Zm3.82 18.15-1.49-4.91a2.15 2.15 0 0 0 .23-.18 1.21 1.21 0 0 0 .24-.21 1.8 1.8 0 0 0 .19-.2 3.79 3.79 0 0 0 .72-1.15l.11-.31a2.5 2.5 0 0 0 .07-.26 2.67 2.67 0 0 0 .08-.48A3.4 3.4 0 0 0 16 12a4 4 0 0 0-8 0v.5a3.58 3.58 0 0 0 .09.45 3 3 0 0 0 .14.45 4.16 4.16 0 0 0 .43.84c.09.13.19.25.29.37a2.57 2.57 0 0 0 .33.33 3.94 3.94 0 0 0 .36.3l-1.46 4.91a9 9 0 1 1 7.64 0Z' />
    </svg>
  );
};
