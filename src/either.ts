interface Right<R>
{
    tag: 'right';
    val: R;
    match: typeof match;
}

interface Left<L>
{
    tag: 'left';
    val: L;
    match: typeof match;
}

/**
 * A basic Choice monad.
 */
type Either<L, R> = Right<R> | Left<L>;

/**
 * Elevate a `R` to an `Either<any, R>`.
 * 
 * @param {R} r
 */
export const Right = <R>(r: R): Either<any, R> =>
    ({ tag: 'right', val: r, match });

/**
 * Elevate a `L` to an `Either<L, any>`.
 * 
 * @param {L} l
 */  
export const Left = <L>(l: L): Either<L, any> =>
    ({ tag: 'left', val: l, match });

/**
 * Applies a function to an `Either` depending on
 * whether it's `Right` of `Left`.
 * 
 * @param {Either<L, R>} this 
 * @param {(R) => Ret} right 
 * @param {(L) => Ret} left 
 */
function match<L, R, Ret>(
    this: Either<L, R>,
    right: (r: R) => Ret,
    left: (l: L) => Ret)
    {
        let result: Ret;

        switch(this.tag)
        {
            case 'right':
                result = right(this.val);
                break;
            case 'left':
                result = left(this.val);
                break;
            default:
                throw new Error('Inexhaustive Either match');
        }

        return result;
    };