import * as fromBooks from './books.actions';

describe('loadBooks', () => {
  it('should return an action', () => {
    expect(fromBooks.loadBooks().type).toBe('[Books] Load Books');
  });
});
