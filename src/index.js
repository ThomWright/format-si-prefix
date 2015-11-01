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

export function formatSI(num) {
  if (num === 0) {
    return '0';
  }
  let sig = num;
  let exponent = 0;
  while(sig >= 1000 && exponent < 24) {
    sig /= 1000;
    exponent += 3;
  }
  while(sig < 1 && exponent > -24) {
    sig *= 1000;
    exponent -= 3;
  }
  if (exponent === 0) {
    return sig.toFixed(0);
  } else if (sig > 1000) {
    return sig.toFixed(0) + PREFIXES[exponent];
  } else {
    return parseFloat(sig.toPrecision(3)) + PREFIXES[exponent];
  }
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
