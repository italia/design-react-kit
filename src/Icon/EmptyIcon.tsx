import React, { FC, SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const EmptyIcon: FC<SVGProps<SVGSVGElement> & SVGRProps> = ({ title, titleId, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='none' d='M0 0h24v24H0z' />
  </svg>
);
