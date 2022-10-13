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
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M21.56 7.2a2.5 2.5 0 00-1.76-1.77C18.24 5 12 5 12 5s-6.24 0-7.8.42A2.5 2.5 0 002.44 7.2 25.72 25.72 0 002 12c-.01 1.61.13 3.217.42 4.8a2.5 2.5 0 001.78 1.77C5.76 19 12 19 12 19s6.24 0 7.8-.42a2.5 2.5 0 001.76-1.77A25.72 25.72 0 0022 12a25.72 25.72 0 00-.44-4.8zM10 15V9l5.19 3L10 15z' />
    </svg>
  );
};
