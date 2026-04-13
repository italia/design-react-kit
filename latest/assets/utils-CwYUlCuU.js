const noop = () => {
};
const logError = (message) => {
  if (typeof console !== "undefined") {
    if (console.error) {
      console.error(message);
    } else {
      console.log(message);
    }
  }
};
const messages = {};
const notifyDeprecation = (message, options = { once: true }) => {
  if (!options.once) {
    logError(message);
  } else {
    if (!messages[message]) {
      logError(message);
      messages[message] = 1;
    }
  }
};
function mapToCssModules(className, cssModules) {
  const finalClassNames = className == null ? "" : className;
  if (!cssModules) {
    return finalClassNames;
  }
  return finalClassNames.split(" ").map((klass) => cssModules[klass] ?? klass).join(" ");
}
function pick(obj, keys) {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const newObj = {};
  for (const key of keysArray) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
function omit(obj, keys) {
  const keysLookup = new Set(Array.isArray(keys) ? keys : [keys]);
  const newObj = {};
  for (const key in obj) {
    if (!keysLookup.has(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
export {
  notifyDeprecation as a,
  logError as l,
  mapToCssModules as m,
  noop as n,
  omit as o,
  pick as p
};
