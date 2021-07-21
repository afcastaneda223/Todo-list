import { create } from "./add-function.js";

describe('Array Content', () => {
  const expected = [{
    description: 'walk',
    index: 0,
    completed: false,
  }];
  const expectedTwo = [
    {
      description: 'walk',
      index: 0,
      completed: false,
    },
    {
      description: 'code',
      index: 1,
      completed: false,
    }];

  it('Matches when receiving first element', () => {
    expect(create('walk')).toEqual(expected);
  });
  it('Matches when receiving second element', () => {
    expect(create('code')).toEqual(expectedTwo);
  });
  it('Does not match when receiving third element and it\'s index 0', () => {
    expect(create('walk')).not.toEqual(expected);
  });
});