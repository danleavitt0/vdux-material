'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _spacing = require('./spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
  palette: {
    primary1Color: _colors2.default.cyan500,
    primary2Color: _colors2.default.cyan700,
    primary3Color: _colors2.default.grey400,
    accent1Color: _colors2.default.pinkA200,
    accent2Color: _colors2.default.grey100,
    accent3Color: _colors2.default.grey500,
    textColor: _colors2.default.darkBlack,
    alternateTextColor: _colors2.default.white,
    canvasColor: _colors2.default.white,
    borderColor: _colors2.default.grey300,
    disabledColor: _colors2.default.darkBlack,
    pickerHeaderColor: _colors2.default.cyan500,
    clockCircleColor: _colors2.default.darkBlack
  }
};