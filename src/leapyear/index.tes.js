// Use this line to import the function, made possible by
// the export default line in the other file
import leapYear  from './index';
describe('My component index', () => {
  // all my test cases here
  // this is the test case
it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  expect(leapYear(input)).toBe(expectedOutput);
});
});