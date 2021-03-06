# wrap.js (written in ES6)

[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/meandmax/wrap.js/master/LICENSE)
[![npm](http://img.shields.io/npm/v/wrap.js.svg?style=flat)](https://www.npmjs.com/package/wrap.js)
[![build](http://img.shields.io/travis/meandmax/wrap.js/master.svg?style=flat)](https://travis-ci.org/meandmax/wrap.js)
[![code climate](http://img.shields.io/codeclimate/github/meandmax/wrap.js.svg?style=flat)](https://codeclimate.com/github/meandmax/wrap.js)
[![devDependencies](http://img.shields.io/david/dev/meandmax/wrap.js.svg?style=flat)](https://david-dm.org/meandmax/wrap.js#info=devDependencies&view=table)

Returns a function that wraps input values such that [0 <= x < size].

Useful for carousels etc, where one should be able to click right and end up in the beginning. Uses the correct modulo operation, not the javascript style.

### Install:

```
npm install wrap.js
```

### Run tests

```
npm test
```

#### with simple arrays:

```js
    import wrap from 'wrap.js';

    [1,2,3,4,5].map(wrap(4)); // [1,2,3,0,1]
```

Can be used with frp libraries (e.g. [Bacon.js](https://github.com/baconjs/bacon.js), [RxJS](https://github.com/Reactive-Extensions/RxJS), [Kefir.js](https://github.com/pozadi/kefir)). Examples are written with Bacon.js

#### in frp:

```js
    import wrap from 'wrap.js';
    import Bacon from 'baconjs';

    let stream = Bacon.sequentially(1000, [1, 2, 3, 4, 5])
        .map(wrap(4));

    // every 1000ms stream emits a value which is mapped on .wrap()
    stream.log();

    // result -> sequence of values over time: 1,2,3,0,1
```

### Further reading on functional reactive programming:
- [Introduction to frp](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [RxJS](http://reactive-extensions.github.io/RxJS/)
- [BaconJs](https://github.com/baconjs/bacon.js)
- [RxJs Github](https://github.com/Reactive-Extensions/RxJS)
- [Kefir](https://github.com/rpominov/kefir)

### Copyright

Copyright &copy; 2015 Maximilian Heinz, contributors. Released under the MIT License
