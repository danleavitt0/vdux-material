'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _element = require('vdux/element');

var _element2 = _interopRequireDefault(_element);

var _theme = require('../../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _colors = require('../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _jss = require('jss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jss = (0, _jss.create)();

var spacing = _theme2.default.spacing;
var fontFamily = _theme2.default.fontFamily;
var palette = _theme2.default.palette;
var boxShadow = _theme2.default.boxShadow;

var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
  base: {
    padding: 16,
    fontFamily: fontFamily
  },
  title: {
    fontSize: 22,
    color: _colors2.default.darkBlack
  },
  subtitle: {
    fontSize: 16,
    color: _colors2.default.lightBlack
  }
}).attach();

function render(_ref) {
  var props = _ref.props;
  var children = _ref.children;
  var style = props.style;
  var title = props.title;
  var titleStyle = props.titleStyle;
  var subtitle = props.subtitle;
  var subtitleStyle = props.subtitleStyle;

  return (0, _element2.default)(
    'div',
    { 'class': styles.classes.base, style: style },
    title && (0, _element2.default)(
      'div',
      { 'class': styles.classes.title, style: titleStyle },
      title
    ),
    subtitle && (0, _element2.default)(
      'div',
      { 'class': styles.classes.subtitle, style: subtitleStyle },
      subtitle
    ),
    children && children
  );
}

exports.default = render;