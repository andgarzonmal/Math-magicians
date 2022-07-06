import operate from './operate';

describe('operate function testing', () => {
  test('5 times 5 returns 25', () => {
    const answer = operate('5', '5', 'x');
    expect(answer).toBe('25');
  });
  test('5 divide 0 returns error string message', () => {
    const answer = operate('5', '0', '÷');
    expect(answer).toBe("Can't divide by 0.");
  });

  test('5 minus 5 returns 0', () => {
    const answer = operate('5', '5', '-');
    expect(answer).toBe('0');
  });

  test('5 divided by 5 returns 1', () => {
    const answer = operate('5', '5', '÷');
    expect(answer).toBe('1');
  });

  test('25 module 5 returns 0', () => {
    const answer = operate('25', '5', '%');
    expect(answer).toBe('0');
  });
});
