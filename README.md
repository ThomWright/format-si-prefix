# format-si-prefix
[![npm](https://img.shields.io/npm/v/format-si-prefix.svg?style=flat-square)](https://www.npmjs.com/package/format-si-prefix)
[![David](https://img.shields.io/david/ThomWright/format-si-prefix.svg?style=flat-square)](https://david-dm.org/ThomWright/format-si-prefix)
[![David](https://img.shields.io/david/dev/ThomWright/format-si-prefix.svg?style=flat-square)](https://david-dm.org/ThomWright/format-si-prefix#info=devDependencies)

Format and unformat numbers with SI prefixes.

# API

## `formatSI()`

```javascript
import {formatSI} from 'format-si-prefix';
const string = formatSI(number);
```

| in            |     out |
| ------------- | -------:|
| ...           |     ... |
| 0.000111111   |    111µ |
| 0.00111       |   1.11m |
| 0.0111        |   11.1m |
| 0.111         |    111m |
| 1             |       1 |
| 11            |      11 |
| 111           |     111 |
| 1111          |   1.11k |
| 11111         |   11.1k |
| 111111        |    111k |
| 1111111       |   1.11M |
| ...           |     ... |

## `unformatSI()`

```javascript
import {unformatSI} from 'format-si-prefix';
const number = unformatSI(string);
```

|      in | out           |
| ------- | ------------: |
|     ... | ...           |
|    111µ | 0.000111      |
|   1.11m | 0.00111       |
|   11.1m | 0.0111        |
|    111m | 0.111         |
|       1 | 1             |
|      11 | 11            |
|     111 | 111           |
|   1.11k | 1110          |
|   11.1k | 11100         |
|    111k | 111000        |
|   1.11M | 1110000       |
|     ... | ...           |
| 12.345M | 12345000      |
|  12.345 | 12.345        |
| 1234567 | 1234567       |
| 123456M | 123456000000  |
| 1000.1m | 1.0001        |
|     ... | ...           |

# License

[MIT](./LICENSE)
