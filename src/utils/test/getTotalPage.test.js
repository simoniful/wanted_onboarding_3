import { getTotalPageNum } from '../getTotalPageNum';

describe('return 체크', () => {
  test('소숫값 return 체크', () => {
    expect(getTotalPageNum(5, 2)).toEqual(3);
  });
});
