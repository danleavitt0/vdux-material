'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _element = require('vdux/element');

var _element2 = _interopRequireDefault(_element);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

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

var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: spacing.desktopGutter,
    paddingRight: spacing.desktopGutter,
    boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
    backgroundColor: palette.primary1Color,
    color: palette.alternateTextColor,
    height: spacing.desktopKeylineIncrement,
    lineHeight: 64,
    fontSmoothing: 'antialiased'
  },
  title: {
    fontFamily: fontFamily,
    fontSize: 24,
    fontWeight: 400,
    flex: 1
  },
  iconLeft: {
    marginRight: 12
  }
}).attach();

function render(_ref) {
  var props = _ref.props;
  var children = _ref.children;
  var title = props.title;
  var style = props.style;
  var iconElementLeft = props.iconElementLeft;
  var iconElementRight = props.iconElementRight;
  var onLeftElementClick = props.onLeftElementClick;
  var onRightElementClick = props.onRightElementClick;

  return (0, _element2.default)(
    'div',
    { 'class': styles.classes.container },
    iconElementLeft && (0, _element2.default)(
      'div',
      { 'class': styles.classes.iconLeft, style: style.iconLeft, onClick: onLeftElementClick },
      iconElementLeft
    ),
    title && (0, _element2.default)(
      'h1',
      { 'class': styles.classes.title, style: styles.title },
      title
    ),
    children,
    iconElementRight && (0, _element2.default)(
      'div',
      { onClick: onRightElementClick },
      iconElementRight
    )
  );
}

exports.default = render;