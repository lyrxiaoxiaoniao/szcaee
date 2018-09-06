/**
 * 深拷贝
 * @param {Object} source 拷贝对象
 * @returns {Object}
 */
export function extend(source) {
  let target;
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {};
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key];
        } else {
          target[key] = extend(source[key]);
        }
      }
    }
  } else {
    target = source;
  }
  return target;
}
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}
export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }
  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
/**
 * 节流函数
 * @param method 事件触发的操作
 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
 */
export function throttle(method, mustRunDelay) {
  let timer, start, args;
  args = arguments;
  return function loop() {
    let self = this;
    let now = Date.now();
    if (!start) {
      start = now;
    }
    if (timer) {
      clearTimeout(timer);
    }
    if (now - start >= mustRunDelay) {
      method.apply(self, args);
      start = now;
    } else {
      timer = setTimeout(function() {
        loop.apply(self, args);
      }, 50);
    }
  };
}

/**
 * 防抖函数
 * @param method 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export function debounce(method, delay) {
  let timer = null;
  return function() {
    let self = this;
    let args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      method.apply(self, args);
    }, delay);
  };
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil((difference / duration) * 50);

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}
