import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM19.511 4l-5.584 6.491L20 19.33h-4.467l-4.09-5.952-5.12 5.952H5l5.856-6.807L5 4h4.467l3.872 5.636L18.188 4h1.323Zm-7.99 7.75.594.848 4.041 5.78h2.033l-4.953-7.083-.593-.849-3.81-5.45H6.8l4.721 6.753Z'
      />
    </svg>
  );
};
