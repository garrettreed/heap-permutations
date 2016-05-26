"use strict";

/**
 * Implementation of Heap's Permutation algorithm
 * 
 * @param  Array
 * @return Array array of permutations
 */
function permutations(arr) {
    var perms = [];
    generate(arr.length, arr);
    return perms;

    function generate(len, arr) {
        if (len === 1) {
            perms.push(arr.slice());
            return arr;
        }
        for (var i = 0; i < len - 1; i++) {
            generate(len - 1, arr);
            if (len % 2 === 0) {
                swap.call(arr, i, len - 1);
            } else {
                swap.call(arr, 0, len - 1);
            }
        }
        generate(len - 1, arr);
    }

    function swap(a, b) {
        var temp = this[b];
        this[b] = this[a];
        this[a] = temp;
    }
}