'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (hex, opacity) {
  var splitHex = hex.split('#')[1].match(/.{2}/g).map(function (h) {
    return parseInt(h, 16);
  });
  console.log(splitHex);
  return 'rgba(' + splitHex[0] + ', ' + splitHex[1] + ', ' + splitHex[2] + ', ' + opacity + ')';
};