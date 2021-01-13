import parseUnit from 'parseunit';

const PREFIXES = {
  '24': 'Y',
  '21': 'Z',
  '18': 'E',
  '15': 'P',
  '12': 'T',
  '9': 'G',
  '6': 'M',
  '3': 'k',
  '0': '',
  '-3': 'm',
  '-6': 'µ',
  '-9': 'n',
  '-12': 'p',
  '-15': 'f',
  '-18': 'a',
  '-21': 'z',
  '-24': 'y'
};

/**
 * 
 * @param {Number} num 
 * @param {Object} options 
 * @param {Boolean} options.space Determines whether a space will be inserted between the number and prefix. Default false.
 * @param {Boolean} options.sign Forces the + sign to be prepended to the output string if the number is positive. Default false.
 * @param {String} options.suffix Optionally adds a suffix to the output string for units.
 */
export function formatSI(num, options = {}) {
  if (num === 0) {
    return '0';
  }
  let sig = Math.abs(num); // significand
  let exponent = 0;
  while (sig >= 1000 && exponent < 24) {
    sig /= 1000;
    exponent += 3;
  }
  while (sig < 1 && exponent > -24) {
    sig *= 1000;
    exponent -= 3;
  }

  const signPrefix = num < 0 ? '-' : '';
  if (sig > 1000) { // exponent == 24
    // significand can be arbitrarily long
    return signPrefix + sig.toFixed(0) + PREFIXES[exponent];
  }
  
  let str = signPrefix + parseFloat(sig.toPrecision(3));
  if (options.hasOwnProperty('space') && options.space) {
    str += ' ';
  }
  str += PREFIXES[exponent];
  
  if (options.hasOwnProperty('suffix')) {
    str += options.suffix;
  }

  if (options.hasOwnProperty('sign') && options.sign) {
    if (sig >= 0) {
      str = '+' + str;
    }
  }

  return str;
}

const MULTIPLIERS = {
  Y: 1e24,
  Z: 1e21,
  E: 1e18,
  P: 1e15,
  T: 1e12,
  G: 1e9,
  M: 1e6,
  k: 1e3,
  '': 1,
  m: 1e-3,
  µ: 1e-6,
  u: 1e-6,
  n: 1e-9,
  p: 1e-12,
  f: 1e-15,
  a: 1e-18,
  z: 1e-21,
  y: 1e-24
};

export function unformatSI(string) {
  if (string == null || string === '') {
    return NaN;
  }
  const [val, unit] = parseUnit(string);
  const multiplier = MULTIPLIERS[unit];
  return val * multiplier;
}
