require('../lib/employee');
test('creates a health potion object', () => {
    const e = new employee('dylan','1','abc');
  
    expect(e.name).toBe('dylan');
    expect(e.value).toEqual(expect.any(String));
  });