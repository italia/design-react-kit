/*
 * This work derives from the React Use Navscroll library
 * Released under the MIT license by Marco Liberati
 * Code: https://github.com/dej611/react-use-navscroll
 */

import { useCallback, useEffect, useState } from 'react';
import { debounce } from './debounce';
import { useNavScrollArgs } from './types';

const DEFAULT_DELAY = 150;

export type useSizeDetectorArgs = Omit<useNavScrollArgs, 'offset'> & {
  activeId: string | null;
  hasWindow: boolean;
  setForceRecompute: (force: boolean) => void;
  updateActiveId: (id: string | null) => void;
};

export const useSizeDetector = ({
  root,
  isHorizontal,
  activeId,
  onChange,
  setForceRecompute,
  updateActiveId,
  hasWindow
}: useSizeDetectorArgs) => {
  const [targetSize, setTargetSize] = useState<number>(1);

  const useViewport =
    root == null ||
    (hasWindow && (isHorizontal ? window.innerWidth < root.clientWidth : window.innerHeight < root.clientHeight));

  const scrollEnd = useCallback(
    debounce(() => {
      setForceRecompute(true);
    }, DEFAULT_DELAY),
    [setForceRecompute]
  );

  useEffect(() => {
    if (!hasWindow) {
      return;
    }
    let observer: IntersectionObserver | null = null;

    const resizeWindowHandler = () => {
      setTimeout(() => {
        setTargetSize(isHorizontal ? window.innerWidth : window.innerHeight);
      }, DEFAULT_DELAY);
    };

    const resizeElementHandler: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (!useViewport) {
        setTargetSize(isHorizontal ? entry.boundingClientRect.width : entry.boundingClientRect.height);
      }

      if (entry.intersectionRatio === 0) {
        if (activeId != null) {
          updateActiveId(null);
          if (onChange) {
            onChange({
              added: null,
              removed: activeId
            });
          }
        }
      }
    };

    addEventListener('scroll', scrollEnd);
    if (useViewport) {
      setTargetSize(isHorizontal ? window.innerWidth : window.innerHeight);
      addEventListener('resize', resizeWindowHandler);
    }
    if (root) {
      observer = new IntersectionObserver(resizeElementHandler);
      observer.observe(root);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
      removeEventListener('resize', resizeWindowHandler);
      removeEventListener('scroll', scrollEnd);
    };
  }, [root, isHorizontal, activeId, onChange, useViewport, scrollEnd, hasWindow, updateActiveId]);
  return { targetSize, useViewport };
};
