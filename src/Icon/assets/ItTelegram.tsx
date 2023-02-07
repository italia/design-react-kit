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
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d='M10 0A10 10 0 1 1 0 10 10 10 0 0 1 10 0ZM4.53 9.89c2.91-1.27 4.86-2.1 5.83-2.51C13.14 6.23 13.71 6 14.09 6a.67.67 0 0 1 .39.12.4.4 0 0 1 .14.27 2.12 2.12 0 0 1 0 .39c-.16 1.58-.81 5.42-1.14 7.19-.14.75-.41 1-.68 1-.58.05-1-.39-1.59-.76-.88-.57-1.37-.93-2.23-1.5s-.34-1 .22-1.59c.17-.12 2.72-2.43 2.8-2.64a.19.19 0 0 0 0-.18.26.26 0 0 0-.21 0c-.09 0-1.49 1-4.22 2.79a1.83 1.83 0 0 1-1.08.4 7 7 0 0 1-1.56-.37c-.62-.2-1.12-.31-1.08-.65-.04-.2.2-.39.68-.58Z'
        transform='translate(2 2)'
        fillRule='evenodd'
      />
    </svg>
  );
};
