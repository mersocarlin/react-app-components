"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "text",

  propTypes: {
    disabled: _react2.default.PropTypes.bool,
    number: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func,
    onKeyUp: _react2.default.PropTypes.func,
    placeholder: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.string,
    uppercase: _react2.default.PropTypes.bool,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.object])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      number: false,
      type: "text",
      uppercase: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  getValue: function getValue() {
    if (!this.state.value) {
      return this.state.value;
    }

    if (this.props.number) {
      return this.state.value;
    }

    if (this.props.uppercase) {
      return this.state.value.toUpperCase();
    }
    return this.state.value;
  },
  onChange: function onChange(event) {
    var text = event.target.value;

    if (this.props.number) {
      var numberPattern = /\d+/g;
      var match = text.match(numberPattern);

      text = "";
      if (match) {
        text = match.join("");
      }
    }

    this.setState({ value: text });

    if (!this.props.onChange) return;

    this.props.onChange(text);
  },
  onKeyUp: function onKeyUp(event) {
    if (!this.props.onKeyUp) return;

    this.props.onKeyUp(event);
  },
  render: function render() {
    var opts = {
      type: this.props.type,
      placeholder: this.props.placeholder,
      value: this.state.value
    };

    if (this.props.disabled) {
      opts.disabled = this.props.disabled;
    }

    var inputCssClass = "text-component form-control " + (this.props.uppercase ? "uppercase" : "");

    return _react2.default.createElement("input", _extends({ ref: "inputText", className: inputCssClass }, opts, { onChange: this.onChange, onKeyUp: this.onKeyUp }));
  }
});