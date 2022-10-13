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
      <path d='M14 22h-1v-8.65L20.05 3H4l7 10.35V22h-1v-8.35L2.05 2H22l-8 11.65z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
