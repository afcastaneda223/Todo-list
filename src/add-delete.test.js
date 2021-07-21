import { create, removeTask } from './add-delete.js';

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
  const expectedThree = [
    {
      description: 'walk',
      index: 0,
      completed: false,
    },
    {
      description: 'code',
      index: 1,
      completed: false,
    },
    {
      description: 'talk',
      index: 2,
      completed: false,
    },
  ];
  // add testing
  it('Matches when receiving first element', () => {
    expect(create('walk')).toEqual(expected);
  });
  it('Matches when receiving second element', () => {
    expect(create('code')).toEqual(expectedTwo);
  });
  it('Matches when receiving third element', () => {
    expect(create('talk')).toEqual(expectedThree);
  });
  it('Does not match when receiving fourth element and it\'s index 0', () => {
    expect(create('read')).not.toEqual(expected);
  });

  // remove testing

  const expectedAfterRemoveOne = [
    {
      description: 'walk',
      index: 0,
      completed: false,
    },
    {
      description: 'talk',
      index: 1,
      completed: false,
    },
    {
      description: 'read',
      index: 2,
      completed: false,
    },
  ];
  const expectedAfterRemovetwo = [
    {
      description: 'talk',
      index: 0,
      completed: false,
    },
    {
      description: 'read',
      index: 1,
      completed: false,
    },
  ];

  it('remove array element in index: 1 and reorder index', () => {
    expect(removeTask(1)).toEqual(expectedAfterRemoveOne);
  });
  it('remove array element in index: 0 and reorder index', () => {
    expect(removeTask(0)).toEqual(expectedAfterRemovetwo);
  });
});
