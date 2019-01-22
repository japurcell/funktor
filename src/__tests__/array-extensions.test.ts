import '../array-extensions';

describe('ArrayExtensions', () =>
{
  it('should return the symmetric difference of two arrays', () =>
  {
    const a = [1, 2, 3];
    const b = [2, 3, 4];
    const diff = a.difference(b);

    expect(diff).toEqual([1, 4]);
  });

  it('should remove duplicates from an array', () =>
  {
    const dupes = [1, 1, 2, 4, 5, 5];
    expect(dupes.distinct()).toEqual([1, 2, 4, 5]);
  });

  it('should create a new array with a new item added', () =>
  {
    const root = [1, 2];
    const withMore = root.create(3);

    expect(withMore).toEqual([1, 2, 3]);
  });

  it('should create a new array with some matching item updated', () =>
  {
    const root = ['one', 'two'];
    const next = root.update('zero', s => s === 'one');

    expect(next).toEqual(['zero', 'two']);
  });
});
