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
      <path d='M20 12.5h-7.5V20h-1v-7.5H4v-1h7.5V4h1v7.5H20z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
