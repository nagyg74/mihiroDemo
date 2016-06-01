/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

// initializing vamues and bounds
var arr = [];
var arrMaxLength = 50;
var arrMinLength = 1;
var arrLength = Math.floor(Math.random() * arrMaxLength) + arrMinLength;

var minVal = 1;
var maxVal = 300;
for (var i = 0; i < arrLength; i++) {
    arr.push(Math.floor(Math.random() * maxVal) + minVal);
}
// end of initializtation

/**
 * Returns the diamater of an array
 * 
 * @param {array} arr
 * @returns {getArrayDiameter.arr|undefined}
 */
function getArrayDiameter(arr) {
    var min = undefined;
    var max = undefined;
    for (var i = 0; i < arrLength; i++) {
        if(arr[i]<min || min == undefined){
            min = arr[i];
        }
        if(arr[i]>max || max == undefined){
            max = arr[i];
        }
    }
    return max-min;
}

var diameter = getArrayDiameter(arr);
console.log(diameter);

/*
 * Complexity estimation based on worst case
 * 
 * 4+2n for initialization and loop
 * n(2*4) for min/max selection
 * 1 for return
 * 
 * that makes O(8n+5) over all
 */