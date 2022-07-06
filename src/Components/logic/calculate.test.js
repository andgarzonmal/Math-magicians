import calculate from './calculate';

describe('logic test for the calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('expect number 5', () => {
    expect(calculate(obj, '5')).toStrictEqual({
      next: '5',
      total: null,
    });
  });
  test('expect number 83', () => {
    const obj2 = calculate(obj, '8');
    expect(calculate(obj2, '3')).toStrictEqual({
      next: '83',
      total: null,
    });
  });
  test('expect number 8.3', () => {
    let obj2 = calculate(obj, '8');
    obj2 = calculate(obj2, '.');
    expect(calculate(obj2, '3')).toStrictEqual({
      next: '8.3',
      total: null,
    });
  });
});
