const isPalindrome = require('../src/is_palindrome');
const isPangram = require('../src/is_palindrome');

describe('isPangram()', () => {

  test('isPangram() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works for 1-word palindromes', () => {
    
    expect(isPalindrome('a')).toEqual(true);
    expect(isPalindrome('racecar')).toEqual(true);
    expect(isPalindrome('poop')).toEqual(true);

  });

  test('will return false for non-palindrome 1-word strings', () => {
    
    expect(isPalindrome('hello')).toEqual(false);
    expect(isPalindrome('race')).toEqual(false);
    expect(isPalindrome('candle')).toEqual(false);

  });

  test('returns true for an empty string', () => {
    
    expect(isPalindrome('')).toEqual(true);

  });

  test('will return true for long phrases with spaces and puntuation', () => {
    
    // Arrange
    const palindromeWord = 'A man, a plan, a canal: Panama';

    // Act-Assert
    expect(isPalindrome(palindromeWord)).toEqual(true);

  });

  test('will return false for non-palindrome long phrases with spaces and puntuation', () => {
    
    // Arrange
    const palindromeWord = 'A man, a plan, a canal: Panam';

    // Act-Assert
    expect(isPalindrome(palindromeWord)).toEqual(false);

  });


});