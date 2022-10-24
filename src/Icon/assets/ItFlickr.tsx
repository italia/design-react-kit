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
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Logo Flickr'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <circle cx={6.73} cy={12} r={4.73} />
      <circle cx={17.27} cy={12} r={4.73} />
    </svg>
  );
};
