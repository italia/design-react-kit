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
function mergeAriaDescribedBy(...descriptions) {
  const ids = descriptions.flatMap((description) => (description == null ? void 0 : description.trim().split(/\s+/)) ?? []);
  const uniqueIds = [...new Set(ids.filter(Boolean))];
  return uniqueIds.length > 0 ? uniqueIds.join(" ") : void 0;
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
  mapToCssModules as b,
  logError as l,
  mergeAriaDescribedBy as m,
  noop as n,
  omit as o,
  pick as p
};
