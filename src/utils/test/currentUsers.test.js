import { currentUsers } from '../currentUsers';

describe('return 체크', () => {
  test('일반적인 return 체크', () => {
    expect(currentUsers([1, 2, 3], 0, 2)).toEqual([1, 2]);
  });

  test('마지막 페이지 return 체크', () => {
    expect(currentUsers([1, 2, 3], 0, 5)).toEqual([1, 2, 3]);
  });
});
