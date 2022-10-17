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
      <path d='M3 21h18v1H3zm0-1h18v-1H3zM22 9H2l10-7zM5.2 8h13.6L12 3.2zM6 18v-8H5v8zm4 0v-8H9v8zm5 0v-8h-1v8zm4 0v-8h-1v8z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
