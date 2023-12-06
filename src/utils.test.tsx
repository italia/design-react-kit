jest.spyOn(console, 'error').mockImplementation();

// eslint-disable-next-line import/first
import { flushMessageCache, logError, mapToCssModules, notifyDeprecation, omit, pick } from './utils';

describe('Kit utils', () => {
  describe('mapToCssModules', () => {
    it('should return empty string for undefined or null', () => {
      expect(mapToCssModules(null)).toBe('');
      expect(mapToCssModules(null, {})).toBe('');
      expect(mapToCssModules(null, { null: 'nil' })).toBe('');
      // @ts-expect-error
      expect(mapToCssModules(undefined)).toBe('');
    });

    it('should return passed classes without cssModules or without any matching mapping', () => {
      expect(mapToCssModules('myClass')).toBe('myClass');
      expect(mapToCssModules('myClass myOtherClass')).toBe('myClass myOtherClass');
      expect(mapToCssModules('myClass', { otherClass: 'myOtherClass' })).toBe('myClass');
    });

    it('should map passed classes with cssModules', () => {
      expect(mapToCssModules('myClass', { myClass: 'otherClass' })).toBe('otherClass');
      expect(mapToCssModules('myClass myOtherClass', { myClass: 'otherClass' })).toBe('otherClass myOtherClass');
    });

    it('should make work the mapping also for empty string', () => {
      expect(mapToCssModules('myClass', { myClass: '' })).toBe('');
    });
  });

  describe('pick', () => {
    it('should basically work', () => {
      expect(pick({ a: 'value', b: 'value', c: 'value' }, ['a'])).toEqual({
        a: 'value'
      });
      expect(pick({ a: 'value', b: 'value', c: 'value' }, 'a')).toEqual({
        a: 'value'
      });
      expect(pick({ a: 'value', b: 'value', c: 'value' }, ['a', 'b'])).toEqual({
        a: 'value',
        b: 'value'
      });
      expect(pick({ a: 'value', b: 'value', c: 'value' }, [])).toEqual({});
    });

    it("should return an empty object if there's no key overlapping", () => {
      // @ts-expect-error
      expect(pick({ a: 'value', b: 'value', c: 'value' }, ['e'])).toEqual({});
      // @ts-expect-error
      expect(pick({ a: 'value', b: 'value', c: 'value' }, 'e')).toEqual({});
    });
  });
  describe('omit', () => {
    it('should basically work', () => {
      expect(omit({ a: 'value', b: 'value', c: 'value' }, ['a'])).toEqual({
        b: 'value',
        c: 'value'
      });
      expect(omit({ a: 'value', b: 'value', c: 'value' }, 'a')).toEqual({
        b: 'value',
        c: 'value'
      });
      expect(omit({ a: 'value', b: 'value', c: 'value' }, ['a', 'b'])).toEqual({
        c: 'value'
      });
      expect(omit({ a: 'value', b: 'value', c: 'value' }, [])).toEqual({
        a: 'value',
        b: 'value',
        c: 'value'
      });
    });

    it("should return the same object if there's no key overlapping", () => {
      // @ts-expect-error
      expect(omit({ a: 'value', b: 'value', c: 'value' }, ['e'])).toEqual({
        a: 'value',
        b: 'value',
        c: 'value'
      });
      // @ts-expect-error
      expect(omit({ a: 'value', b: 'value', c: 'value' }, 'e')).toEqual({
        a: 'value',
        b: 'value',
        c: 'value'
      });
    });
  });

  describe('logError', () => {
    beforeEach(() => {
      flushMessageCache();
      // @ts-expect-error
      console.error.mockClear();
    });
    it('should basically work', () => {
      logError('hello');
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('notifyDeprecation', () => {
    beforeEach(() => {
      flushMessageCache();
      // @ts-expect-error
      console.error.mockClear();
    });
    it('should propagate the error message', () => {
      notifyDeprecation('hello');
      expect(console.error).toHaveBeenCalled();
    });

    it('should throttle the message by content by default', () => {
      [1, 2, 3].forEach(() => notifyDeprecation('hello'));
      expect(console.error).toHaveBeenCalledTimes(1);
    });

    it('should thottle message when requested', () => {
      [1, 2, 3].forEach(() => notifyDeprecation('hello', { once: true }));
      expect(console.error).toHaveBeenCalledTimes(1);
    });

    it('should not throttle when set to false', () => {
      [1, 2, 3].forEach(() => notifyDeprecation('hello', { once: false }));
      expect(console.error).toHaveBeenCalledTimes(3);
    });

    it('should throttle by content', () => {
      [1, 2, 3].forEach((i) => notifyDeprecation(`hello-${i}`, { once: true }));
      expect(console.error).toHaveBeenCalledTimes(3);
    });
  });
});
