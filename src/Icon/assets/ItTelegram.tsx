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
      <path
        d='M12 2A10 10 0 112 12 10 10 0 0112 2zm-5.47 9.89c2.91-1.27 4.86-2.1 5.83-2.51C15.14 8.23 15.71 8 16.09 8a.67.67 0 01.39.12.4.4 0 01.14.27 2.12 2.12 0 010 .39c-.16 1.58-.81 5.42-1.14 7.19-.14.75-.41 1-.68 1-.58.05-1-.39-1.59-.76-.88-.57-1.37-.93-2.23-1.5s-.34-1 .22-1.59c.17-.12 2.72-2.43 2.8-2.64a.19.19 0 000-.18.26.26 0 00-.21 0c-.09 0-1.49 1-4.22 2.79a1.83 1.83 0 01-1.08.4 7 7 0 01-1.56-.37c-.62-.2-1.12-.31-1.08-.65-.04-.2.2-.39.68-.58z'
        fillRule='evenodd'
      />
    </svg>
  );
};
