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
      <path d='M12 18a1 1 0 11-1 1 .9.9 0 011-1m0-1a2 2 0 102 2 2 2 0 00-2-2zm0-6a1 1 0 11-1 1 .9.9 0 011-1m0-1a2 2 0 102 2 2 2 0 00-2-2zm0-6a.9.9 0 011 1 1 1 0 01-2 0 .9.9 0 011-1m0-1a2 2 0 102 2 2 2 0 00-2-2z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
