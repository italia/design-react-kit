export const noop = () => {};

export const logError = (message: string) => {
  if (typeof console !== 'undefined') {
    if (console.error) {
      console.error(message);
    } else {
      console.log(message);
    }
  }
};

const messages: Record<string, 1> = {};
export const notifyDeprecation = (
  message: string,
  options = { once: true }
) => {
  if (!options.once) {
    logError(message);
  } else {
    if (!messages[message]) {
      logError(message);
      messages[message] = 1;
    }
  }
};

export function mapToCssModules(
  className: string | null,
  cssModules?: Record<string, string>
) {
  let finalClassNames = className ?? '';
  if (!cssModules) {
    return finalClassNames;
  }
  return finalClassNames
    .split(' ')
    .map((klass) => cssModules[klass] || klass)
    .join(' ');
}

type UnknownObject = Record<string, unknown>;

export function pick<T extends UnknownObject>(
  obj: T,
  keys: Array<keyof T>
): Partial<T> {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const newObj: Partial<T> = {};
  for (const key of keysArray) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

export function omit<T extends UnknownObject>(
  obj: T,
  keys: Array<keyof T>
): Partial<T> {
  const keysLookup = new Set(Array.isArray(keys) ? keys : [keys]);

  const newObj: Partial<T> = {};
  for (const key in obj) {
    if (!keysLookup.has(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
