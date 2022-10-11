import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M17.1 8l3.3-5H5V2H4v20h1v-9h15.4l-3.3-5zM5 4h13.6l-2.7 4 2.7 4H5V4z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
