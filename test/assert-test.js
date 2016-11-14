const assert = require('chai').assert;

const foo = 'bar';
const beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('chai tests with assert', () => {
  it('check the typeof a value', () => {
    assert.typeOf(foo, 'string'); // without optional message
    assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
  });

  it('check for equality', () => {
    assert.equal(foo, 'bar', 'foo equal `bar`');
    assert.equal(3, '3', '== coerces values to strings');
    assert.notEqual(3, 4, 'these numbers are not equal');
  });

  it('check for strict equality', () => {
    assert.strictEqual(true, true, 'these booleans are stictly equal');
    assert.notStrictEqual(3, '3', 'no coercion for strict equality');
  });

  it('check for deep equality', () => {
    assert.deepEqual({ tea: 'green' }, { tea: 'green' }, 'these objects have the same properties');
    assert.notDeepEqual({ tea: 'green', myArray: [1, 2, 3] }, { tea: 'green', myArray: [1, 2, 5, 6] }, 'these objects don\'t have the same properties');
  })

  it('check the length', () => {
    assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
  });

  it('check custom assert expressions', () => {
    assert('foo' !== 'bar', 'foo is not bar');
    assert(Array.isArray([]), 'empty arrays are arrays');
  });

  it('check for truthy values', () => {
    assert.isOk('everything', 'everything is ok');
    assert.isOk(false, 'this will fail');
  });

  it('check for true values', () => {
    const passed = true;
    assert.isTrue(passed, 'this passes');
    assert.isNotTrue('hey', `'hey' is not strictly true`)
  });

  it('check for falsy values', () => {
  assert.isNotOk('everything', 'this will fail');
  assert.isNotOk(false, 'this will pass');
  });

  it('check for false values', () => {
    assert.isFalse(false, 'the value is false');
    assert.isNotFalse(undefined, `'undefined' is not strictly false`);
  });

  it('check number comparisons', () => {
    assert.isAbove(5, 2, '5 is strictly greater than 2');
    assert.isAtLeast(3, 3, '3 is greater than or equal to 3');
    assert.isBelow(3, 6, '3 is strictly less than 6');
    assert.isAtMost(4, 4, '4 is less than or equal to 4');
  });

  it('check for NaN values', () => {
    assert.isNaN('foo', 'foo is NaN');
  });

  it('check for undefined values', () => {
    const code;
    assert.isUndefined(code, 'code is not defined');
  });

  it('check for defined values', () => {
    const code = 42;
    assert.isDefined(code, 'code is defined');
  });

  it('check for functions', () => {
    function serveTea() {
      return 'the tea is served';
    }
    assert.isFunction(serveTea, 'serveTea is a function');
    assert.isNotFunction('blue', 'blue is not a function');
  });

  it('check for objects', () => {
    const person = { name: 'Bob', age: 31 };
    assert.isObject(person, 'person is an object');
    assert.isNotObject(42, '42 is not an object');
  });

  it('check for object properties', () => {
    const course = { title: 'Advanced Phsyics', teacher: 'Sandra', room: 34 };
    assert.property(course, 'room', 'room is a property of course');
    assert.notProperty(course, 'temperature', 'temperature is not a property of course');
  });

  it('check for deep object properties', () => {
    const sandwich = { type: 'burger', ingredients: { meat: 'beef', condiment: 'ketchup' }};
    assert.deepProperty(sandwich, 'ingredients.meat', 'ingredients is a deep property of sandwich');
    assert.notProperty(sandwich, 'ingredients.beverage', 'beverage is not a deep property of sandwich');
  });

  it('check for property values', () => {
    const course = { title: 'Advanced Phsyics', teacher: 'Sandra', room: 34 };
    assert.propertyVal(course, 'teacher', 'Sandra', 'Sandra is the value of teacher in course');
    assert.propertyNotVal(course, 'teacher', 'Bob', 'Bob is not the value of teach in course');
  });

  it('check for deep property values', () => {
    const sandwich = { type: 'burger', ingredients: { meat: 'beef', condiment: 'ketchup' }};
    assert.deepProperty(sandwich, 'ingredients.meat', 'beef', 'beef is the value of meat, which is a deep property of sandwich');
    assert.notProperty(sandwich, 'ingredients.meat', 'chicken', 'chicken is not the value of meep, which is a deep property of sandwich');
  });

  it('check for arrays', () => {
    const languages = ['JavaScript', 'Python', 'Ruby', 'C++', 'Java'];
    assert.isArray(languages, 'languages is an array');
    assert.isNotArray('assembly', 'assembly is not an array');
  });

  it('check for check for strings', () => {
    const phrase = 'this is not a drill';
    assert.isString(phrase, 'the phrase is a string');
    assert.isNotString({ name: 'Bob' }, 'the object is not a string');
  });

  it('check for numbers', () => {
    assert.isNumber(42, '42 is a number');
    assert.isNotNumber('42', 'the string 42 is not a number');
  });

  it('check for booleans', () => {
    assert.isBoolean(true, 'true is a boolean');
    assert.isNotBoolean('true', 'the string true is not a boolean');
  });

  it('check the prototype chain', () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    const bob = new Person('bob', 31);
    assert.instanceOf(bob, Person, 'bob is an instance of Person');

    const dog = { name: 'Max'}
    assert.notInstanceOf(dog, Person, 'dog is not an instance of Person');
  });

  it('check for values in strings and arrays', () => {
    const numbers = [1, 2, 3, 4];
    assert.include(numbers, 3, 'numbers includes 3');
    assert.notInclude(numbers, 13, 'numbers does not include 13');

    assert.includeMembers(numbers, [2, 4], 'numbers includes members 2 and 4');

    const title = 'JavaScript Design Patterns';
    assert.include(title, 'Design', 'title includes Design');
    assert.notInclude(title, 'Rails', 'title does not include Rails');
  });

  it('check regex matches', () => {
    const fileName = 'thisisatest.js';
    assert.match(fileName, /\.js$/, 'regex matches the .js file extension');
    assert.notMatch(fileName, /\.html$/, 'regex does not match the .html file extension');
  });

});
