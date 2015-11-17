'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _i = require('../i');

var _i2 = _interopRequireDefault(_i);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'input-group',

  propTypes: {
    leftIcon: _react2.default.PropTypes.string,
    leftText: _react2.default.PropTypes.string,
    onLeftClick: _react2.default.PropTypes.func,

    rightIcon: _react2.default.PropTypes.string,
    rightText: _react2.default.PropTypes.string,
    onRightClick: _react2.default.PropTypes.func
  },

  renderAddon: function renderAddon(text, icon, onClick) {
    var textComponent = undefined;
    var iconComponent = undefined;

    if (text) textComponent = text;
    if (icon) iconComponent = _react2.default.createElement(_i2.default, { icon: icon });

    return _react2.default.createElement(
      'span',
      { onClick: onClick, className: 'input-group-addon' },
      textComponent,
      ' ',
      iconComponent
    );
  },
  renderLeftAddon: function renderLeftAddon() {
    if (!this.props.leftText && !this.props.leftIcon && !this.props.leftButton) return;

    return this.renderAddon(this.props.leftText, this.props.leftIcon, this.props.onLeftClick);
  },
  renderRightAddon: function renderRightAddon() {
    if (!this.props.rightText && !this.props.rightIcon && !this.props.rightButton) return;

    return this.renderAddon(this.props.rightText, this.props.rightIcon, this.props.onRightClick);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'input-group-component input-group' },
      this.renderLeftAddon(),
      this.props.children,
      this.renderRightAddon()
    );
  }
});