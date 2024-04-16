import { c as commonjsGlobal, g as getDefaultExportFromCjs } from "./_commonjsHelpers-LQfde5yM.js";
function arrayMap$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var baseGetTag$4 = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
const isFunction$3 = /* @__PURE__ */ getDefaultExportFromCjs(isFunction_1);
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$3 = getNative$6(root$5, "Map");
var _Map = Map$3;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$2 = _Symbol, Uint8Array = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert5 = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert5 || (convert5 = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert5(object), convert5(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var isArray$8 = Array.isArray;
var isArray_1 = isArray$8;
var arrayPush = _arrayPush, isArray$7 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$7(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$6 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$3 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$2.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var isBufferExports = isBuffer$2.exports;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$2 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength$2(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$6 = isArray_1, isBuffer$1 = isBufferExports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$6(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$3 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$3;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$2 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$2, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$4 = _getNative, root$3 = _root;
var DataView$1 = getNative$4(root$3, "DataView");
var _DataView = DataView$1;
var getNative$3 = _getNative, root$2 = _root;
var Promise$2 = getNative$3(root$2, "Promise");
var _Promise = Promise$2;
var getNative$2 = _getNative, root$1 = _root;
var Set$1 = getNative$2(root$1, "Set");
var _Set = Set$1;
var getNative$1 = _getNative, root = _root;
var WeakMap$1 = getNative$1(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set = _Set, WeakMap = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
var getTag$1 = baseGetTag$1;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag$1(new Map()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set && getTag$1(new Set()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$5 = isArray_1, isBuffer = isBufferExports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$5(object), othIsArr = isArray$5(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$1 = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$1(value) && !isObjectLike$1(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$1 = keys_1;
function getMatchData$1(object) {
  var result = keys$1(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$3(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$3;
var isArray$4 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$4(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$3 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$3(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$2 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$4(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$4;
var castPath$1 = _castPath, toKey$3 = _toKey;
function baseGet$2(object, path) {
  path = castPath$1(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$1(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath = _castPath, isArguments = isArguments_1, isArray$1 = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var getNative = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$1(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$1;
var overArg = _overArg;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var baseFor = _baseFor, keys = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
var _baseForOwn = baseForOwn$1;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object, function(value, key, object2) {
    baseAssignValue(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_1 = mapValues;
const mapValues$1 = /* @__PURE__ */ getDefaultExportFromCjs(mapValues_1);
var doctrine$1 = {};
var utils = {};
var ast = { exports: {} };
(function() {
  function isExpression(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return true;
    }
    return false;
  }
  function isIterationStatement(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return true;
    }
    return false;
  }
  function isStatement(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return true;
    }
    return false;
  }
  function isSourceElement(node) {
    return isStatement(node) || node != null && node.type === "FunctionDeclaration";
  }
  function trailingStatement(node) {
    switch (node.type) {
      case "IfStatement":
        if (node.alternate != null) {
          return node.alternate;
        }
        return node.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return node.body;
    }
    return null;
  }
  function isProblematicIfStatement(node) {
    var current;
    if (node.type !== "IfStatement") {
      return false;
    }
    if (node.alternate == null) {
      return false;
    }
    current = node.consequent;
    do {
      if (current.type === "IfStatement") {
        if (current.alternate == null) {
          return true;
        }
      }
      current = trailingStatement(current);
    } while (current);
    return false;
  }
  ast.exports = {
    isExpression,
    isStatement,
    isIterationStatement,
    isSourceElement,
    isProblematicIfStatement,
    trailingStatement
  };
})();
var astExports = ast.exports;
var code = { exports: {} };
(function() {
  var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;
  ES5Regex = {
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  };
  ES6Regex = {
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function isDecimalDigit(ch2) {
    return 48 <= ch2 && ch2 <= 57;
  }
  function isHexDigit(ch2) {
    return 48 <= ch2 && ch2 <= 57 || // 0..9
    97 <= ch2 && ch2 <= 102 || // a..f
    65 <= ch2 && ch2 <= 70;
  }
  function isOctalDigit(ch2) {
    return ch2 >= 48 && ch2 <= 55;
  }
  NON_ASCII_WHITESPACES = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function isWhiteSpace(ch2) {
    return ch2 === 32 || ch2 === 9 || ch2 === 11 || ch2 === 12 || ch2 === 160 || ch2 >= 5760 && NON_ASCII_WHITESPACES.indexOf(ch2) >= 0;
  }
  function isLineTerminator(ch2) {
    return ch2 === 10 || ch2 === 13 || ch2 === 8232 || ch2 === 8233;
  }
  function fromCodePoint(cp) {
    if (cp <= 65535) {
      return String.fromCharCode(cp);
    }
    var cu1 = String.fromCharCode(Math.floor((cp - 65536) / 1024) + 55296);
    var cu2 = String.fromCharCode((cp - 65536) % 1024 + 56320);
    return cu1 + cu2;
  }
  IDENTIFIER_START = new Array(128);
  for (ch = 0; ch < 128; ++ch) {
    IDENTIFIER_START[ch] = ch >= 97 && ch <= 122 || // a..z
    ch >= 65 && ch <= 90 || // A..Z
    ch === 36 || ch === 95;
  }
  IDENTIFIER_PART = new Array(128);
  for (ch = 0; ch < 128; ++ch) {
    IDENTIFIER_PART[ch] = ch >= 97 && ch <= 122 || // a..z
    ch >= 65 && ch <= 90 || // A..Z
    ch >= 48 && ch <= 57 || // 0..9
    ch === 36 || ch === 95;
  }
  function isIdentifierStartES5(ch2) {
    return ch2 < 128 ? IDENTIFIER_START[ch2] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
  }
  function isIdentifierPartES5(ch2) {
    return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
  }
  function isIdentifierStartES6(ch2) {
    return ch2 < 128 ? IDENTIFIER_START[ch2] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
  }
  function isIdentifierPartES6(ch2) {
    return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
  }
  code.exports = {
    isDecimalDigit,
    isHexDigit,
    isOctalDigit,
    isWhiteSpace,
    isLineTerminator,
    isIdentifierStartES5,
    isIdentifierPartES5,
    isIdentifierStartES6,
    isIdentifierPartES6
  };
})();
var codeExports = code.exports;
var keyword = { exports: {} };
(function() {
  var code2 = codeExports;
  function isStrictModeReservedWordES6(id) {
    switch (id) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return true;
      default:
        return false;
    }
  }
  function isKeywordES5(id, strict) {
    if (!strict && id === "yield") {
      return false;
    }
    return isKeywordES6(id, strict);
  }
  function isKeywordES6(id, strict) {
    if (strict && isStrictModeReservedWordES6(id)) {
      return true;
    }
    switch (id.length) {
      case 2:
        return id === "if" || id === "in" || id === "do";
      case 3:
        return id === "var" || id === "for" || id === "new" || id === "try";
      case 4:
        return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
      case 5:
        return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
      case 6:
        return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
      case 7:
        return id === "default" || id === "finally" || id === "extends";
      case 8:
        return id === "function" || id === "continue" || id === "debugger";
      case 10:
        return id === "instanceof";
      default:
        return false;
    }
  }
  function isReservedWordES5(id, strict) {
    return id === "null" || id === "true" || id === "false" || isKeywordES5(id, strict);
  }
  function isReservedWordES6(id, strict) {
    return id === "null" || id === "true" || id === "false" || isKeywordES6(id, strict);
  }
  function isRestrictedWord(id) {
    return id === "eval" || id === "arguments";
  }
  function isIdentifierNameES5(id) {
    var i, iz, ch;
    if (id.length === 0) {
      return false;
    }
    ch = id.charCodeAt(0);
    if (!code2.isIdentifierStartES5(ch)) {
      return false;
    }
    for (i = 1, iz = id.length; i < iz; ++i) {
      ch = id.charCodeAt(i);
      if (!code2.isIdentifierPartES5(ch)) {
        return false;
      }
    }
    return true;
  }
  function decodeUtf16(lead, trail) {
    return (lead - 55296) * 1024 + (trail - 56320) + 65536;
  }
  function isIdentifierNameES6(id) {
    var i, iz, ch, lowCh, check;
    if (id.length === 0) {
      return false;
    }
    check = code2.isIdentifierStartES6;
    for (i = 0, iz = id.length; i < iz; ++i) {
      ch = id.charCodeAt(i);
      if (55296 <= ch && ch <= 56319) {
        ++i;
        if (i >= iz) {
          return false;
        }
        lowCh = id.charCodeAt(i);
        if (!(56320 <= lowCh && lowCh <= 57343)) {
          return false;
        }
        ch = decodeUtf16(ch, lowCh);
      }
      if (!check(ch)) {
        return false;
      }
      check = code2.isIdentifierPartES6;
    }
    return true;
  }
  function isIdentifierES5(id, strict) {
    return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
  }
  function isIdentifierES6(id, strict) {
    return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
  }
  keyword.exports = {
    isKeywordES5,
    isKeywordES6,
    isReservedWordES5,
    isReservedWordES6,
    isRestrictedWord,
    isIdentifierNameES5,
    isIdentifierNameES6,
    isIdentifierES5,
    isIdentifierES6
  };
})();
var keywordExports = keyword.exports;
(function() {
  utils.ast = astExports;
  utils.code = codeExports;
  utils.keyword = keywordExports;
})();
var typed = {};
var utility = {};
const name = "doctrine";
const description = "JSDoc parser";
const homepage = "https://github.com/eslint/doctrine";
const main = "lib/doctrine.js";
const version = "3.0.0";
const engines = {
  node: ">=6.0.0"
};
const directories = {
  lib: "./lib"
};
const files = [
  "lib"
];
const maintainers = [
  {
    name: "Nicholas C. Zakas",
    email: "nicholas+npm@nczconsulting.com",
    web: "https://www.nczonline.net"
  },
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
];
const repository = "eslint/doctrine";
const devDependencies = {
  coveralls: "^3.0.1",
  dateformat: "^1.0.11",
  eslint: "^1.10.3",
  "eslint-release": "^1.0.0",
  linefix: "^0.1.1",
  mocha: "^3.4.2",
  "npm-license": "^0.3.1",
  nyc: "^10.3.2",
  semver: "^5.0.3",
  shelljs: "^0.5.3",
  "shelljs-nodecli": "^0.1.1",
  should: "^5.0.1"
};
const license = "Apache-2.0";
const scripts = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
};
const dependencies = {
  esutils: "^2.0.2"
};
const require$$0 = {
  name,
  description,
  homepage,
  main,
  version,
  engines,
  directories,
  files,
  maintainers,
  repository,
  devDependencies,
  license,
  scripts,
  dependencies
};
function assert(expr, message) {
  if (!Boolean(expr)) {
    throw new Error(message || "unknown assertion error");
  }
}
var assert_1 = assert;
(function() {
  var VERSION;
  VERSION = require$$0.version;
  utility.VERSION = VERSION;
  function DoctrineError(message) {
    this.name = "DoctrineError";
    this.message = message;
  }
  DoctrineError.prototype = function() {
    var Middle = function() {
    };
    Middle.prototype = Error.prototype;
    return new Middle();
  }();
  DoctrineError.prototype.constructor = DoctrineError;
  utility.DoctrineError = DoctrineError;
  function throwError(message) {
    throw new DoctrineError(message);
  }
  utility.throwError = throwError;
  utility.assert = assert_1;
})();
(function() {
  var Syntax, Token, source, length, index, previous, token, value, esutils, utility$1, rangeOffset, addRange;
  esutils = utils;
  utility$1 = utility;
  Syntax = {
    NullableLiteral: "NullableLiteral",
    AllLiteral: "AllLiteral",
    NullLiteral: "NullLiteral",
    UndefinedLiteral: "UndefinedLiteral",
    VoidLiteral: "VoidLiteral",
    UnionType: "UnionType",
    ArrayType: "ArrayType",
    RecordType: "RecordType",
    FieldType: "FieldType",
    FunctionType: "FunctionType",
    ParameterType: "ParameterType",
    RestType: "RestType",
    NonNullableType: "NonNullableType",
    OptionalType: "OptionalType",
    NullableType: "NullableType",
    NameExpression: "NameExpression",
    TypeApplication: "TypeApplication",
    StringLiteralType: "StringLiteralType",
    NumericLiteralType: "NumericLiteralType",
    BooleanLiteralType: "BooleanLiteralType"
  };
  Token = {
    ILLEGAL: 0,
    // ILLEGAL
    DOT_LT: 1,
    // .<
    REST: 2,
    // ...
    LT: 3,
    // <
    GT: 4,
    // >
    LPAREN: 5,
    // (
    RPAREN: 6,
    // )
    LBRACE: 7,
    // {
    RBRACE: 8,
    // }
    LBRACK: 9,
    // [
    RBRACK: 10,
    // ]
    COMMA: 11,
    // ,
    COLON: 12,
    // :
    STAR: 13,
    // *
    PIPE: 14,
    // |
    QUESTION: 15,
    // ?
    BANG: 16,
    // !
    EQUAL: 17,
    // =
    NAME: 18,
    // name token
    STRING: 19,
    // string
    NUMBER: 20,
    // number
    EOF: 21
  };
  function isTypeName(ch) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(ch)) === -1 && !esutils.code.isWhiteSpace(ch) && !esutils.code.isLineTerminator(ch);
  }
  function Context(previous2, index2, token2, value2) {
    this._previous = previous2;
    this._index = index2;
    this._token = token2;
    this._value = value2;
  }
  Context.prototype.restore = function() {
    previous = this._previous;
    index = this._index;
    token = this._token;
    value = this._value;
  };
  Context.save = function() {
    return new Context(previous, index, token, value);
  };
  function maybeAddRange(node, range) {
    if (addRange) {
      node.range = [range[0] + rangeOffset, range[1] + rangeOffset];
    }
    return node;
  }
  function advance() {
    var ch = source.charAt(index);
    index += 1;
    return ch;
  }
  function scanHexEscape(prefix) {
    var i, len, ch, code2 = 0;
    len = prefix === "u" ? 4 : 2;
    for (i = 0; i < len; ++i) {
      if (index < length && esutils.code.isHexDigit(source.charCodeAt(index))) {
        ch = advance();
        code2 = code2 * 16 + "0123456789abcdef".indexOf(ch.toLowerCase());
      } else {
        return "";
      }
    }
    return String.fromCharCode(code2);
  }
  function scanString() {
    var str2 = "", quote, ch, code2, unescaped, restore;
    quote = source.charAt(index);
    ++index;
    while (index < length) {
      ch = advance();
      if (ch === quote) {
        quote = "";
        break;
      } else if (ch === "\\") {
        ch = advance();
        if (!esutils.code.isLineTerminator(ch.charCodeAt(0))) {
          switch (ch) {
            case "n":
              str2 += "\n";
              break;
            case "r":
              str2 += "\r";
              break;
            case "t":
              str2 += "	";
              break;
            case "u":
            case "x":
              restore = index;
              unescaped = scanHexEscape(ch);
              if (unescaped) {
                str2 += unescaped;
              } else {
                index = restore;
                str2 += ch;
              }
              break;
            case "b":
              str2 += "\b";
              break;
            case "f":
              str2 += "\f";
              break;
            case "v":
              str2 += "\v";
              break;
            default:
              if (esutils.code.isOctalDigit(ch.charCodeAt(0))) {
                code2 = "01234567".indexOf(ch);
                if (index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                  code2 = code2 * 8 + "01234567".indexOf(advance());
                  if ("0123".indexOf(ch) >= 0 && index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                    code2 = code2 * 8 + "01234567".indexOf(advance());
                  }
                }
                str2 += String.fromCharCode(code2);
              } else {
                str2 += ch;
              }
              break;
          }
        } else {
          if (ch === "\r" && source.charCodeAt(index) === 10) {
            ++index;
          }
        }
      } else if (esutils.code.isLineTerminator(ch.charCodeAt(0))) {
        break;
      } else {
        str2 += ch;
      }
    }
    if (quote !== "") {
      utility$1.throwError("unexpected quote");
    }
    value = str2;
    return Token.STRING;
  }
  function scanNumber() {
    var number, ch;
    number = "";
    ch = source.charCodeAt(index);
    if (ch !== 46) {
      number = advance();
      ch = source.charCodeAt(index);
      if (number === "0") {
        if (ch === 120 || ch === 88) {
          number += advance();
          while (index < length) {
            ch = source.charCodeAt(index);
            if (!esutils.code.isHexDigit(ch)) {
              break;
            }
            number += advance();
          }
          if (number.length <= 2) {
            utility$1.throwError("unexpected token");
          }
          if (index < length) {
            ch = source.charCodeAt(index);
            if (esutils.code.isIdentifierStartES5(ch)) {
              utility$1.throwError("unexpected token");
            }
          }
          value = parseInt(number, 16);
          return Token.NUMBER;
        }
        if (esutils.code.isOctalDigit(ch)) {
          number += advance();
          while (index < length) {
            ch = source.charCodeAt(index);
            if (!esutils.code.isOctalDigit(ch)) {
              break;
            }
            number += advance();
          }
          if (index < length) {
            ch = source.charCodeAt(index);
            if (esutils.code.isIdentifierStartES5(ch) || esutils.code.isDecimalDigit(ch)) {
              utility$1.throwError("unexpected token");
            }
          }
          value = parseInt(number, 8);
          return Token.NUMBER;
        }
        if (esutils.code.isDecimalDigit(ch)) {
          utility$1.throwError("unexpected token");
        }
      }
      while (index < length) {
        ch = source.charCodeAt(index);
        if (!esutils.code.isDecimalDigit(ch)) {
          break;
        }
        number += advance();
      }
    }
    if (ch === 46) {
      number += advance();
      while (index < length) {
        ch = source.charCodeAt(index);
        if (!esutils.code.isDecimalDigit(ch)) {
          break;
        }
        number += advance();
      }
    }
    if (ch === 101 || ch === 69) {
      number += advance();
      ch = source.charCodeAt(index);
      if (ch === 43 || ch === 45) {
        number += advance();
      }
      ch = source.charCodeAt(index);
      if (esutils.code.isDecimalDigit(ch)) {
        number += advance();
        while (index < length) {
          ch = source.charCodeAt(index);
          if (!esutils.code.isDecimalDigit(ch)) {
            break;
          }
          number += advance();
        }
      } else {
        utility$1.throwError("unexpected token");
      }
    }
    if (index < length) {
      ch = source.charCodeAt(index);
      if (esutils.code.isIdentifierStartES5(ch)) {
        utility$1.throwError("unexpected token");
      }
    }
    value = parseFloat(number);
    return Token.NUMBER;
  }
  function scanTypeName() {
    var ch, ch2;
    value = advance();
    while (index < length && isTypeName(source.charCodeAt(index))) {
      ch = source.charCodeAt(index);
      if (ch === 46) {
        if (index + 1 >= length) {
          return Token.ILLEGAL;
        }
        ch2 = source.charCodeAt(index + 1);
        if (ch2 === 60) {
          break;
        }
      }
      value += advance();
    }
    return Token.NAME;
  }
  function next() {
    var ch;
    previous = index;
    while (index < length && esutils.code.isWhiteSpace(source.charCodeAt(index))) {
      advance();
    }
    if (index >= length) {
      token = Token.EOF;
      return token;
    }
    ch = source.charCodeAt(index);
    switch (ch) {
      case 39:
      case 34:
        token = scanString();
        return token;
      case 58:
        advance();
        token = Token.COLON;
        return token;
      case 44:
        advance();
        token = Token.COMMA;
        return token;
      case 40:
        advance();
        token = Token.LPAREN;
        return token;
      case 41:
        advance();
        token = Token.RPAREN;
        return token;
      case 91:
        advance();
        token = Token.LBRACK;
        return token;
      case 93:
        advance();
        token = Token.RBRACK;
        return token;
      case 123:
        advance();
        token = Token.LBRACE;
        return token;
      case 125:
        advance();
        token = Token.RBRACE;
        return token;
      case 46:
        if (index + 1 < length) {
          ch = source.charCodeAt(index + 1);
          if (ch === 60) {
            advance();
            advance();
            token = Token.DOT_LT;
            return token;
          }
          if (ch === 46 && index + 2 < length && source.charCodeAt(index + 2) === 46) {
            advance();
            advance();
            advance();
            token = Token.REST;
            return token;
          }
          if (esutils.code.isDecimalDigit(ch)) {
            token = scanNumber();
            return token;
          }
        }
        token = Token.ILLEGAL;
        return token;
      case 60:
        advance();
        token = Token.LT;
        return token;
      case 62:
        advance();
        token = Token.GT;
        return token;
      case 42:
        advance();
        token = Token.STAR;
        return token;
      case 124:
        advance();
        token = Token.PIPE;
        return token;
      case 63:
        advance();
        token = Token.QUESTION;
        return token;
      case 33:
        advance();
        token = Token.BANG;
        return token;
      case 61:
        advance();
        token = Token.EQUAL;
        return token;
      case 45:
        token = scanNumber();
        return token;
      default:
        if (esutils.code.isDecimalDigit(ch)) {
          token = scanNumber();
          return token;
        }
        utility$1.assert(isTypeName(ch));
        token = scanTypeName();
        return token;
    }
  }
  function consume(target, text) {
    utility$1.assert(token === target, text || "consumed token not matched");
    next();
  }
  function expect(target, message) {
    if (token !== target) {
      utility$1.throwError(message || "unexpected token");
    }
    next();
  }
  function parseUnionType() {
    var elements, startIndex = index - 1;
    consume(Token.LPAREN, "UnionType should start with (");
    elements = [];
    if (token !== Token.RPAREN) {
      while (true) {
        elements.push(parseTypeExpression());
        if (token === Token.RPAREN) {
          break;
        }
        expect(Token.PIPE);
      }
    }
    consume(Token.RPAREN, "UnionType should end with )");
    return maybeAddRange({
      type: Syntax.UnionType,
      elements
    }, [startIndex, previous]);
  }
  function parseArrayType() {
    var elements, startIndex = index - 1, restStartIndex;
    consume(Token.LBRACK, "ArrayType should start with [");
    elements = [];
    while (token !== Token.RBRACK) {
      if (token === Token.REST) {
        restStartIndex = index - 3;
        consume(Token.REST);
        elements.push(maybeAddRange({
          type: Syntax.RestType,
          expression: parseTypeExpression()
        }, [restStartIndex, previous]));
        break;
      } else {
        elements.push(parseTypeExpression());
      }
      if (token !== Token.RBRACK) {
        expect(Token.COMMA);
      }
    }
    expect(Token.RBRACK);
    return maybeAddRange({
      type: Syntax.ArrayType,
      elements
    }, [startIndex, previous]);
  }
  function parseFieldName() {
    var v = value;
    if (token === Token.NAME || token === Token.STRING) {
      next();
      return v;
    }
    if (token === Token.NUMBER) {
      consume(Token.NUMBER);
      return String(v);
    }
    utility$1.throwError("unexpected token");
  }
  function parseFieldType() {
    var key, rangeStart = previous;
    key = parseFieldName();
    if (token === Token.COLON) {
      consume(Token.COLON);
      return maybeAddRange({
        type: Syntax.FieldType,
        key,
        value: parseTypeExpression()
      }, [rangeStart, previous]);
    }
    return maybeAddRange({
      type: Syntax.FieldType,
      key,
      value: null
    }, [rangeStart, previous]);
  }
  function parseRecordType() {
    var fields, rangeStart = index - 1, rangeEnd;
    consume(Token.LBRACE, "RecordType should start with {");
    fields = [];
    if (token === Token.COMMA) {
      consume(Token.COMMA);
    } else {
      while (token !== Token.RBRACE) {
        fields.push(parseFieldType());
        if (token !== Token.RBRACE) {
          expect(Token.COMMA);
        }
      }
    }
    rangeEnd = index;
    expect(Token.RBRACE);
    return maybeAddRange({
      type: Syntax.RecordType,
      fields
    }, [rangeStart, rangeEnd]);
  }
  function parseNameExpression() {
    var name2 = value, rangeStart = index - name2.length;
    expect(Token.NAME);
    if (token === Token.COLON && (name2 === "module" || name2 === "external" || name2 === "event")) {
      consume(Token.COLON);
      name2 += ":" + value;
      expect(Token.NAME);
    }
    return maybeAddRange({
      type: Syntax.NameExpression,
      name: name2
    }, [rangeStart, previous]);
  }
  function parseTypeExpressionList() {
    var elements = [];
    elements.push(parseTop());
    while (token === Token.COMMA) {
      consume(Token.COMMA);
      elements.push(parseTop());
    }
    return elements;
  }
  function parseTypeName() {
    var expr, applications, startIndex = index - value.length;
    expr = parseNameExpression();
    if (token === Token.DOT_LT || token === Token.LT) {
      next();
      applications = parseTypeExpressionList();
      expect(Token.GT);
      return maybeAddRange({
        type: Syntax.TypeApplication,
        expression: expr,
        applications
      }, [startIndex, previous]);
    }
    return expr;
  }
  function parseResultType() {
    consume(Token.COLON, "ResultType should start with :");
    if (token === Token.NAME && value === "void") {
      consume(Token.NAME);
      return {
        type: Syntax.VoidLiteral
      };
    }
    return parseTypeExpression();
  }
  function parseParametersType() {
    var params = [], optionalSequence = false, expr, rest = false, startIndex, restStartIndex = index - 3, nameStartIndex;
    while (token !== Token.RPAREN) {
      if (token === Token.REST) {
        consume(Token.REST);
        rest = true;
      }
      startIndex = previous;
      expr = parseTypeExpression();
      if (expr.type === Syntax.NameExpression && token === Token.COLON) {
        nameStartIndex = previous - expr.name.length;
        consume(Token.COLON);
        expr = maybeAddRange({
          type: Syntax.ParameterType,
          name: expr.name,
          expression: parseTypeExpression()
        }, [nameStartIndex, previous]);
      }
      if (token === Token.EQUAL) {
        consume(Token.EQUAL);
        expr = maybeAddRange({
          type: Syntax.OptionalType,
          expression: expr
        }, [startIndex, previous]);
        optionalSequence = true;
      } else {
        if (optionalSequence) {
          utility$1.throwError("unexpected token");
        }
      }
      if (rest) {
        expr = maybeAddRange({
          type: Syntax.RestType,
          expression: expr
        }, [restStartIndex, previous]);
      }
      params.push(expr);
      if (token !== Token.RPAREN) {
        expect(Token.COMMA);
      }
    }
    return params;
  }
  function parseFunctionType() {
    var isNew, thisBinding, params, result, fnType, startIndex = index - value.length;
    utility$1.assert(token === Token.NAME && value === "function", "FunctionType should start with 'function'");
    consume(Token.NAME);
    expect(Token.LPAREN);
    isNew = false;
    params = [];
    thisBinding = null;
    if (token !== Token.RPAREN) {
      if (token === Token.NAME && (value === "this" || value === "new")) {
        isNew = value === "new";
        consume(Token.NAME);
        expect(Token.COLON);
        thisBinding = parseTypeName();
        if (token === Token.COMMA) {
          consume(Token.COMMA);
          params = parseParametersType();
        }
      } else {
        params = parseParametersType();
      }
    }
    expect(Token.RPAREN);
    result = null;
    if (token === Token.COLON) {
      result = parseResultType();
    }
    fnType = maybeAddRange({
      type: Syntax.FunctionType,
      params,
      result
    }, [startIndex, previous]);
    if (thisBinding) {
      fnType["this"] = thisBinding;
      if (isNew) {
        fnType["new"] = true;
      }
    }
    return fnType;
  }
  function parseBasicTypeExpression() {
    var context, startIndex;
    switch (token) {
      case Token.STAR:
        consume(Token.STAR);
        return maybeAddRange({
          type: Syntax.AllLiteral
        }, [previous - 1, previous]);
      case Token.LPAREN:
        return parseUnionType();
      case Token.LBRACK:
        return parseArrayType();
      case Token.LBRACE:
        return parseRecordType();
      case Token.NAME:
        startIndex = index - value.length;
        if (value === "null") {
          consume(Token.NAME);
          return maybeAddRange({
            type: Syntax.NullLiteral
          }, [startIndex, previous]);
        }
        if (value === "undefined") {
          consume(Token.NAME);
          return maybeAddRange({
            type: Syntax.UndefinedLiteral
          }, [startIndex, previous]);
        }
        if (value === "true" || value === "false") {
          consume(Token.NAME);
          return maybeAddRange({
            type: Syntax.BooleanLiteralType,
            value: value === "true"
          }, [startIndex, previous]);
        }
        context = Context.save();
        if (value === "function") {
          try {
            return parseFunctionType();
          } catch (e) {
            context.restore();
          }
        }
        return parseTypeName();
      case Token.STRING:
        next();
        return maybeAddRange({
          type: Syntax.StringLiteralType,
          value
        }, [previous - value.length - 2, previous]);
      case Token.NUMBER:
        next();
        return maybeAddRange({
          type: Syntax.NumericLiteralType,
          value
        }, [previous - String(value).length, previous]);
      default:
        utility$1.throwError("unexpected token");
    }
  }
  function parseTypeExpression() {
    var expr, rangeStart;
    if (token === Token.QUESTION) {
      rangeStart = index - 1;
      consume(Token.QUESTION);
      if (token === Token.COMMA || token === Token.EQUAL || token === Token.RBRACE || token === Token.RPAREN || token === Token.PIPE || token === Token.EOF || token === Token.RBRACK || token === Token.GT) {
        return maybeAddRange({
          type: Syntax.NullableLiteral
        }, [rangeStart, previous]);
      }
      return maybeAddRange({
        type: Syntax.NullableType,
        expression: parseBasicTypeExpression(),
        prefix: true
      }, [rangeStart, previous]);
    } else if (token === Token.BANG) {
      rangeStart = index - 1;
      consume(Token.BANG);
      return maybeAddRange({
        type: Syntax.NonNullableType,
        expression: parseBasicTypeExpression(),
        prefix: true
      }, [rangeStart, previous]);
    } else {
      rangeStart = previous;
    }
    expr = parseBasicTypeExpression();
    if (token === Token.BANG) {
      consume(Token.BANG);
      return maybeAddRange({
        type: Syntax.NonNullableType,
        expression: expr,
        prefix: false
      }, [rangeStart, previous]);
    }
    if (token === Token.QUESTION) {
      consume(Token.QUESTION);
      return maybeAddRange({
        type: Syntax.NullableType,
        expression: expr,
        prefix: false
      }, [rangeStart, previous]);
    }
    if (token === Token.LBRACK) {
      consume(Token.LBRACK);
      expect(Token.RBRACK, "expected an array-style type declaration (" + value + "[])");
      return maybeAddRange({
        type: Syntax.TypeApplication,
        expression: maybeAddRange({
          type: Syntax.NameExpression,
          name: "Array"
        }, [rangeStart, previous]),
        applications: [expr]
      }, [rangeStart, previous]);
    }
    return expr;
  }
  function parseTop() {
    var expr, elements;
    expr = parseTypeExpression();
    if (token !== Token.PIPE) {
      return expr;
    }
    elements = [expr];
    consume(Token.PIPE);
    while (true) {
      elements.push(parseTypeExpression());
      if (token !== Token.PIPE) {
        break;
      }
      consume(Token.PIPE);
    }
    return maybeAddRange({
      type: Syntax.UnionType,
      elements
    }, [0, index]);
  }
  function parseTopParamType() {
    var expr;
    if (token === Token.REST) {
      consume(Token.REST);
      return maybeAddRange({
        type: Syntax.RestType,
        expression: parseTop()
      }, [0, index]);
    }
    expr = parseTop();
    if (token === Token.EQUAL) {
      consume(Token.EQUAL);
      return maybeAddRange({
        type: Syntax.OptionalType,
        expression: expr
      }, [0, index]);
    }
    return expr;
  }
  function parseType(src, opt) {
    var expr;
    source = src;
    length = source.length;
    index = 0;
    previous = 0;
    addRange = opt && opt.range;
    rangeOffset = opt && opt.startIndex || 0;
    next();
    expr = parseTop();
    if (opt && opt.midstream) {
      return {
        expression: expr,
        index: previous
      };
    }
    if (token !== Token.EOF) {
      utility$1.throwError("not reach to EOF");
    }
    return expr;
  }
  function parseParamType(src, opt) {
    var expr;
    source = src;
    length = source.length;
    index = 0;
    previous = 0;
    addRange = opt && opt.range;
    rangeOffset = opt && opt.startIndex || 0;
    next();
    expr = parseTopParamType();
    if (opt && opt.midstream) {
      return {
        expression: expr,
        index: previous
      };
    }
    if (token !== Token.EOF) {
      utility$1.throwError("not reach to EOF");
    }
    return expr;
  }
  function stringifyImpl(node, compact, topLevel) {
    var result, i, iz;
    switch (node.type) {
      case Syntax.NullableLiteral:
        result = "?";
        break;
      case Syntax.AllLiteral:
        result = "*";
        break;
      case Syntax.NullLiteral:
        result = "null";
        break;
      case Syntax.UndefinedLiteral:
        result = "undefined";
        break;
      case Syntax.VoidLiteral:
        result = "void";
        break;
      case Syntax.UnionType:
        if (!topLevel) {
          result = "(";
        } else {
          result = "";
        }
        for (i = 0, iz = node.elements.length; i < iz; ++i) {
          result += stringifyImpl(node.elements[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "|" : " | ";
          }
        }
        if (!topLevel) {
          result += ")";
        }
        break;
      case Syntax.ArrayType:
        result = "[";
        for (i = 0, iz = node.elements.length; i < iz; ++i) {
          result += stringifyImpl(node.elements[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += "]";
        break;
      case Syntax.RecordType:
        result = "{";
        for (i = 0, iz = node.fields.length; i < iz; ++i) {
          result += stringifyImpl(node.fields[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += "}";
        break;
      case Syntax.FieldType:
        if (node.value) {
          result = node.key + (compact ? ":" : ": ") + stringifyImpl(node.value, compact);
        } else {
          result = node.key;
        }
        break;
      case Syntax.FunctionType:
        result = compact ? "function(" : "function (";
        if (node["this"]) {
          if (node["new"]) {
            result += compact ? "new:" : "new: ";
          } else {
            result += compact ? "this:" : "this: ";
          }
          result += stringifyImpl(node["this"], compact);
          if (node.params.length !== 0) {
            result += compact ? "," : ", ";
          }
        }
        for (i = 0, iz = node.params.length; i < iz; ++i) {
          result += stringifyImpl(node.params[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += ")";
        if (node.result) {
          result += (compact ? ":" : ": ") + stringifyImpl(node.result, compact);
        }
        break;
      case Syntax.ParameterType:
        result = node.name + (compact ? ":" : ": ") + stringifyImpl(node.expression, compact);
        break;
      case Syntax.RestType:
        result = "...";
        if (node.expression) {
          result += stringifyImpl(node.expression, compact);
        }
        break;
      case Syntax.NonNullableType:
        if (node.prefix) {
          result = "!" + stringifyImpl(node.expression, compact);
        } else {
          result = stringifyImpl(node.expression, compact) + "!";
        }
        break;
      case Syntax.OptionalType:
        result = stringifyImpl(node.expression, compact) + "=";
        break;
      case Syntax.NullableType:
        if (node.prefix) {
          result = "?" + stringifyImpl(node.expression, compact);
        } else {
          result = stringifyImpl(node.expression, compact) + "?";
        }
        break;
      case Syntax.NameExpression:
        result = node.name;
        break;
      case Syntax.TypeApplication:
        result = stringifyImpl(node.expression, compact) + ".<";
        for (i = 0, iz = node.applications.length; i < iz; ++i) {
          result += stringifyImpl(node.applications[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += ">";
        break;
      case Syntax.StringLiteralType:
        result = '"' + node.value + '"';
        break;
      case Syntax.NumericLiteralType:
        result = String(node.value);
        break;
      case Syntax.BooleanLiteralType:
        result = String(node.value);
        break;
      default:
        utility$1.throwError("Unknown type " + node.type);
    }
    return result;
  }
  function stringify(node, options) {
    if (options == null) {
      options = {};
    }
    return stringifyImpl(node, options.compact, options.topLevel);
  }
  typed.parseType = parseType;
  typed.parseParamType = parseParamType;
  typed.stringify = stringify;
  typed.Syntax = Syntax;
})();
(function(exports) {
  (function() {
    var typed$1, utility$1, jsdoc, esutils, hasOwnProperty2;
    esutils = utils;
    typed$1 = typed;
    utility$1 = utility;
    function sliceSource(source, index, last) {
      return source.slice(index, last);
    }
    hasOwnProperty2 = /* @__PURE__ */ function() {
      var func = Object.prototype.hasOwnProperty;
      return function hasOwnProperty3(obj, name2) {
        return func.call(obj, name2);
      };
    }();
    function shallowCopy(obj) {
      var ret = {}, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key];
        }
      }
      return ret;
    }
    function isASCIIAlphanumeric(ch) {
      return ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90 || ch >= 48 && ch <= 57;
    }
    function isParamTitle(title) {
      return title === "param" || title === "argument" || title === "arg";
    }
    function isReturnTitle(title) {
      return title === "return" || title === "returns";
    }
    function isProperty(title) {
      return title === "property" || title === "prop";
    }
    function isNameParameterRequired(title) {
      return isParamTitle(title) || isProperty(title) || title === "alias" || title === "this" || title === "mixes" || title === "requires";
    }
    function isAllowedName(title) {
      return isNameParameterRequired(title) || title === "const" || title === "constant";
    }
    function isAllowedNested(title) {
      return isProperty(title) || isParamTitle(title);
    }
    function isAllowedOptional(title) {
      return isProperty(title) || isParamTitle(title);
    }
    function isTypeParameterRequired(title) {
      return isParamTitle(title) || isReturnTitle(title) || title === "define" || title === "enum" || title === "implements" || title === "this" || title === "type" || title === "typedef" || isProperty(title);
    }
    function isAllowedType(title) {
      return isTypeParameterRequired(title) || title === "throws" || title === "const" || title === "constant" || title === "namespace" || title === "member" || title === "var" || title === "module" || title === "constructor" || title === "class" || title === "extends" || title === "augments" || title === "public" || title === "private" || title === "protected";
    }
    var WHITESPACE = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]";
    var STAR_MATCHER = "(" + WHITESPACE + "*(?:\\*" + WHITESPACE + "?)?)(.+|[\r\n\u2028\u2029])";
    function unwrapComment(doc) {
      return doc.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(STAR_MATCHER, "g"), "$2").replace(/\s*$/, "");
    }
    function convertUnwrappedCommentIndex(originalSource, unwrappedIndex) {
      var replacedSource = originalSource.replace(/^\/\*\*?/, "");
      var numSkippedChars = 0;
      var matcher = new RegExp(STAR_MATCHER, "g");
      var match;
      while (match = matcher.exec(replacedSource)) {
        numSkippedChars += match[1].length;
        if (match.index + match[0].length > unwrappedIndex + numSkippedChars) {
          return unwrappedIndex + numSkippedChars + originalSource.length - replacedSource.length;
        }
      }
      return originalSource.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(exports2) {
      var Rules, index, lineNumber, length, source, originalSource, recoverable, sloppy, strict;
      function advance() {
        var ch = source.charCodeAt(index);
        index += 1;
        if (esutils.code.isLineTerminator(ch) && !(ch === 13 && source.charCodeAt(index) === 10)) {
          lineNumber += 1;
        }
        return String.fromCharCode(ch);
      }
      function scanTitle() {
        var title = "";
        advance();
        while (index < length && isASCIIAlphanumeric(source.charCodeAt(index))) {
          title += advance();
        }
        return title;
      }
      function seekContent() {
        var ch, waiting, last = index;
        waiting = false;
        while (last < length) {
          ch = source.charCodeAt(last);
          if (esutils.code.isLineTerminator(ch) && !(ch === 13 && source.charCodeAt(last + 1) === 10)) {
            waiting = true;
          } else if (waiting) {
            if (ch === 64) {
              break;
            }
            if (!esutils.code.isWhiteSpace(ch)) {
              waiting = false;
            }
          }
          last += 1;
        }
        return last;
      }
      function parseType(title, last, addRange) {
        var ch, brace, type, startIndex, direct = false;
        while (index < last) {
          ch = source.charCodeAt(index);
          if (esutils.code.isWhiteSpace(ch)) {
            advance();
          } else if (ch === 123) {
            advance();
            break;
          } else {
            direct = true;
            break;
          }
        }
        if (direct) {
          return null;
        }
        brace = 1;
        type = "";
        while (index < last) {
          ch = source.charCodeAt(index);
          if (esutils.code.isLineTerminator(ch)) {
            advance();
          } else {
            if (ch === 125) {
              brace -= 1;
              if (brace === 0) {
                advance();
                break;
              }
            } else if (ch === 123) {
              brace += 1;
            }
            if (type === "") {
              startIndex = index;
            }
            type += advance();
          }
        }
        if (brace !== 0) {
          return utility$1.throwError("Braces are not balanced");
        }
        if (isAllowedOptional(title)) {
          return typed$1.parseParamType(type, { startIndex: convertIndex(startIndex), range: addRange });
        }
        return typed$1.parseType(type, { startIndex: convertIndex(startIndex), range: addRange });
      }
      function scanIdentifier(last) {
        var identifier;
        if (!esutils.code.isIdentifierStartES5(source.charCodeAt(index)) && !source[index].match(/[0-9]/)) {
          return null;
        }
        identifier = advance();
        while (index < last && esutils.code.isIdentifierPartES5(source.charCodeAt(index))) {
          identifier += advance();
        }
        return identifier;
      }
      function skipWhiteSpace(last) {
        while (index < last && (esutils.code.isWhiteSpace(source.charCodeAt(index)) || esutils.code.isLineTerminator(source.charCodeAt(index)))) {
          advance();
        }
      }
      function parseName(last, allowBrackets, allowNestedParams) {
        var name2 = "", useBrackets, insideString;
        skipWhiteSpace(last);
        if (index >= last) {
          return null;
        }
        if (source.charCodeAt(index) === 91) {
          if (allowBrackets) {
            useBrackets = true;
            name2 = advance();
          } else {
            return null;
          }
        }
        name2 += scanIdentifier(last);
        if (allowNestedParams) {
          if (source.charCodeAt(index) === 58 && (name2 === "module" || name2 === "external" || name2 === "event")) {
            name2 += advance();
            name2 += scanIdentifier(last);
          }
          if (source.charCodeAt(index) === 91 && source.charCodeAt(index + 1) === 93) {
            name2 += advance();
            name2 += advance();
          }
          while (source.charCodeAt(index) === 46 || source.charCodeAt(index) === 47 || source.charCodeAt(index) === 35 || source.charCodeAt(index) === 45 || source.charCodeAt(index) === 126) {
            name2 += advance();
            name2 += scanIdentifier(last);
          }
        }
        if (useBrackets) {
          skipWhiteSpace(last);
          if (source.charCodeAt(index) === 61) {
            name2 += advance();
            skipWhiteSpace(last);
            var ch;
            var bracketDepth = 1;
            while (index < last) {
              ch = source.charCodeAt(index);
              if (esutils.code.isWhiteSpace(ch)) {
                if (!insideString) {
                  skipWhiteSpace(last);
                  ch = source.charCodeAt(index);
                }
              }
              if (ch === 39) {
                if (!insideString) {
                  insideString = "'";
                } else {
                  if (insideString === "'") {
                    insideString = "";
                  }
                }
              }
              if (ch === 34) {
                if (!insideString) {
                  insideString = '"';
                } else {
                  if (insideString === '"') {
                    insideString = "";
                  }
                }
              }
              if (ch === 91) {
                bracketDepth++;
              } else if (ch === 93 && --bracketDepth === 0) {
                break;
              }
              name2 += advance();
            }
          }
          skipWhiteSpace(last);
          if (index >= last || source.charCodeAt(index) !== 93) {
            return null;
          }
          name2 += advance();
        }
        return name2;
      }
      function skipToTag() {
        while (index < length && source.charCodeAt(index) !== 64) {
          advance();
        }
        if (index >= length) {
          return false;
        }
        utility$1.assert(
          source.charCodeAt(index) === 64
          /* '@' */
        );
        return true;
      }
      function convertIndex(rangeIndex) {
        if (source === originalSource) {
          return rangeIndex;
        }
        return convertUnwrappedCommentIndex(originalSource, rangeIndex);
      }
      function TagParser(options, title) {
        this._options = options;
        this._title = title.toLowerCase();
        this._tag = {
          title,
          description: null
        };
        if (this._options.lineNumbers) {
          this._tag.lineNumber = lineNumber;
        }
        this._first = index - title.length - 1;
        this._last = 0;
        this._extra = {};
      }
      TagParser.prototype.addError = function addError(errorText) {
        var args = Array.prototype.slice.call(arguments, 1), msg = errorText.replace(
          /%(\d)/g,
          function(whole, index2) {
            utility$1.assert(index2 < args.length, "Message reference must be in range");
            return args[index2];
          }
        );
        if (!this._tag.errors) {
          this._tag.errors = [];
        }
        if (strict) {
          utility$1.throwError(msg);
        }
        this._tag.errors.push(msg);
        return recoverable;
      };
      TagParser.prototype.parseType = function() {
        if (isTypeParameterRequired(this._title)) {
          try {
            this._tag.type = parseType(this._title, this._last, this._options.range);
            if (!this._tag.type) {
              if (!isParamTitle(this._title) && !isReturnTitle(this._title)) {
                if (!this.addError("Missing or invalid tag type")) {
                  return false;
                }
              }
            }
          } catch (error) {
            this._tag.type = null;
            if (!this.addError(error.message)) {
              return false;
            }
          }
        } else if (isAllowedType(this._title)) {
          try {
            this._tag.type = parseType(this._title, this._last, this._options.range);
          } catch (e) {
          }
        }
        return true;
      };
      TagParser.prototype._parseNamePath = function(optional) {
        var name2;
        name2 = parseName(this._last, sloppy && isAllowedOptional(this._title), true);
        if (!name2) {
          if (!optional) {
            if (!this.addError("Missing or invalid tag name")) {
              return false;
            }
          }
        }
        this._tag.name = name2;
        return true;
      };
      TagParser.prototype.parseNamePath = function() {
        return this._parseNamePath(false);
      };
      TagParser.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(true);
      };
      TagParser.prototype.parseName = function() {
        var assign, name2;
        if (isAllowedName(this._title)) {
          this._tag.name = parseName(this._last, sloppy && isAllowedOptional(this._title), isAllowedNested(this._title));
          if (!this._tag.name) {
            if (!isNameParameterRequired(this._title)) {
              return true;
            }
            if (isParamTitle(this._title) && this._tag.type && this._tag.type.name) {
              this._extra.name = this._tag.type;
              this._tag.name = this._tag.type.name;
              this._tag.type = null;
            } else {
              if (!this.addError("Missing or invalid tag name")) {
                return false;
              }
            }
          } else {
            name2 = this._tag.name;
            if (name2.charAt(0) === "[" && name2.charAt(name2.length - 1) === "]") {
              assign = name2.substring(1, name2.length - 1).split("=");
              if (assign.length > 1) {
                this._tag["default"] = assign.slice(1).join("=");
              }
              this._tag.name = assign[0];
              if (this._tag.type && this._tag.type.type !== "OptionalType") {
                this._tag.type = {
                  type: "OptionalType",
                  expression: this._tag.type
                };
              }
            }
          }
        }
        return true;
      };
      TagParser.prototype.parseDescription = function parseDescription() {
        var description2 = sliceSource(source, index, this._last).trim();
        if (description2) {
          if (/^-\s+/.test(description2)) {
            description2 = description2.substring(2);
          }
          this._tag.description = description2;
        }
        return true;
      };
      TagParser.prototype.parseCaption = function parseDescription() {
        var description2 = sliceSource(source, index, this._last).trim();
        var captionStartTag = "<caption>";
        var captionEndTag = "</caption>";
        var captionStart = description2.indexOf(captionStartTag);
        var captionEnd = description2.indexOf(captionEndTag);
        if (captionStart >= 0 && captionEnd >= 0) {
          this._tag.caption = description2.substring(
            captionStart + captionStartTag.length,
            captionEnd
          ).trim();
          this._tag.description = description2.substring(captionEnd + captionEndTag.length).trim();
        } else {
          this._tag.description = description2;
        }
        return true;
      };
      TagParser.prototype.parseKind = function parseKind() {
        var kind, kinds;
        kinds = {
          "class": true,
          "constant": true,
          "event": true,
          "external": true,
          "file": true,
          "function": true,
          "member": true,
          "mixin": true,
          "module": true,
          "namespace": true,
          "typedef": true
        };
        kind = sliceSource(source, index, this._last).trim();
        this._tag.kind = kind;
        if (!hasOwnProperty2(kinds, kind)) {
          if (!this.addError("Invalid kind name '%0'", kind)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.parseAccess = function parseAccess() {
        var access;
        access = sliceSource(source, index, this._last).trim();
        this._tag.access = access;
        if (access !== "private" && access !== "protected" && access !== "public") {
          if (!this.addError("Invalid access name '%0'", access)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.parseThis = function parseThis() {
        var value = sliceSource(source, index, this._last).trim();
        if (value && value.charAt(0) === "{") {
          var gotType = this.parseType();
          if (gotType && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType") {
            this._tag.name = this._tag.type.name;
            return true;
          } else {
            return this.addError("Invalid name for this");
          }
        } else {
          return this.parseNamePath();
        }
      };
      TagParser.prototype.parseVariation = function parseVariation() {
        var variation, text;
        text = sliceSource(source, index, this._last).trim();
        variation = parseFloat(text, 10);
        this._tag.variation = variation;
        if (isNaN(variation)) {
          if (!this.addError("Invalid variation '%0'", text)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.ensureEnd = function() {
        var shouldBeEmpty = sliceSource(source, index, this._last).trim();
        if (shouldBeEmpty) {
          if (!this.addError("Unknown content '%0'", shouldBeEmpty)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.epilogue = function epilogue() {
        var description2;
        description2 = this._tag.description;
        if (isAllowedOptional(this._title) && !this._tag.type && description2 && description2.charAt(0) === "[") {
          this._tag.type = this._extra.name;
          if (!this._tag.name) {
            this._tag.name = void 0;
          }
          if (!sloppy) {
            if (!this.addError("Missing or invalid tag name")) {
              return false;
            }
          }
        }
        return true;
      };
      Rules = {
        // http://usejsdoc.org/tags-access.html
        "access": ["parseAccess"],
        // http://usejsdoc.org/tags-alias.html
        "alias": ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-augments.html
        "augments": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-constructor.html
        "constructor": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-constructor.html
        "class": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-extends.html
        "extends": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-example.html
        "example": ["parseCaption"],
        // http://usejsdoc.org/tags-deprecated.html
        "deprecated": ["parseDescription"],
        // http://usejsdoc.org/tags-global.html
        "global": ["ensureEnd"],
        // http://usejsdoc.org/tags-inner.html
        "inner": ["ensureEnd"],
        // http://usejsdoc.org/tags-instance.html
        "instance": ["ensureEnd"],
        // http://usejsdoc.org/tags-kind.html
        "kind": ["parseKind"],
        // http://usejsdoc.org/tags-mixes.html
        "mixes": ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-mixin.html
        "mixin": ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-member.html
        "member": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-method.html
        "method": ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-module.html
        "module": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        "func": ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        "function": ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-member.html
        "var": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-name.html
        "name": ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-namespace.html
        "namespace": ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-private.html
        "private": ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-protected.html
        "protected": ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-public.html
        "public": ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-readonly.html
        "readonly": ["ensureEnd"],
        // http://usejsdoc.org/tags-requires.html
        "requires": ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-since.html
        "since": ["parseDescription"],
        // http://usejsdoc.org/tags-static.html
        "static": ["ensureEnd"],
        // http://usejsdoc.org/tags-summary.html
        "summary": ["parseDescription"],
        // http://usejsdoc.org/tags-this.html
        "this": ["parseThis", "ensureEnd"],
        // http://usejsdoc.org/tags-todo.html
        "todo": ["parseDescription"],
        // http://usejsdoc.org/tags-typedef.html
        "typedef": ["parseType", "parseNamePathOptional"],
        // http://usejsdoc.org/tags-variation.html
        "variation": ["parseVariation"],
        // http://usejsdoc.org/tags-version.html
        "version": ["parseDescription"]
      };
      TagParser.prototype.parse = function parse3() {
        var i, iz, sequences, method;
        if (!this._title) {
          if (!this.addError("Missing or invalid title")) {
            return null;
          }
        }
        this._last = seekContent(this._title);
        if (this._options.range) {
          this._tag.range = [this._first, source.slice(0, this._last).replace(/\s*$/, "").length].map(convertIndex);
        }
        if (hasOwnProperty2(Rules, this._title)) {
          sequences = Rules[this._title];
        } else {
          sequences = ["parseType", "parseName", "parseDescription", "epilogue"];
        }
        for (i = 0, iz = sequences.length; i < iz; ++i) {
          method = sequences[i];
          if (!this[method]()) {
            return null;
          }
        }
        return this._tag;
      };
      function parseTag(options) {
        var title, parser, tag;
        if (!skipToTag()) {
          return null;
        }
        title = scanTitle();
        parser = new TagParser(options, title);
        tag = parser.parse();
        while (index < parser._last) {
          advance();
        }
        return tag;
      }
      function scanJSDocDescription(preserveWhitespace) {
        var description2 = "", ch, atAllowed;
        atAllowed = true;
        while (index < length) {
          ch = source.charCodeAt(index);
          if (atAllowed && ch === 64) {
            break;
          }
          if (esutils.code.isLineTerminator(ch)) {
            atAllowed = true;
          } else if (atAllowed && !esutils.code.isWhiteSpace(ch)) {
            atAllowed = false;
          }
          description2 += advance();
        }
        return preserveWhitespace ? description2 : description2.trim();
      }
      function parse2(comment, options) {
        var tags = [], tag, description2, interestingTags, i, iz;
        if (options === void 0) {
          options = {};
        }
        if (typeof options.unwrap === "boolean" && options.unwrap) {
          source = unwrapComment(comment);
        } else {
          source = comment;
        }
        originalSource = comment;
        if (options.tags) {
          if (Array.isArray(options.tags)) {
            interestingTags = {};
            for (i = 0, iz = options.tags.length; i < iz; i++) {
              if (typeof options.tags[i] === "string") {
                interestingTags[options.tags[i]] = true;
              } else {
                utility$1.throwError('Invalid "tags" parameter: ' + options.tags);
              }
            }
          } else {
            utility$1.throwError('Invalid "tags" parameter: ' + options.tags);
          }
        }
        length = source.length;
        index = 0;
        lineNumber = 0;
        recoverable = options.recoverable;
        sloppy = options.sloppy;
        strict = options.strict;
        description2 = scanJSDocDescription(options.preserveWhitespace);
        while (true) {
          tag = parseTag(options);
          if (!tag) {
            break;
          }
          if (!interestingTags || interestingTags.hasOwnProperty(tag.title)) {
            tags.push(tag);
          }
        }
        return {
          description: description2,
          tags
        };
      }
      exports2.parse = parse2;
    })(jsdoc = {});
    exports.version = utility$1.VERSION;
    exports.parse = jsdoc.parse;
    exports.parseType = typed$1.parseType;
    exports.parseParamType = typed$1.parseParamType;
    exports.unwrapComment = unwrapComment;
    exports.Syntax = shallowCopy(typed$1.Syntax);
    exports.Error = utility$1.DoctrineError;
    exports.type = {
      Syntax: exports.Syntax,
      parseType: typed$1.parseType,
      parseParamType: typed$1.parseParamType,
      stringify: typed$1.stringify
    };
  })();
})(doctrine$1);
const doctrine = /* @__PURE__ */ getDefaultExportFromCjs(doctrine$1);
const { combineParameters } = __STORYBOOK_MODULE_PREVIEW_API__;
var QUOTE_REGEX = /^['"]|['"]$/g, trimQuotes = (str2) => str2.replace(QUOTE_REGEX, ""), includesQuotes = (str2) => QUOTE_REGEX.test(str2), parseLiteral = (str2) => {
  let trimmedValue = trimQuotes(str2);
  return includesQuotes(str2) || Number.isNaN(Number(trimmedValue)) ? trimmedValue : Number(trimmedValue);
};
var convertSig = (type) => {
  switch (type.type) {
    case "function":
      return { name: "function" };
    case "object":
      let values = {};
      return type.signature.properties.forEach((prop) => {
        values[prop.key] = convert(prop.value);
      }), { name: "object", value: values };
    default:
      throw new Error(`Unknown: ${type}`);
  }
}, convert = (type) => {
  var _a, _b, _c, _d;
  let { name: name2, raw } = type, base = {};
  switch (typeof raw < "u" && (base.raw = raw), type.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...base, name: name2 };
    case "Array":
      return { ...base, name: "array", value: type.elements.map(convert) };
    case "signature":
      return { ...base, ...convertSig(type) };
    case "union":
      let result;
      return ((_a = type.elements) == null ? void 0 : _a.every((element) => element.name === "literal")) ? result = { ...base, name: "enum", value: (_b = type.elements) == null ? void 0 : _b.map((v) => parseLiteral(v.value)) } : result = { ...base, name: name2, value: (_c = type.elements) == null ? void 0 : _c.map(convert) }, result;
    case "intersection":
      return { ...base, name: name2, value: (_d = type.elements) == null ? void 0 : _d.map(convert) };
    default:
      return { ...base, name: "other", value: name2 };
  }
};
var isLiteral = (type) => type.name === "literal", toEnumOption = (element) => element.value.replace(/['|"]/g, ""), convertSig2 = (type) => {
  switch (type.type) {
    case "function":
      return { name: "function" };
    case "object":
      let values = {};
      return type.signature.properties.forEach((prop) => {
        values[prop.key] = convert2(prop.value);
      }), { name: "object", value: values };
    default:
      throw new Error(`Unknown: ${type}`);
  }
}, convert2 = (type) => {
  var _a, _b, _c, _d;
  let { name: name2, raw } = type, base = {};
  switch (typeof raw < "u" && (base.raw = raw), type.name) {
    case "literal":
      return { ...base, name: "other", value: type.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...base, name: name2 };
    case "Array":
      return { ...base, name: "array", value: type.elements.map(convert2) };
    case "signature":
      return { ...base, ...convertSig2(type) };
    case "union":
      return ((_a = type.elements) == null ? void 0 : _a.every(isLiteral)) ? { ...base, name: "enum", value: (_b = type.elements) == null ? void 0 : _b.map(toEnumOption) } : { ...base, name: name2, value: (_c = type.elements) == null ? void 0 : _c.map(convert2) };
    case "intersection":
      return { ...base, name: name2, value: (_d = type.elements) == null ? void 0 : _d.map(convert2) };
    default:
      return { ...base, name: "other", value: name2 };
  }
};
var SIGNATURE_REGEXP = /^\(.*\) => /, convert3 = (type) => {
  let { name: name2, raw, computed, value } = type, base = {};
  switch (typeof raw < "u" && (base.raw = raw), name2) {
    case "enum": {
      let values2 = computed ? value : value.map((v) => parseLiteral(v.value));
      return { ...base, name: name2, value: values2 };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...base, name: name2 };
    case "func":
      return { ...base, name: "function" };
    case "bool":
    case "boolean":
      return { ...base, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...base, name: "array", value: value && convert3(value) };
    case "object":
      return { ...base, name: name2 };
    case "objectOf":
      return { ...base, name: name2, value: convert3(value) };
    case "shape":
    case "exact":
      let values = mapValues$1(value, (field) => convert3(field));
      return { ...base, name: "object", value: values };
    case "union":
      return { ...base, name: "union", value: value.map((v) => convert3(v)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((name2 == null ? void 0 : name2.indexOf("|")) > 0)
        try {
          let literalValues = name2.split("|").map((v) => JSON.parse(v));
          return { ...base, name: "enum", value: literalValues };
        } catch {
        }
      let otherVal = value ? `${name2}(${value})` : name2, otherName = SIGNATURE_REGEXP.test(name2) ? "function" : "other";
      return { ...base, name: otherName, value: otherVal };
    }
  }
};
var convert4 = (docgenInfo) => {
  let { type, tsType, flowType } = docgenInfo;
  return type != null ? convert3(type) : tsType != null ? convert(tsType) : flowType != null ? convert2(flowType) : null;
};
var TypeSystem = ((TypeSystem2) => (TypeSystem2.JAVASCRIPT = "JavaScript", TypeSystem2.FLOW = "Flow", TypeSystem2.TYPESCRIPT = "TypeScript", TypeSystem2.UNKNOWN = "Unknown", TypeSystem2))(TypeSystem || {});
var BLACKLIST = ["null", "undefined"];
function isDefaultValueBlacklisted(value) {
  return BLACKLIST.some((x) => x === value);
}
var str = (obj) => {
  if (!obj)
    return "";
  if (typeof obj == "string")
    return obj;
  throw new Error(`Description: expected string, got: ${JSON.stringify(obj)}`);
};
function hasDocgen(component) {
  return !!component.__docgenInfo;
}
function isValidDocgenSection(docgenSection) {
  return docgenSection != null && Object.keys(docgenSection).length > 0;
}
function getDocgenSection(component, section) {
  return hasDocgen(component) ? component.__docgenInfo[section] : null;
}
function getDocgenDescription(component) {
  return hasDocgen(component) ? str(component.__docgenInfo.description) : "";
}
function containsJsDoc(value) {
  return value != null && value.includes("@");
}
function parse(content, tags) {
  let ast2;
  try {
    ast2 = doctrine.parse(content ?? "", { tags, sloppy: true });
  } catch (e) {
    throw console.error(e), new Error("Cannot parse JSDoc tags.");
  }
  return ast2;
}
var DEFAULT_OPTIONS = { tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"] }, parseJsDoc = (value, options = DEFAULT_OPTIONS) => {
  if (!containsJsDoc(value))
    return { includesJsDoc: false, ignore: false };
  let jsDocAst = parse(value, options.tags), extractedTags = extractJsDocTags(jsDocAst);
  return extractedTags.ignore ? { includesJsDoc: true, ignore: true } : { includesJsDoc: true, ignore: false, description: jsDocAst.description, extractedTags };
};
function extractJsDocTags(ast2) {
  let extractedTags = { params: null, deprecated: null, returns: null, ignore: false };
  for (let i = 0; i < ast2.tags.length; i += 1) {
    let tag = ast2.tags[i];
    if (tag.title === "ignore") {
      extractedTags.ignore = true;
      break;
    } else
      switch (tag.title) {
        case "param":
        case "arg":
        case "argument": {
          let paramTag = extractParam(tag);
          paramTag != null && (extractedTags.params == null && (extractedTags.params = []), extractedTags.params.push(paramTag));
          break;
        }
        case "deprecated": {
          let deprecatedTag = extractDeprecated(tag);
          deprecatedTag != null && (extractedTags.deprecated = deprecatedTag);
          break;
        }
        case "returns": {
          let returnsTag = extractReturns(tag);
          returnsTag != null && (extractedTags.returns = returnsTag);
          break;
        }
      }
  }
  return extractedTags;
}
function extractParam(tag) {
  let paramName = tag.name;
  return paramName != null && paramName !== "null-null" ? { name: tag.name, type: tag.type, description: tag.description, getPrettyName: () => paramName.includes("null") ? paramName.replace("-null", "").replace(".null", "") : tag.name, getTypeName: () => tag.type != null ? extractTypeName(tag.type) : null } : null;
}
function extractDeprecated(tag) {
  return tag.title != null ? tag.description : null;
}
function extractReturns(tag) {
  return tag.type != null ? { type: tag.type, description: tag.description, getTypeName: () => extractTypeName(tag.type) } : null;
}
function extractTypeName(type) {
  return (type == null ? void 0 : type.type) === "NameExpression" ? type.name : (type == null ? void 0 : type.type) === "RecordType" ? `({${type.fields.map((field) => {
    if (field.type === "FieldType" && field.value != null) {
      let valueTypeName = extractTypeName(field.value);
      return `${field.key}: ${valueTypeName}`;
    }
    return field.key;
  }).join(", ")}})` : (type == null ? void 0 : type.type) === "UnionType" ? `(${type.elements.map(extractTypeName).join("|")})` : (type == null ? void 0 : type.type) === "ArrayType" ? "[]" : (type == null ? void 0 : type.type) === "TypeApplication" && type.expression != null && type.expression.name === "Array" ? `${extractTypeName(type.applications[0])}[]` : (type == null ? void 0 : type.type) === "NullableType" || (type == null ? void 0 : type.type) === "NonNullableType" || (type == null ? void 0 : type.type) === "OptionalType" ? extractTypeName(type.expression) : (type == null ? void 0 : type.type) === "AllLiteral" ? "any" : null;
}
function isTooLongForTypeSummary(value) {
  return value.length > 90;
}
function isTooLongForDefaultValueSummary(value) {
  return value.length > 50;
}
function createSummaryValue(summary, detail) {
  return summary === detail ? { summary } : { summary, detail };
}
function generateUnionElement({ name: name2, value, elements, raw }) {
  return value ?? (elements != null ? elements.map(generateUnionElement).join(" | ") : raw ?? name2);
}
function generateUnion({ name: name2, raw, elements }) {
  return elements != null ? createSummaryValue(elements.map(generateUnionElement).join(" | ")) : raw != null ? createSummaryValue(raw.replace(/^\|\s*/, "")) : createSummaryValue(name2);
}
function generateFuncSignature({ type, raw }) {
  return raw != null ? createSummaryValue(raw) : createSummaryValue(type);
}
function generateObjectSignature({ type, raw }) {
  return raw != null ? isTooLongForTypeSummary(raw) ? createSummaryValue(type, raw) : createSummaryValue(raw) : createSummaryValue(type);
}
function generateSignature(flowType) {
  let { type } = flowType;
  return type === "object" ? generateObjectSignature(flowType) : generateFuncSignature(flowType);
}
function generateDefault({ name: name2, raw }) {
  return raw != null ? isTooLongForTypeSummary(raw) ? createSummaryValue(name2, raw) : createSummaryValue(raw) : createSummaryValue(name2);
}
function createType(type) {
  if (type == null)
    return null;
  switch (type.name) {
    case "union":
      return generateUnion(type);
    case "signature":
      return generateSignature(type);
    default:
      return generateDefault(type);
  }
}
function createDefaultValue(defaultValue, type) {
  if (defaultValue != null) {
    let { value } = defaultValue;
    if (!isDefaultValueBlacklisted(value))
      return isTooLongForDefaultValueSummary(value) ? createSummaryValue(type == null ? void 0 : type.name, value) : createSummaryValue(value);
  }
  return null;
}
var createFlowPropDef = (propName, docgenInfo) => {
  let { flowType, description: description2, required, defaultValue } = docgenInfo;
  return { name: propName, type: createType(flowType), required, description: description2, defaultValue: createDefaultValue(defaultValue ?? null, flowType ?? null) };
};
function createType2({ tsType, required }) {
  if (tsType == null)
    return null;
  let typeName = tsType.name;
  return required || (typeName = typeName.replace(" | undefined", "")), createSummaryValue(["Array", "Record", "signature"].includes(tsType.name) ? tsType.raw : typeName);
}
function createDefaultValue2({ defaultValue }) {
  if (defaultValue != null) {
    let { value } = defaultValue;
    if (!isDefaultValueBlacklisted(value))
      return createSummaryValue(value);
  }
  return null;
}
var createTsPropDef = (propName, docgenInfo) => {
  let { description: description2, required } = docgenInfo;
  return { name: propName, type: createType2(docgenInfo), required, description: description2, defaultValue: createDefaultValue2(docgenInfo) };
};
function createType3(type) {
  return type != null ? createSummaryValue(type.name) : null;
}
function isReactDocgenTypescript(defaultValue) {
  let { computed, func } = defaultValue;
  return typeof computed > "u" && typeof func > "u";
}
function isStringValued(type) {
  return type ? type.name === "string" ? true : type.name === "enum" ? Array.isArray(type.value) && type.value.every(({ value: tv }) => typeof tv == "string" && tv[0] === '"' && tv[tv.length - 1] === '"') : false : false;
}
function createDefaultValue3(defaultValue, type) {
  if (defaultValue != null) {
    let { value } = defaultValue;
    if (!isDefaultValueBlacklisted(value))
      return isReactDocgenTypescript(defaultValue) && isStringValued(type) ? createSummaryValue(JSON.stringify(value)) : createSummaryValue(value);
  }
  return null;
}
function createBasicPropDef(name2, type, docgenInfo) {
  let { description: description2, required, defaultValue } = docgenInfo;
  return { name: name2, type: createType3(type), required, description: description2, defaultValue: createDefaultValue3(defaultValue, type) };
}
function applyJsDocResult(propDef, jsDocParsingResult) {
  var _a;
  if (jsDocParsingResult == null ? void 0 : jsDocParsingResult.includesJsDoc) {
    let { description: description2, extractedTags } = jsDocParsingResult;
    description2 != null && (propDef.description = jsDocParsingResult.description);
    let value = { ...extractedTags, params: (_a = extractedTags == null ? void 0 : extractedTags.params) == null ? void 0 : _a.map((x) => ({ name: x.getPrettyName(), description: x.description })) };
    Object.values(value).filter(Boolean).length > 0 && (propDef.jsDocTags = value);
  }
  return propDef;
}
var javaScriptFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createBasicPropDef(propName, docgenInfo.type, docgenInfo);
  return propDef.sbType = convert4(docgenInfo), applyJsDocResult(propDef, jsDocParsingResult);
}, tsFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createTsPropDef(propName, docgenInfo);
  return propDef.sbType = convert4(docgenInfo), applyJsDocResult(propDef, jsDocParsingResult);
}, flowFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createFlowPropDef(propName, docgenInfo);
  return propDef.sbType = convert4(docgenInfo), applyJsDocResult(propDef, jsDocParsingResult);
}, unknownFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createBasicPropDef(propName, { name: "unknown" }, docgenInfo);
  return applyJsDocResult(propDef, jsDocParsingResult);
}, getPropDefFactory = (typeSystem) => {
  switch (typeSystem) {
    case "JavaScript":
      return javaScriptFactory;
    case "TypeScript":
      return tsFactory;
    case "Flow":
      return flowFactory;
    default:
      return unknownFactory;
  }
};
var getTypeSystem = (docgenInfo) => docgenInfo.type != null ? "JavaScript" : docgenInfo.flowType != null ? "Flow" : docgenInfo.tsType != null ? "TypeScript" : "Unknown", extractComponentSectionArray = (docgenSection) => {
  let typeSystem = getTypeSystem(docgenSection[0]), createPropDef = getPropDefFactory(typeSystem);
  return docgenSection.map((item) => {
    var _a;
    let sanitizedItem = item;
    return ((_a = item.type) == null ? void 0 : _a.elements) && (sanitizedItem = { ...item, type: { ...item.type, value: item.type.elements } }), extractProp(sanitizedItem.name, sanitizedItem, typeSystem, createPropDef);
  });
}, extractComponentSectionObject = (docgenSection) => {
  let docgenPropsKeys = Object.keys(docgenSection), typeSystem = getTypeSystem(docgenSection[docgenPropsKeys[0]]), createPropDef = getPropDefFactory(typeSystem);
  return docgenPropsKeys.map((propName) => {
    let docgenInfo = docgenSection[propName];
    return docgenInfo != null ? extractProp(propName, docgenInfo, typeSystem, createPropDef) : null;
  }).filter(Boolean);
}, extractComponentProps = (component, section) => {
  let docgenSection = getDocgenSection(component, section);
  return isValidDocgenSection(docgenSection) ? Array.isArray(docgenSection) ? extractComponentSectionArray(docgenSection) : extractComponentSectionObject(docgenSection) : [];
};
function extractProp(propName, docgenInfo, typeSystem, createPropDef) {
  let jsDocParsingResult = parseJsDoc(docgenInfo.description);
  return jsDocParsingResult.includesJsDoc && jsDocParsingResult.ignore ? null : { propDef: createPropDef(propName, docgenInfo, jsDocParsingResult), jsDocTags: jsDocParsingResult.extractedTags, docgenInfo, typeSystem };
}
function extractComponentDescription(component) {
  return component != null ? getDocgenDescription(component) : "";
}
var enhanceArgTypes = (context) => {
  let { component, argTypes: userArgTypes, parameters: { docs = {} } } = context, { extractArgTypes } = docs, extractedArgTypes = extractArgTypes && component ? extractArgTypes(component) : {};
  return extractedArgTypes ? combineParameters(extractedArgTypes, userArgTypes) : userArgTypes;
};
var ADDON_ID = "storybook/docs", SNIPPET_RENDERED = `${ADDON_ID}/snippet-rendered`, SourceType = ((SourceType2) => (SourceType2.AUTO = "auto", SourceType2.CODE = "code", SourceType2.DYNAMIC = "dynamic", SourceType2))(SourceType || {});
export {
  _isPrototype as A,
  _arrayLikeKeys as B,
  isArrayLike_1 as C,
  _baseGetAllKeys as D,
  _arrayMap as E,
  _baseIteratee as F,
  _Set as G,
  _setToArray as H,
  _SetCache as I,
  _cacheHas as J,
  keys_1 as K,
  _Uint8Array as L,
  _Symbol as M,
  _getTag as N,
  _nodeUtilExports as O,
  _baseUnary as P,
  _Stack as Q,
  isBufferExports as R,
  SNIPPET_RENDERED as S,
  TypeSystem as T,
  _getAllKeys as U,
  _root as _,
  isSymbol_1 as a,
  _baseGetTag as b,
  _getPrototype as c,
  isObjectLike_1 as d,
  isArray_1 as e,
  extractComponentDescription as f,
  enhanceArgTypes as g,
  createSummaryValue as h,
  isObject_1 as i,
  getDocgenSection as j,
  SourceType as k,
  isFunction$3 as l,
  hasDocgen as m,
  extractComponentProps as n,
  isTooLongForDefaultValueSummary as o,
  isTooLongForTypeSummary as p,
  _baseAssignValue as q,
  eq_1 as r,
  _castPath as s,
  _isIndex as t,
  utils as u,
  _toKey as v,
  _baseGet as w,
  _arrayPush as x,
  _getSymbols as y,
  stubArray_1 as z
};
