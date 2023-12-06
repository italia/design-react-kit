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
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule='evenodd'
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM4 12a8 8 0 1 1 5.631 7.643c.326-.531.814-1.402.995-2.097l.498-1.902c.26.498 1.023.919 1.834.919 2.412 0 4.15-2.219 4.15-4.976 0-2.643-2.156-4.62-4.93-4.62-3.453 0-5.287 2.317-5.287 4.84 0 1.174.625 2.635 1.624 3.1.152.07.233.04.268-.107l.081-.332.14-.575a.24.24 0 0 0-.055-.23c-.33-.4-.595-1.138-.595-1.826 0-1.764 1.336-3.471 3.612-3.471 1.966 0 3.342 1.339 3.342 3.254 0 2.165-1.093 3.664-2.515 3.664-.785 0-1.373-.65-1.185-1.446.082-.344.191-.698.297-1.042.188-.607.366-1.183.366-1.621 0-.615-.33-1.127-1.012-1.127-.803 0-1.448.83-1.448 1.943 0 .708.24 1.187.24 1.187s-.793 3.352-.939 3.977c-.16.69-.097 1.664-.027 2.297A8.005 8.005 0 0 1 4 12Z'
      />
    </svg>
  );
};
