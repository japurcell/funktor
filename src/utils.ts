/**
 * Capitalize the first character of a {@link string}.
 *
 * @param text to be capitalized
 * @return the capitalized {@ string}
 */
export const capitalize = (text: string | null) =>
  text && text.length > 0
    ? text.split(' ').map(t => t[0].toUpperCase() + t.slice(1)).join('')
    : '';

/**
 * Creates an {@link Array} from a union parameter
 * of singular and array-like of `T`.
 *
 */
export const arrayOf = <T>(t: T | T[]) =>
  new Array<T>().concat(t);

/**
 * Determines the equality of two objects based
 * on their JSON string representation.
 *
 */
export const equals = <T>(a: T, b: T) =>
  JSON.stringify(a) === JSON.stringify(b);

/**
 * Map a value `T` to a function that generates
 * an `R` from the parameter of `T`.
 *
 */
export const map = <T, R>(t: T, mapFn: (t: T) => R) =>
  mapFn(t);