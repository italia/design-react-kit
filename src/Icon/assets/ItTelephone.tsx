import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Telephone'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M5 3h.18M20 11.56A7.59 7.59 0 0 0 12.48 4h-.06a.49.49 0 0 0-.49.48.5.5 0 0 0 .49.51A6.61 6.61 0 0 1 19 11.62a.51.51 0 0 0 .54.46.49.49 0 0 0 .45-.46s.01-.04.01-.06Z' />
      <path d='M16.93 11.68a4.5 4.5 0 0 0-4.48-4.48.51.51 0 0 0 0 1 3.5 3.5 0 0 1 3.49 3.49.5.5 0 0 0 .5.5.51.51 0 0 0 .5-.51ZM15.68 21.19a13.32 13.32 0 0 1-12.8-13.1.92.92 0 0 1 .62-.88c1.74-.56 4-1 4.7.06a7.39 7.39 0 0 1 .85 2.91v.21a1.48 1.48 0 0 1-.7 1.68.81.81 0 0 0-.49.71 12.55 12.55 0 0 0 3.38 3.51.88.88 0 0 0 .48-.56c.09-.53.58-1 1.7-.85h.21a7 7 0 0 1 2.85.87c1 .72.62 3 .09 4.72a1 1 0 0 1-.89.72ZM6.55 7.52a9.5 9.5 0 0 0-2.78.55 12.41 12.41 0 0 0 11.91 12.22c.73-2.26.66-3.54.31-3.78a6.66 6.66 0 0 0-2.46-.72h-.22c-.32 0-.65 0-.68.12a1.9 1.9 0 0 1-1.27 1.34l-.21.07-.15-.15a13.44 13.44 0 0 1-3.9-4L7 13a1.68 1.68 0 0 1 1-1.7c.12-.07.33-.18.25-.75v-.22a6.84 6.84 0 0 0-.7-2.54c-.2-.18-.55-.27-1-.27Z' />
    </svg>
  );
};
