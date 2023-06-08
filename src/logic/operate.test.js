/**
 * @jest-environment jsdom
*/
import operate from '../logic/operate';

describe('operate', () => {
  it('should perform addition', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should perform subtraction', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should perform multiplication', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  it('should perform division', () => {
    expect(operate('9', '3', '÷')).toBe('3');
  });

  it('should handle division by zero', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('should handle modulo with division by zero', () => {
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => {
      operate('2', '3', '^');
    }).toThrow("Unknown operation '^'");
  });
});
