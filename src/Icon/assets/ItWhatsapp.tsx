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
        <title id={titleId}>{'Logo Whatsapp'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M19.09 4.63a10 10 0 0 0-15.68 12L2 21.8l5.28-1.38A10 10 0 0 0 12 21.63a10 10 0 0 0 7.05-17h.04ZM12 20a8.18 8.18 0 0 1-4.21-1.16l-.31-.18-3.13.83.84-3.06-.19-.36A8.28 8.28 0 1 1 12 20Zm4.54-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.12-.246.347-.51.68-.79 1-.14.16-.29.18-.54.06a6.92 6.92 0 0 1-2-1.23 7.27 7.27 0 0 1-1.38-1.73c-.15-.25 0-.38.11-.51s.25-.29.37-.43a1.51 1.51 0 0 0 .25-.42.46.46 0 0 0 0-.43c-.04-.2-.54-1.42-.75-1.92-.21-.5-.4-.42-.56-.43h-.47a1 1 0 0 0-.67.31A2.81 2.81 0 0 0 7 9.45 4.73 4.73 0 0 0 8 12a11 11 0 0 0 4.25 3.76c.464.2.938.378 1.42.53a3.28 3.28 0 0 0 1.56.09 2.54 2.54 0 0 0 1.68-1.18 2.09 2.09 0 0 0 .15-1.2c-.06-.07-.23-.13-.48-.25l-.04.05Z' />
    </svg>
  );
};
