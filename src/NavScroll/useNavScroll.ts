/* eslint-disable @typescript-eslint/no-explicit-any */
/*--------------------------------------------------------------------------
 * This work derives from the React Use Navscroll library
 * Released under the MIT license by Marco Liberati (@dej611)
 * Code: https://github.com/dej611/react-use-navscroll
 * --------------------------------------------------------------------------
 * Parts of this code has been modified using Bootstrap Italia source code
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * License: BSD-3-Clause (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from './debounce';
import type { useNavScrollArgs, useNavScrollResult, TrackedElement } from './types';
import { useSizeDetector } from './useSizeDetector';

import { v4 as uuidv4 } from 'uuid';

let ticking: boolean = false;
let callbacks: any[] = [];

class ScrollCallback {
  private _callback: any;
  id: string;
  constructor(id: string, callback: any) {
    this.id = id;
    this._callback = callback;
  }

  //Public
  dispose() {
    removeCallBack(this.id);
  }

  //Private
  _execute(data: any) {
    this._callback(data);
  }
}

const removeCallBack = (id: string) => {
  callbacks = callbacks.filter((cb) => cb.id !== id);
};

const onDocumentScroll = (callback: any) => {
  if (typeof document === 'undefined') {
    return;
  }
  if (!callbacks.length) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.addEventListener('scroll', (evt) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            callbacks.forEach((cbObj) => cbObj.cb._execute(evt));
            ticking = false;
          });
          ticking = true;
        }
      });
    }
  }

  if (typeof callback === 'function') {
    const newCb = new ScrollCallback(uuidv4(), callback);
    callbacks.push({
      id: newCb.id,
      cb: newCb
    });
    return newCb;
  }

  console.error('[onDocumentScroll] the provided data has to be of type function');
  return null;
};

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
  const [percentageValue, setPercentageValue] = useState(0);

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
  }, [counter]);
  const activeIds = useMemo(() => (activeId ? resolveHierarchyIds(activeId, elsLookup) : []), [activeId, elsLookup]);

  const activeLookups = useMemo(() => new Set(activeIds), [activeIds]);
  useEffect(() => {
    if (!hasWindow) {
      return;
    }
    const _onScroll = () => {
      let intersectionId = null;
      for (let k = 0; k < els.current.length; k++) {
        const entry = els.current[k].ref.current;
        const min = entry?.getBoundingClientRect().top ? entry?.getBoundingClientRect().top : 0;
        if (!min) {
          break;
        }
        if (min > 0 && k > 0) {
          const totEls =
            root?.previousSibling?.firstChild?.parentNode?.querySelectorAll('.it-navscroll-wrapper .nav-link').length ||
            1;
          setPercentageValue((k / (totEls / 2)) * 100);
          intersectionId = els.current[k - 1].ref.current?.id;
          break;
        }
      }
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

    onDocumentScroll(_onScroll);

    setTimeout(() => {
      _onScroll();
    }, 300);
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
    (id: string, options: any = {}) => {
      if (!hasWindow) {
        return { id, ref: null };
      }
      const alreadyRegistered = id in elsLookup;
      const entry = alreadyRegistered ? els.current.find(({ id: existingId }) => existingId === id) : options;
      const ref = (entry && entry.ref) || createRef();

      if (!alreadyRegistered) {
        els.current = [...els.current, { id, ref, parent: options.parent }];
        refresh();
      }
      return { id, ref };
    },
    [counter]
  );

  const unregister = useCallback(
    (idToUnregister: string) => {
      els.current = els.current.filter(({ id }) => id !== idToUnregister);
    },
    [counter]
  );

  const isActive = useCallback((id: string) => activeLookups.has(id), [activeLookups]);
  const percentage = useMemo(() => percentageValue, [percentageValue]);

  const getActiveRef = useCallback(() => {
    const entry = els.current.find(({ id }) => id === activeId);
    return entry ? entry.ref : null;
  }, [activeId]);

  return {
    percentage,
    register,
    unregister,
    activeIds,
    isActive,
    getActiveRef
  };
}
