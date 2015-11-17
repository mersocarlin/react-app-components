'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _i = require('./i');

var _i2 = _interopRequireDefault(_i);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'button',

  propTypes: {
    cssClass: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.string,
    onClick: _react2.default.PropTypes.func,
    text: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      cssClass: "default"
    };
  },
  onClick: function onClick() {
    if (!this.props.onClick) return;

    this.props.onClick();
  },
  render: function render() {
    var icon = undefined;
    if (this.props.icon) icon = _react2.default.createElement(_i2.default, { icon: this.props.icon });

    return _react2.default.createElement(
      'button',
      { className: 'btn btn-' + this.props.cssClass, type: 'button', onClick: this.onClick },
      icon,
      ' ',
      this.props.text
    );
  }
});