import { Left, Right } from '../either';

test('it should match a Right', () =>
{
    const right = Right('test');

    expect(right.match(r => r, l => 'error')).toBe('test');
});

test('it should match a left', () =>
{
    const left = Left('left');

    expect(left.match(r => 'right', l => l)).toBe('left');
});
