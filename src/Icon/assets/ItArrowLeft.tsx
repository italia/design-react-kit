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
      <path d='M21 11.5H5.5l5.3-5.4-.7-.7L3.6 12l6.5 6.6.7-.7-5.3-5.4H21zM5 12z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
