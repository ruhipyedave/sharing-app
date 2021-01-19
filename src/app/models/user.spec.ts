import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User({email: "ruhi@gmail.com", password: "test"})).toBeTruthy();
  });
});
