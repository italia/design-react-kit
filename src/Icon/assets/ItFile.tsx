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
      <path d='M14.7 2H6.5A1.5 1.5 0 005 3.5v17A1.5 1.5 0 006.5 22h11a1.5 1.5 0 001.5-1.5V6.3zm.3 1.7L17.3 6h-1.8a.5.5 0 01-.5-.5zM17.5 21h-11a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5H14v2.5A1.5 1.5 0 0015.5 7H18v13.5a.5.5 0 01-.5.5zM8 9h8v1H8zm0 2h8v1H8zm0 2h4v1H8z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
