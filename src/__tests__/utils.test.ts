import { arrayOf, capitalize } from '../utils';

describe('Utils', () =>
{
  it('should create an array given a single or array like of something', () =>
  {
    expect(arrayOf(1)).toEqual([1]);
  });

  describe('capitalize', () =>
  {
    it('should capitalize a given string', () =>
    {
      const lower = 'lower';

      expect(capitalize(lower)).toEqual('Lower');
    });

    it('should return an empty string when empty is given', () =>
    {
      expect(capitalize('')).toEqual('');
    });

    it('should return an empty string when no string is given', () =>
    {
      expect(capitalize(null)).toEqual('');
    });
  });
});
