import { initState, mapValue } from '../state';

test('it should change just the value of one state to another', () =>
{
const starting = initState(0, 0);
const next = mapValue(starting, prev => prev[0] + 1);

expect(next(0)).toEqual([1, 0]);
});