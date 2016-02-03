'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spacing = require('./spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  position: 'relative',
  paddingLeft: _spacing2.default.desktopGutterLess,
  paddingRight: _spacing2.default.desktopGutterLess,
  cursor: 'pointer',
  height: '36px',
  minWidth: '88px',
  iconButtonSize: _spacing2.default.iconSize * 2,
  '-webkit-touch-callout': 'none',
  '-webkit-user-select': 'none',
  '-khtml-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none'
};