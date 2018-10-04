import { compose, map, par } from '..';

test('it should map a function to a value', () => {
  expect(map(1, i => JSON.stringify(i))).toBe('1');
});

test('it should return a partially applied function', () => {
  const multiply = (p1: number, p2: number) => p1 * p2;

  const partial = par(multiply, 1);
  const result = partial(2);

  expect(result).toBe(2);
});

test('it should compose one function from two', () => {
  const double = (n: number) => n * 2;
  const square = (n: number) => n * n;
  const doubleThenSquare = compose(
    double,
    square,
  );

  const result = doubleThenSquare(2);

  expect(result).toBe(16);
});
