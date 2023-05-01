import { fooService } from '../../src/service';

describe('fooService', () => {
  describe('foo', () => {
    test('returns the real identity of foo', async () => {
      expect.assertions(1);
      expect(fooService.foo()).toEqual({ foo: 'Foo is Bar! 🤯' });
    });
  });
});
