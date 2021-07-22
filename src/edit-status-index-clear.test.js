import {
  edit, changeTrue, changeFalse, changeIndex, removeChecked,
} from './edit-status-index-clear.js';

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

  test('Edit first task description', () => {
    expect(edit(0, 'code')).toEqual(expectedOne);
  });

  test('Edit third task description', () => {
    expect(edit(2, 'walk')).toEqual(expectedTwo);
  });

  test('Shouldn\'t return same description after edit', () => {
    expect(edit(2, 'walk')).not.toEqual(expectedThree);
  });
});

describe('Test change status true/false', () => {
  const expectedOne = {
    description: 'code',
    index: 0,
    completed: true,
  };

  const expectedTwo = {
    description: 'walk',
    index: 2,
    completed: true,
  };

  const expectedThree = {
    description: 'code',
    index: 0,
    completed: false,
  };

  test('Change first task status to true', () => {
    expect(changeTrue(0)).toEqual(expectedOne);
  });

  test('Change third task status to true', () => {
    expect(changeTrue(2)).toEqual(expectedTwo);
  });

  test('Change first task status to false', () => {
    expect(changeFalse(0)).toEqual(expectedThree);
  });

  test('First task shouln\'t have false status after changeTrue function', () => {
    expect(changeTrue(0)).not.toEqual(expectedThree);
  });
});

describe('Test taskArr array content after change index', () => {
  const expectedInitial = [
    {
      description: 'code',
      index: 0,
      completed: true,
    },
    {
      description: 'read',
      index: 1,
      completed: false,
    },
    {
      description: 'walk',
      index: 2,
      completed: true,
    },
  ];

  const expectedOne = [
    {
      description: 'code',
      index: 2,
      completed: true,
    },
    {
      description: 'read',
      index: 1,
      completed: false,
    },
    {
      description: 'walk',
      index: 0,
      completed: true,
    },
  ];

  test('swap first for first index should not change', () => {
    expect(changeIndex(0, 0)).toEqual(expectedInitial);
  });

  test('swap first for third index', () => {
    expect(changeIndex(0, 2)).toEqual(expectedOne);
  });

  test('swap first for second index not equal to previous', () => {
    expect(changeIndex(0, 1)).not.toEqual(expectedOne);
  });
});

describe('Test taskArr array content after removed  checked', () => {
  const expectedOne = [
    {
      description: 'read',
      index: 0,
      completed: false,
    },
  ];

  test('swap first for third index', () => {
    expect(removeChecked()).toEqual(expectedOne);
  });
});