export const isString = str => Object.prototype.toString.call(str) === '[object String]'

export const isNumber = num => Object.prototype.toString.call(num) === '[object Number]'

export const isBoolean = bool => Object.prototype.toString.call(bool) === '[object Boolean]'

export const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'

export const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

export const isFunction = obj => Object.prototype.toString.call(obj) === '[object Function]'