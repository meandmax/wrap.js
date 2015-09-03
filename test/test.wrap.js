import test from 'tape';
import wrap from '../index.js';

test('wrap() is a function and returns a function', function (t) {
    t.plan(2);

    t.equal(typeof wrap, 'function');
    t.equal(typeof wrap(10, 20), 'function');
});

test('returns the input in range 0..n-1', function (t) {
    const wrapValue = wrap(4);

    t.plan(4);

    t.equal(wrapValue(0), 0);
    t.equal(wrapValue(1), 1);
    t.equal(wrapValue(2), 2);
    t.equal(wrapValue(3), 3);
});

test('is able to rotate right once', function (t) {
    const wrapValue = wrap(4);

    t.plan(4);

    t.equal(wrapValue(4), 0);
    t.equal(wrapValue(5), 1);
    t.equal(wrapValue(6), 2);
    t.equal(wrapValue(7), 3);
});

test('is able to rotate right multiple times', function (t) {
    const wrapValue = wrap(4);

    t.plan(3);

    t.equal(wrapValue(9), 1);
    t.equal(wrapValue(15), 3);
    t.equal(wrapValue(20), 0);
});

test('is able to rotate left once', function (t) {
    const wrapValue = wrap(4);

    t.plan(4);

    t.equal(wrapValue(-1), 3);
    t.equal(wrapValue(-2), 2);
    t.equal(wrapValue(-3), 1);
    t.equal(wrapValue(-4), 0);
});

test('is able to rotate left multiple times', function (t) {
    const wrapValue = wrap(4);

    t.plan(2);

    t.equal(wrapValue(-7), 1);
    t.equal(wrapValue(-16), 0);
});
