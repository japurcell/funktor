import { possible } from '../possible';

test('it should match nothing', () =>
{
    const result =
        possible(undefined).match(s => s, () => 'none');

    expect(result).toBe('none');
});

test('it should match something', () =>
{
    const result =
        possible('something').match(s => s, () => 'none');

    expect(result).toBe('something');
});