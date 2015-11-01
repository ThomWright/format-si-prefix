import {formatSI, unformatSI} from '../index.js';

const BIDIRECTIONAL = [
      {
        name: '< yocto',
        number: 0.00000000000000000000000000123,
        string: '0.00123y'
      },
      {
        name: 'yocto',
        number: 0.00000000000000000000000123,
        string: '1.23y'
      },
      {
        name: 'zepto',
        number: 0.00000000000000000000123,
        string: '1.23z'
      },
      {
        name: 'atto',
        number: 0.00000000000000000123,
        string: '1.23a'
      },
      {
        name: 'femto',
        number: 0.00000000000000123,
        string: '1.23f'
      },
      {
        name: 'pico',
        number: 0.00000000000123,
        string: '1.23p'
      },
      {
        name: 'nano',
        number: 0.00000000123,
        string: '1.23n'
      },
      {
        name: 'micro',
        number: 0.000123,
        string: '123µ'
      },
      {
        name: 'milli',
        number: 0.00123,
        string: '1.23m'
      },
      {
        name: 'tenths',
        number: 0.123,
        string: '123m'
      },
      {
        name: 'one',
        number: 1,
        string: '1'
      },
      {
        name: 'hundreds',
        number: 123,
        string: '123'
      },
      {
        name: 'kilo',
        number: 1230,
        string: '1.23k'
      },
      {
        name: 'mega',
        number: 12300000,
        string: '12.3M'
      },
      {
        name: 'giga',
        number: 123000000000,
        string: '123G'
      },
      {
        name: 'tera',
        number: 123000000000000,
        string: '123T'
      },
      {
        name: 'peta',
        number: 123000000000000000,
        string: '123P'
      },
      {
        name: 'exa',
        number: 123000000000000000000,
        string: '123E'
      },
      {
        name: 'zetta',
        number: 123000000000000000000000,
        string: '123Z'
      },
      {
        name: 'yotta',
        number: 123000000000000000000000000,
        string: '123Y'
      },
      {
        name: '> yotta',
        number: 1230000000000000000000000000,
        string: '1230Y'
      },
      {
        name: 'one significant digit',
        number: 1000000,
        string: '1M'
      }
];

describe('formatSI()', () => {
  BIDIRECTIONAL.forEach((test) => {
    it(test.name, () => {
      expect(formatSI(test.number)).to.equal(test.string);
    });
  });

});

describe('unformatSI()', () => {
  [
    ...BIDIRECTIONAL,
    {
      name: 'u for micro',
      number: 0.000123,
      string: '123u'
    },
    {
      name: 'long non-prefixed number',
      number: 123456,
      string: '123456'
    },
    {
      name: 'long decimal non-prefixed number',
      number: 0.000123456,
      string: '0.000123456'
    },
    {
      name: 'even longer decimal non-prefixed number',
      number: 0.000000000123,
      string: '0.000000000123'
    },
    {
      name: 'long prefixed number',
      number: 123456000000,
      string: '123456M'
    },
    {
      name: 'exponential notation',
      number: 12000000,
      string: '12e+6'
    }
  ].forEach((test) => {
    it(test.name, () => {
      expect(unformatSI(test.string)).to.almost.equal(test.number);
    });
  });
});
