import { renderHook } from '@testing-library/react'; //react 18 -> https://github.com/testing-library/react-hooks-testing-library?tab=readme-ov-file#a-note-about-react-18-support
import { useSizeDetector, useSizeDetectorArgs } from '../src/NavScroll/useSizeDetector';

function getDefaultProps(): useSizeDetectorArgs {
  return {
    activeId: null,
    hasWindow: true,
    setForceRecompute: jest.fn(),
    updateActiveId: jest.fn()
  };
}

describe('useSizeDetector', () => {
  it('should return window size if no root is passed', () => {
    const { result } = renderHook((props) => useSizeDetector(props), {
      initialProps: getDefaultProps()
    });
    expect(result.current.targetSize).toBe(global.window.innerHeight);
    expect(result.current.useViewport).toBe(true);
  });

  it('should use the viewport but not change size when no root is passed but window is not available', () => {
    const { result } = renderHook((props) => useSizeDetector(props), {
      initialProps: {
        ...getDefaultProps(),
        hasWindow: false
      }
    });
    expect(result.current.targetSize).toBe(1);
    expect(result.current.useViewport).toBe(true);
  });

  it('should use the root element when available rather than the viewport even when no window is available', () => {
    const { result } = renderHook((props) => useSizeDetector(props), {
      initialProps: {
        ...getDefaultProps(),
        root: document.createElement('div'),
        hasWindow: false
      }
    });
    expect(result.current.targetSize).toBe(1);
    expect(result.current.useViewport).toBe(false);
  });

  it('should work for horizontal scrolling as well', () => {
    const { result } = renderHook((props) => useSizeDetector(props), {
      initialProps: { ...getDefaultProps(), isHorizontal: true }
    });
    expect(result.current.targetSize).toBe(global.window.innerWidth);
  });
});
