/**
 * Maps a function to a value.
 *
 * @param t
 * @param f
 */
export const map = <T, R>(t: T, f: (t: T) => R) => 
    f(t);

/**
 * Creates a partially applied function.
 *
 * @param f
 * @param t1
 */
export const par = <T1, T2, R>(f: (t1: T1, t2: T2) => R, t1: T1) => (t2: T2) =>
    f(t1, t2);

/**
 * Composes one function from two.
 *
 * @param g
 * @param f
 */
export const compose = <T1, T2, R>(g: (t1: T1) => T2, f: (t2: T2) => R) => (t1: T1) =>
    f(g(t1));
