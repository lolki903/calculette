const z = require('./sum');
  test('test firstname', () => {
    expect(() => z.isValide('', 'Doe', 25, 'john.doe@example.com')).toThrow();
  });

  test('test lastname', () => {
    expect(() => {
      z.isValide('John', '', 25, 'joh.doe@example.com');
    }).toThrow();
  });

  test('test email', () => {
    expect(() => {
      z.isValide('John', 'Doe', 25, 'invalid-email');
    }).toThrow();
  });

  test('test age', () => {
    expect(() => {
      z.isValide('John', 'Doe', 12, 'john.doe@example.com');
    }).toThrow();
  });

