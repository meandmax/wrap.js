/**
 * Returns a function that wraps input values such that [0 <= x < size].
 * Useful for carousels etc, where one should be able to click right
 * and end up in the beginning. Uses the correct modulo operation, not
 * the javascript style.
 *
 * @param   {int} size  The range size, usually the length of an array.
 * @returns {function}  The wrapping function.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = wrap;

function wrap(size) {
    return function (value) {
        return (value % size + size) % size;
    };
}

module.exports = exports["default"];
