/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * This work derives from the React Use Navscroll library
 * Released under the MIT license by Marco Liberati
 * Code: https://github.com/dej611/react-use-navscroll
 */

import { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from './debounce';
import type { TrackedElement, useNavScrollArgs, useNavScrollResult } from './types';
import { useSizeDetector } from './useSizeDetector';

const hasWindow = typeof window !== 'undefined';
const REGISTER_DELAY = 50;

function resolveHierarchyIds(id: string, lookup: Record<string, string | undefined>) {
  const newActiveIds = [id];
  let lastId: string | undefined = newActiveIds[0];
  while (lastId != null && lookup[lastId] != null) {
    newActiveIds.push(lookup[lastId] as string);
    lastId = lookup[lastId];
  }
  // return a list from parent to current child
  return newActiveIds.reverse();
}
/**
 * This is the main hook: use it in a react function component to track
 * the state of the passed ids. The function accepts an initial configuration
 * of type `useNavScrollArgs` to customize the behaviour.
 */
export function useNavScroll(args: useNavScrollArgs = {}): useNavScrollResult {
  const { onChange, root, offset = 50, isHorizontal = false } = args;
  const els = useRef<TrackedElement[]>([]);
  const [counter, setCounter] = useState(0);
  const [forceRecompute, setForceRecompute] = useState(false);
  const [activeId, updateActiveId] = useState<string | null>(null);

  const { targetSize, useViewport } = useSizeDetector({
    root,
    isHorizontal,
    onChange,
    activeId,
    setForceRecompute,
    updateActiveId,
    hasWindow
  });

  const observerMargin = Math.floor((targetSize * offset) / 100) || 1;
  const observerOptions = useMemo(() => {
    const topMargin = observerMargin % 2 === 1 ? observerMargin - 1 : observerMargin;
    const bottomMargin = targetSize - observerMargin;
    return {
      root: useViewport ? null : root,
      rootMargin: isHorizontal
        ? `0px ${-topMargin}px 0px ${-bottomMargin}px`
        : `${-topMargin}px 0px ${-bottomMargin}px 0px`
    };
  }, [root, targetSize, observerMargin, isHorizontal, useViewport]);

  const elsLookup = useMemo(() => {
    const lookup: Record<string, string | undefined> = {};
    for (const { id, parent } of els.current) {
      lookup[id] = parent;
    }
    return lookup;
  }, []);
  const activeIds = useMemo(() => (activeId ? resolveHierarchyIds(activeId, elsLookup) : []), [activeId, elsLookup]);

  const activeLookups = useMemo(() => new Set(activeIds), [activeIds]);
  useEffect(() => {
    if (!hasWindow) {
      return;
    }
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      let intersectionId = null;
      let topMin = Infinity;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (topMin > entry.boundingClientRect.top) {
            topMin = entry.boundingClientRect.top;
            intersectionId = entry.target.id;
          }
        }
      });
      if (intersectionId != null) {
        updateActiveId(intersectionId);
        if (onChange) {
          const diffIds = {
            added: intersectionId,
            removed: activeId
          };
          onChange(diffIds);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    els.current.forEach(({ ref }) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    if (forceRecompute) {
      handleIntersection(observer.takeRecords(), observer);
      setForceRecompute(false);
    }
    return () => {
      observer.disconnect();
    };
  }, [
    activeIds,
    updateActiveId,
    els,
    elsLookup,
    onChange,
    activeLookups,
    activeId,
    observerOptions,
    isHorizontal,
    root,
    forceRecompute
  ]);

  const refresh = useCallback(
    debounce(() => {
      setCounter(counter + 1);
    }, REGISTER_DELAY),
    [counter]
  );

  const register = useCallback(
    (id: string, options = {}) => {
      if (!hasWindow) {
        return { id, ref: null };
      }
      const alreadyRegistered = id in elsLookup;
      const entry = (alreadyRegistered ? els.current.find(({ id: existingId }) => existingId === id) : options) as any;
      const ref = (entry && entry.ref) || createRef();

      if (!alreadyRegistered) {
        els.current = [...els.current, { id, ref, parent: (options as any).parent }];
        refresh();
      }
      return { id, ref };
    },
    [elsLookup, refresh]
  );

  const unregister = useCallback((idToUnregister: string) => {
    els.current = els.current.filter(({ id }) => id !== idToUnregister);
  }, []);

  const isActive = useCallback((id: string) => activeLookups.has(id), [activeLookups]);

  const getActiveRef = useCallback(() => {
    const entry = els.current.find(({ id }) => id === activeId);
    return entry ? entry.ref : null;
  }, [activeId]);

  return {
    register,
    unregister,
    activeIds,
    isActive,
    getActiveRef
  };
}
