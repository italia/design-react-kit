import React, { FC, ImgHTMLAttributes, SVGProps, useEffect, useState } from 'react';
import classNames from 'classnames';
import { isBundledIcon, loadIcon, allIcons, IconName } from './assets';
import { EmptyIcon } from './EmptyIcon';
export type { IconName } from './assets';

export const iconsList = allIcons;

let iconsCache: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {};

/**
 * Preload a list of icons in cache
 * @param icons - the list of icons to preload
 * @returns true if the icons have been preloaded
 */
export function preloadIcons(icons: IconName[]) {
  return Promise.all(icons.map((icon) => loadIcon(icon))).then((preloadedIcons) => {
    preloadedIcons.forEach(({ component }, i) => {
      iconsCache[icons[i]] = (() => component) as unknown as FC<SVGProps<SVGSVGElement>>;
    });
    return true;
  });
}

/**
 * Removes icons from cache
 * @param icon? - the icon to remove, or nothing to clear the whole cache
 * @returns an object containing the removed icons
 */
export const clearIconCache = (iconName?: IconName) => {
  let deletedItems;
  if (iconName) {
    deletedItems = { [iconName]: iconsCache[iconName] };
    delete iconsCache[iconName];
  } else {
    deletedItems = { ...iconsCache };
    iconsCache = {};
  }
  return deletedItems;
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'success' | 'warning' | 'danger' | 'note' | 'important' | string;
  /** Le dimensioni dell'icona. In ordine dalla più grande alla più piccola: "xl", "lg", '' (stringa vuota), "sm", "xs". */
  size?: 'xl' | 'lg' | '' | 'sm' | 'xs';
  /**
   * Il nome dell'icona da mostrare. Per una lista completa vedi:
   * <a href="https://italia.github.io/design-react-kit/?path=/story/componenti-icon--lista-icone" target="_blank">Lista icone</a>
   * In caso di un'immagine esterna l'URL da utilizzare.
   **/
  icon: string;
  /** Il titolo da dare all'icona. Quando si utilizza un'immagine esterna viene utilizzato come attributo "alt". */
  title?: string;
  /** Quando abilitato riduce la dimensione dell'icona all'interno del contenitore.  */
  padding?: boolean;
  /** Funzione chiamata al caricamento dell'icona */
  onIconLoad?: () => void;
  /** Id da utilizzare in caso di testing */
  testId?: string;
}

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export const Icon: FC<IconProps> = ({
  color = '',
  size = '',
  icon = '',
  title = 'icon',
  className,
  padding = false,
  onIconLoad,
  testId,
  ...attributes
}) => {
  const [IconComponent, setCurrentIcon] = useState<FC<SVGProps<SVGSVGElement> & SVGRProps>>(iconsCache[icon]);
  const classes = classNames('icon', className, {
    [`icon-${color}`]: color,
    [`icon-${size}`]: size,
    'icon-padded': padding
  });

  useEffect(() => {
    if (isBundledIcon(icon) && !iconsCache[icon]) {
      loadIcon(icon).then(({ component }) => {
        iconsCache[icon] = (() => component) as unknown as FC<SVGProps<SVGSVGElement> & SVGRProps>;
        setCurrentIcon(iconsCache[icon]);
        onIconLoad?.();
      });
    } else {
      if (IconComponent !== iconsCache[icon]) {
        setCurrentIcon(iconsCache[icon]);
      }
      onIconLoad?.();
    }
  }, [IconComponent, icon, onIconLoad]);

  if (!isBundledIcon(icon)) {
    // assume it's an image and let the browser do its job
    return (
      <img
        src={icon}
        className={classes}
        alt={title}
        data-testid={testId}
        {...(attributes as ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }

  if (!IconComponent) {
    return <EmptyIcon className={classes} role='img' {...attributes} data-testid={testId} />;
  }

  return <IconComponent className={classes} role='img' title={title} data-testid={testId} {...attributes} />;
};
