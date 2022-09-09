import { Request } from './request';

describe('GIVEN Request', () => {
  it('SHOULD create an instance', () => {
    expect(new Request()).toBeTruthy();
  });

  describe('SHOULD call generate', () => {
    it('BY id', () => {
      const req: Request = { filed: 'characters', id: 2 };
      const path = Request.generate(req);
      expect(path).toEqual('characters/2');
    });

    it('BY limit and offset', () => {
      const req: Request = {
        filed: 'characters',
        limit: 2,
        offset: 5,
      };
      const path = Request.generate(req);
      expect(path).toEqual('characters?limit=2&offset=5');
    });

    it('BY attribute', () => {
      const req: Request = {
        filed: 'characters',
        attributes: { name: 'Walter White' },
      };
      const path = Request.generate(req);
      expect(path).toEqual('characters?name=Walter+White');
    });

    it('BY attributes', () => {
      const req: Request = {
        filed: 'characters',
        attributes: { author: ['Walter White', 'Jesse Pinkman'] },
      };
      const path = Request.generate(req);
      expect(path).toEqual('characters?author=Walter+White,Jesse+Pinkman');
    });
  });
});
