import { map } from '../index';

test('map', () =>
{
    expect(map(1, i => JSON.stringify(i))).toBe('1');
});