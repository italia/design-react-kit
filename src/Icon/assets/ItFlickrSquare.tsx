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
        <title id={titleId}>{'Logo Flickr Square'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M20 4a3.26 3.26 0 0 0-2.38-1H6.38A3.26 3.26 0 0 0 4 4a3.26 3.26 0 0 0-1 2.37v11.25A3.26 3.26 0 0 0 4 20a3.26 3.26 0 0 0 2.39 1h11.24A3.38 3.38 0 0 0 21 17.62V6.37A3.26 3.26 0 0 0 20 4Zm-9.56 9.77a2.5 2.5 0 0 1-3.51 0 2.49 2.49 0 0 1 0-3.52 2.5 2.5 0 0 1 3.51 0 2.49 2.49 0 0 1 0 3.52Zm6.61 0A2.49 2.49 0 0 1 12.82 12a2.49 2.49 0 0 1 4.24-1.76 2.49 2.49 0 0 1 0 3.52l-.01.01Z' />
    </svg>
  );
};
