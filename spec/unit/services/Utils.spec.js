import Utils from '../../../src/services/Utils.js';

describe('Utils service', () => {
  describe('parseRequestURL', () => {
    it('should return parsed request', () => {
      let resource = 'res';
      let id = 'idd';
      let verb = 'verbb';
      window.location.hash = `adress/${resource}/${id}/${verb}`;

      expect(Utils.parseRequestURL()).toEqual({
        resource,
        id,
        verb
      })
    });
  });

  describe('sleep', () => {
    it('should resolve after timeout', (done) => {
      Utils.sleep(100).then(done);
    });
  });
});