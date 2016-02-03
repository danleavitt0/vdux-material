'use strict';

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _element = require('vdux/element');

var _element2 = _interopRequireDefault(_element);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _buttonStyles = require('../styles/buttonStyles');

var _buttonStyles2 = _interopRequireDefault(_buttonStyles);

var _combineReducers = require('@f/combine-reducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _handleActions2 = require('@f/handle-actions');

var _handleActions3 = _interopRequireDefault(_handleActions2);

var _createAction = require('@f/create-action');

var _createAction2 = _interopRequireDefault(_createAction);

var _colorUtility = require('../utils/colorUtility');

var _colorUtility2 = _interopRequireDefault(_colorUtility);

var _colors = require('../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _jssExtend = require('jss-extend');

var _jssExtend2 = _interopRequireDefault(_jssExtend);

var _jss = require('jss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var jss = (0, _jss.create)();

var mouseDown = (0, _createAction2.default)('MOUSE_DOWN');
var mouseUp = (0, _createAction2.default)('MOUSE_UP');

var spacing = _theme2.default.spacing;
var fontFamily = _theme2.default.fontFamily;
var palette = _theme2.default.palette;

var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
  container: _extends({}, _buttonStyles2.default, {
    display: 'inline-block',
    fontFamily: fontFamily,
    borderRadius: '2px',
    boxSizing: 'border-box',
    lineHeight: _buttonStyles2.default.height,
    textAlign: 'center',
    userSelect: 'none',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: (0, _colorUtility2.default)(_colors2.default.grey100, 0.2)
    },
    '&:active': {
      background: (0, _colorUtility2.default)(_colors2.default.grey100, 0.3)
    }
  }),
  primary: {
    color: palette.primary1Color,
    '&:hover': {
      background: (0, _colorUtility2.default)(palette.primary1Color, 0.2)
    },
    '&:active': {
      background: (0, _colorUtility2.default)(palette.primary1Color, 0.3)
    }
  }
}).attach();

function initialState() {
  return {
    clicked: false
  };
}

function render(_ref) {
  var props = _ref.props;
  var local = _ref.local;
  var state = _ref.state;
  var children = _ref.children;
  var hovering = state.hovering;
  var clicked = state.clicked;
  var label = props.label;
  var style = props.style;
  var onMouseOver = props.onMouseOver;
  var onMouseOut = props.onMouseOut;
  var primary = props.primary;

  return (0, _element2.default)(
    'div',
    {
      onMouseDown: local(mouseDown),
      onMouseUp: local(mouseUp),
      'class': [styles.classes.container, [primary && styles.classes.primary]],
      style: style },
    label && label
  );
}

var reducer = (0, _combineReducers2.default)({
  clicked: (0, _handleActions3.default)((_handleActions = {}, _defineProperty(_handleActions, mouseDown, function () {
    return true;
  }), _defineProperty(_handleActions, mouseUp, function () {
    return false;
  }), _handleActions))
});

exports.default = {
  initialState: initialState,
  render: render,
  reducer: reducer
};

// export default render