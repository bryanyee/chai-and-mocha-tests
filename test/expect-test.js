const expect = require('chai').expect;

/*
Chains to improve readability:
to, be, been, is, that, which, and, has, have, with, at, of, same

not - negates an assertion
deep - sets the deep flag (for equal & property assertions)
any - sets the any flag (for keys assertions)
all - sets the all flag (for keys assertions)
*/

describe('chai tests with expect', () => {
  it(`check a values's type`, () => {
    expect('this is not a drill').to.be.a('string');
    expect({ name: 'Bob'}).to.be.an('object');
    expect(42).to.be.a('number');
    expect([1, 2, 3, 4]).to.be.an('array');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');
    expect(new Error('error!')).to.be.an('error');

    expect('this is not a drill').to.not.be.a('number');
    expect(42).to.not.be.a('string');
  });

  it('check for a value in an array', () => {
    expect([1, 2, 3]).to.include(2);
    expect([1, 2, 3]).to.contain(2);

    expect([1, 2, 3]).to.not.include(12);
    expect([1, 2, 3]).to.not.contain(12);
  });

  it('check for a substring in a string', () => {
    expect('the keys are on the table').to.include('table');
    expect('the keys are on the table').to.contain('table');
  });

  it('check for a key in an object', () => {
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.contain.keys('foo');

    expect({ foo: 'bar', hello: 'universe' }).to.not.include.keys('cat');
  });

  it('check for strict equality', () => {
    expect('testing').to.equal('testing');
    expect(117).to.equal(117);

    expect(4).to.not.equal(5);
    expect(0).to.not.equal(false);
  });

  it('check for deep equality', () => {
    expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });

    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
    expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
    expect([ 1, 2, 3 ]).to.deep.equal([ 1, 2, 3 ]);
    expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
  });

  it('check for a truthy and falsy values', () => {
    expect(true).to.be.ok;
    expect('no').to.be.ok;
    expect([]).to.be.ok;

    expect(undefined).to.not.be.ok;
    expect(0).to.not.be.ok;
  });

  it('check for a true value', () => {
    expect(true).to.be.true;
    expect('true').to.not.be.true;
  });

  it('check for a false value', () => {
    expect(false).to.be.false;
    expect(0).to.not.be.false;
  });

  it('check for an undefined value', () => {
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;
  });

  it('check for a NaN value', () => {
    expect('dog').to.be.NaN;
    expect(4).to.not.be.NaN;
    expect(NaN).to.be.NaN;
  });

  it('check for an existing value (not null or undefined - accepts false and zero)', () => {
    expect({}).to.exist;
    expect(0).to.exist;
    expect(false).to.exist;

    expect(null).to.not.exist;
    expect(undefined).to.not.exist;
  });

  it('check for empty objects', () => {
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;
  });

  it('check number comparisons', () => {
    expect(50).to.be.above(30);
    expect([1, 2, 3]).to.have.length.above(2);

    expect(50).to.be.at.least(50);

    expect(-6).to.be.below(0);

    expect(5).to.be.at.most(5);
    expect('poptart').to.have.length.at.most(7);

    expect(7).to.be.within(0, 11);
    expect(7).to.not.be.within(8, 13);
  });

  it('check the prototype chain', () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    const bob = new Person('bob', 31);
    const cat = 'meow';

    expect(bob).to.be.an.instanceof(Person);
    expect(cat).to.not.be.an.instanceof(Person);
  });

  it('check properties of objects and arrays', () => {
    const myObj = { num: 5 };
    expect(myObj).to.have.a.property('num');
    expect(myObj).to.have.a.property('num', 5);

    const myArr = [1, 2, 3];
    expect(myArr).to.have.a.property('1', 2);
  });

  it('check deep properties of objects and arrays', () => {
    var deepObj = {
        green: { tea: 'matcha' },
        teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
    };

    expect(deepObj).to.have.deep.property('green.tea', 'matcha');
    expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
    expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');

    var deepArr = [
      [ 1, 2, 3],
      ['a', 'b', 'c']
    ];

    expect(deepArr).to.have.deep.property('[0][1]', 2);
    expect(deepArr).to.have.deep.property('[1][0]', 'a');
  });

  it(`check a value's length`, () => {
    expect([1, 2, 3]).to.have.lengthOf(3);
    expect('chocolate').to.have.lengthOf(9);
  });

  it('check a regex match', () => {
    const string = 'thisisatest.js';
    expect(string).to.match(/\.js$/);
    expect(string).to.not.match(/\.html$/);
  });

  it('check for a string within a string', () => {
    expect('this is not a drill').to.have.string('drill');
  });

  it('check object keys', () => {
    expect({ foo: 1, bar: 2 }).to.contain.any.keys('foo');
    expect({ foo: 1, bar: 2 }).to.contain.any.keys('foo', 'bar');
    expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'bar');

    expect({ foo: 1, bar: 2 }).to.contain.all.keys('foo');
    expect({ foo: 1, bar: 2 }).to.contain.all.keys('foo', 'bar');
    expect({ foo: 1, bar: 2 }).to.have.all.keys('foo');
    expect({ foo: 1, bar: 2 }).to.have.all.keys('foo', 'bar');
  });

  it('check for members in an array', () => {
    expect([1, 2, 3]).to.include.members([1, 3]);
    expect([1, 2, 3]).to.not.include.members([1, 8]);
  });
});
