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
      <g clipPath='url(#a)'>
        <path
          clipRule='evenodd'
          d='M16.7 7.7 21 12l-4.3 4.3-.7-.7 3-3.1H9.8v-1h9.3L16 8.4l.7-.7ZM4.5 20H12v1H4.5A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3H12v1H4.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
