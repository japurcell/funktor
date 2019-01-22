/**
 * A function that accepts some previous state `S`
 * and returns a tuple of a value `V` and another
 * state of `S`.
 * */
export type State<V, S> = (state: S) => [V, S];

/**
 * Create an initial state with the given values.
 *
 */
export const initState = <V, S>(v: V, s: S): State<V, S> =>
  _ => [v, s];

/**
 * The monadic bind function.
 *
 */
export const bind = <V, R, S>(state: State<V, S>, binder: (next: [V, S]) => [R, S]): State<R, S> =>
  prev => binder(state(prev));

/**
 * Bind to a function that keeps the same state `S`,
 * but supplies a new value type `R` in place of `V`.
 *
 */
export const mapValue = <V, S, R>(state: State<V, S>, mapper: (next: [V, S]) => R): State<R, S> =>
  bind(state, res => [mapper(res), res[1]]);

/**
 * Bind to a function that keeps the same value `V`,
 * but supplies a new state of type `S`.
 *
 */
export const mapState = <V, S>(state: State<V, S>, mapper: (next: [V, S]) => S): State<V, S> =>
  bind(state, res => [res[0], mapper(res)]);

/**
 * Map a value `T` to a function that generates
 * an `R` from the parameter of `T`.
 *
 */
export const map = <T, R>(t: T, mapFn: (t: T) => R) =>
  mapFn(t);
