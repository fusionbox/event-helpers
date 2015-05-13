/**
 * event-helpers
 */


/**
 * Returns a decorator that will be called if the predicate passes.
 */
export function ifFn(predicate) {
  return function (target, key, descriptor) {
    let fn = target;

    function decorator() {
      if (predicate.apply(this, arguments)) {
        return fn.apply(this, arguments);
      }
    }

    if (typeof descriptor !== 'undefined') {
      // we are decorating a class method
      fn = descriptor.value;
      descriptor.value = decorator;
      return descriptor;
    }

    return decorator;
  };
}

/**
 * True if no modifiers were depressed (ctrl, shift, alt, meta)
 */
export function isUnmodified(event) {
  return !event.altKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.metaKey;
}

/**
 * True only for unmodified left clicks.
 */
export function isLeftClick(event) {
  return event.button === 0 && isUnmodified(event);
}

/**
 * Same as isLeftClick, but works on the second argument.
 */
export function isLeftClick2(_, event) {
  return isLeftClick(event);
}

export var ifLeftClick = ifFn(isLeftClick);
export var ifLeftClick2 = ifFn(isLeftClick2);

export function killEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

export var killLeftClickEvent = ifLeftClick(killEvent);

/**
 * True if the event key is one of the arguments that were passed in.
 *
 * Usage:
 *
 *    var isEnter = isKeyOf(['Enter']);
 *    var isDigit = isKeyOf('1234567890'.split(''));
 */
export function isKeyOf(whichValues) {
  if (!Array.isArray(whichValues)) {
    throw new TypeError("isKeyOf expects an array");
  }
  return function (event) {
    return whichValues.indexOf(event.key) !== -1;
  };
}

export function ifKeyOf(whichValues) {
  return ifFn(isKeyOf(whichValues));
}
