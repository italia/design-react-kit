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
      <path d='M12 4.14 18.94 8 12 11.86 5.06 8 12 4.14M12 3 3 8l9 5 9-5-9-5ZM21 14.72l-9 5.01-9-5.01 1-.54 8 4.44 7.97-4.47 1.03.57z' />
      <path d='m21 11.51-9 5-9-5 1-.55 8 4.44 7.97-4.46 1.03.57z' />
    </svg>
  );
};
