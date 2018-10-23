interface Nothing<T> {
  tag: 'none';
  match: typeof match;
}

interface Something<T> {
  tag: 'some';
  value: T;
  match: typeof match;
}

/**
 * A basic Option monad.
 */
type Possible<T> = Nothing<T> | Something<T>;

/**
 * Elevate a `T` to a `Possible<T>`.
 *
 * @param {T} t
 */
export const possible = <T>(t: T): Possible<T> =>
  t === null || t === undefined 
    ? { tag: 'none', match }
    : { tag: 'some', value: t, match };

/**
 * Applies a function to a `Possible` by matching
 * where it's `something` or `nothing`.
 *
 * @param {Possible<T>} this
 * @param {(T) => R} some
 * @param {() => R} none
 */
function match<T, R>(this: Possible<T>, some: (t: T) => R, none: () => R) {
  switch (this.tag) {
    case 'some':
      return some(this.value);
    case 'none':
      return none();
    default:
      throw new Error('Unexhaustive Possible match');
  }
}
