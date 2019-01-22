import { equals, map } from './utils';

/**
 * A function type that calculates a boolean given
 * some value of `T`.
 */
export type Predicate<T> = (t: T) => boolean;

declare global
{
  interface Array<T>
  {
    /**
     * Creates a new copy of `this` with {@link item} added.
     *
     */
    create(item: T): T[];

    /**
     * The Set difference of `this` and {@link other}.
     * All items of `this` that are not included in {@link other}.
     *
     */
    except(other: T[]): T[];

    /**
     * The symmetric difference of `this` and {@link other}.
     * All items not included in both.
     *
     */
    difference(other: T[]): T[];

    /**
     * Removes any duplicates.
     */
    distinct(): T[];

    /**
     * Creates a new array minus any items that match {@link predicate}.
     *
     */
    remove(predicate: Predicate<T>): T[];

    /**
     * Creates a new array, replacing items that match {@link predicate}
     * with {@link replacement}.
     *
     */
    update(replacement: T, predicate: Predicate<T>): T[];
  }
}

Array.prototype.create = function create<T>(this: T[], item: T): T[]
{
  return this.concat(item);
};

Array.prototype.except = function except<T>(this: T[], other: T[]): T[]
{
  return this.filter(t => other.findIndex(o => equals(t, o)) === -1);
};

Array.prototype.difference = function difference<T>(this: T[], other: T[]): T[]
{
  return this.except(other).concat(other.except(this));
};

Array.prototype.distinct = function distinct<T>(this: T[]): T[]
{
  const copy = this.slice();
  copy.sort((a, b) =>
    map(
      JSON.stringify(a),
      aString =>
        map(
          JSON.stringify(b),
          bString =>
            aString < bString
              ? -1
              : aString > bString
                ? 1
                : 0)));

  return copy.filter((val, index) =>
    index < copy.length
      ? !equals(val, copy[index + 1])
      : true);
};

Array.prototype.remove = function remove<T>(this: T[], predicate: Predicate<T>): T[]
{
  return map(
    this.findIndex(predicate),
    index => this.filter((_, idx) => idx !== index));
};

Array.prototype.update = function update<T>(this: T[], replacement: T, predicate: Predicate<T>): T[]
{
  return map(
    this.findIndex(predicate),
    index => this.map((item, idx) => idx === index ? replacement : item));
};
