import React, {
  FC,
  ImgHTMLAttributes,
  SVGProps,
  useEffect,
  useState
} from 'react';
import classNames from 'classnames';
import {
  isBundledIcon,
  iconsCache,
  loadIcon,
  allIcons,
  IconName
} from './assets';
import { EmptyIcon } from './EmptyIcon';
export type { IconName } from './assets';

export const iconsList = allIcons;
/**
 * Preload a list of icons in cache
 * @param icons - the list of icons to preload
 * @returns the list of the preloaded icons
 */
export async function preloadIcons(icons: IconName[]) {
  const filteredIcons = icons.filter(isBundledIcon);
  const preloadedIcons = await Promise.all(
    filteredIcons.map((icon) => loadIcon(icon))
  );
  preloadedIcons.forEach(({ component }, i) => {
    iconsCache[filteredIcons[i]] = ((() => component) as unknown) as FC<
      SVGProps<SVGSVGElement>
    >;
  });
  // return the list of the preloaded icons
  return filteredIcons;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'success' | 'warning' | 'danger' | 'note' | 'important' | string;
  /** Le dimensioni dell'icona. In ordine dalla più grande alla più piccola: "xl", "lg", '' (stringa vuota), "sm", "xs". */
  size?: 'xl' | 'lg' | '' | 'sm' | 'xs';
  /** Il nome dell'icona da mostrare. Per una lista completa vedi: @TODO-URL */
  icon: string;
  /** Quando abilitato riduce la dimensione dell'icona all'interno del contenitore.  */
  padding?: boolean;
}

export const Icon: FC<IconProps> = ({
  color = '',
  size = '',
  icon = '',
  className,
  padding = false,
  ...attributes
}) => {
  const [IconComponent, setCurrentIcon] = useState<FC<SVGProps<SVGSVGElement>>>(
    iconsCache[icon]
  );
  const classes = classNames('icon', className, {
    [`icon-${color}`]: color,
    [`icon-${size}`]: size,
    'icon-padded': padding
  });

  useEffect(() => {
    if (isBundledIcon(icon) && !iconsCache[icon]) {
      loadIcon(icon).then(({ component }) => {
        iconsCache[icon] = ((() => component) as unknown) as FC<
          SVGProps<SVGSVGElement>
        >;
        setCurrentIcon(iconsCache[icon]);
      });
    }
  }, [icon]);

  if (!isBundledIcon(icon)) {
    // assume it's an image and let the browser do its job
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        src={icon}
        className={classes}
        {...(attributes as ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }

  if (!IconComponent) {
    return <EmptyIcon className={classes} role='img' {...attributes} />;
  }

  return <IconComponent className={classes} role='img' {...attributes} />;
};
