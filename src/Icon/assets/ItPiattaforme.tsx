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
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M12 4.14L18.94 8 12 11.86 5.06 8 12 4.14M12 3L3 8l9 5 9-5-9-5zM21 14.72l-9 5.01-9-5.01 1-.54 8 4.44 7.97-4.47 1.03.57z' />
      <path d='M21 11.51l-9 5-9-5 1-.55 8 4.44 7.97-4.46 1.03.57z' />
    </svg>
  );
};
