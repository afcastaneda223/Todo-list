import { edit } from "./edit-status-index-clear.js";

describe('Test taskArr array content after edit', () => {
  const expectedOne = {
    description: 'code',
    index: 0,
    completed: false,
  };

  const expectedTwo = {
    description: 'walk',
    index: 2,
    completed: false,
  };

  const expectedThree = {
    description: 'run',
    index: 2,
    completed: false,
  };

  test('Edit first task description', () =>{
    expect(edit(0, 'code')).toEqual(expectedOne);
  });

  test('Edit third task description', () =>{
    expect(edit(2, 'walk')).toEqual(expectedTwo);
  });

  test('Shouldn\'t return same description after edit', () =>{
    expect(edit(2, 'walk')).not.toEqual(expectedThree);
  });
});
