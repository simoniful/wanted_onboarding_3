import { validate } from '../regex';

describe('정규식 테스트', () => {
  test('id 영어 테스트', () => {
    expect(validate('abcdef', /^[a-zA-Z0-9]{4,12}$/)).toBe(true);
  });

  test('id 한글 테스트', () => {
    expect(validate('ㄱㄴㅁㄷ', /^[a-zA-Z0-9]{4,12}$/)).toBe(false);
  });

  test('id 영한 테스트', () => {
    expect(validate('abㅁㄷ', /^[a-zA-Z0-9]{4,12}$/)).toBe(false);
  });

  test('id 특수 문자 테스트', () => {
    expect(validate('abcdef@', /^[a-zA-Z0-9]{4,12}$/)).toBe(false);
  });

  test('id 길이 테스트', () => {
    expect(validate('12345678', /^[a-zA-Z0-9]{4,12}$/)).toBe(true);
  });

  test('id 최소 길이 테스트', () => {
    expect(validate('123', /^[a-zA-Z0-9]{4,12}$/)).toBe(false);
  });

  test('id 최대 길이 테스트', () => {
    expect(validate('123456789abcdedf', /^[a-zA-Z0-9]{4,12}$/)).toBe(false);
  });

  test('password 영어 테스트', () => {
    expect(validate('abcdefg', /^[a-zA-Z0-9]{4,16}$/)).toBe(true);
  });

  test('password 한글 테스트', () => {
    expect(validate('ㄱㄴㄷㄹ', /^[a-zA-Z0-9]{4,16}$/)).toBe(false);
  });

  test('password 영한 테스트', () => {
    expect(validate('abㄷㄹ', /^[a-zA-Z0-9]{4,16}$/)).toBe(false);
  });

  test('password 특수 문자 테스트', () => {
    expect(validate('1234@', /^[a-zA-Z0-9]{4,16}$/)).toBe(false);
  });

  test('password 길이 테스트', () => {
    expect(validate('12345678', /^[a-zA-Z0-9]{4,16}$/)).toBe(true);
  });

  test('password 최소 길이 테스트', () => {
    expect(validate('123', /^[a-zA-Z0-9]{4,16}$/)).toBe(false);
  });

  test('password 최대 길이 테스트', () => {
    expect(validate('123456789abcdedfghijk', /^[a-zA-Z0-9]{4,16}$/)).toBe(false);
  });

  test('이름 영어 테스트', () => {
    expect(validate('abc', /^[가-힣]{2,4}$/)).toBe(false);
  });

  test('이름 한글 테스트', () => {
    expect(validate('김동원', /^[가-힣]{2,4}$/)).toBe(true);
  });

  test('이름 자음 테스트', () => {
    expect(validate('ㄱㄷㅇ', /^[가-힣]{2,4}$/)).toBe(false);
  });

  test('이름 영한 테스트', () => {
    expect(validate('abㄷ', /^[가-힣]{2,4}$/)).toBe(false);
  });

  test('이름 특수 문자 테스트', () => {
    expect(validate('김동@', /^[가-힣]{2,4}$/)).toBe(false);
  });

  test('이름 길이 테스트', () => {
    expect(validate('김동원', /^[가-힣]{2,4}$/)).toBe(true);
  });

  test('이름 최소 길이 테스트', () => {
    expect(validate('김', /^[가-힣]{2,4}$/)).toBe(false);
  });

  test('이름 최대 길이 테스트', () => {
    expect(validate('김동원김동', /^[가-힣]{2,4}$/)).toBe(false);
  });
});
