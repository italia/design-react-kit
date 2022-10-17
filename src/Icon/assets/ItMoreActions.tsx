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
      <path d='M6 10a2 2 0 102 2 2 2 0 00-2-2zm0 3a1 1 0 010-2 1 1 0 010 2zm6-3a2 2 0 102 2 2 2 0 00-2-2zm0 3a1 1 0 111-1 .9.9 0 01-1 1zm6-3a2 2 0 102 2 2 2 0 00-2-2zm0 3a1 1 0 111-1 .9.9 0 01-1 1z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
