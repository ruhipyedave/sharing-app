import { getLoggedInUser } from './user.selectors';

describe('User Selectors', () => {
  it('should select the feature state', () => {
    getLoggedInUser.projector((result) => {
      expect(result).toBeDefined();
    });
  });
});
