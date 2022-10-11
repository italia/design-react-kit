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
      <path d='M12 9.2v5.6a1 1 0 01-1.7.7L6.8 12l3.5-3.5a1 1 0 011.7.7z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
