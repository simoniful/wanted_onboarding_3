import { getTotalPage } from '../getTotalPage';

describe('return 체크', () => {
  test('소숫값 return 체크', () => {
    expect(getTotalPage(5, 2)).toEqual(3);
  });
});
