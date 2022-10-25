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
      <path d='M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3Zm.5 16.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V8h18ZM21 7H3V4.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5Z' />
      <path d='M12 16h5v1h-5zM12 14.06l-5.1 3.69v-1.24l3.39-2.45-3.39-2.45v-1.24l5.1 3.69zM10.29 14.06 6.9 16.51M10.29 14.06 6.9 11.61' />
    </svg>
  );
};
