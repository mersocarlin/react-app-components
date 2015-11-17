"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "checkbox",

  propTypes: {
    checked: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.number]),
    text: _react2.default.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked
    };
  },
  getValue: function getValue() {
    return this.state.checked;
  },
  onClick: function onClick() {
    this.setState({ checked: !this.state.checked });
  },
  render: function render() {
    var opts = {
      type: "radio",
      checked: this.state.checked,
      onChange: function onChange() {}
    };

    return _react2.default.createElement(
      "div",
      { className: "checkbox-component checkbox-custom", onClick: this.onClick },
      _react2.default.createElement("input", opts),
      _react2.default.createElement(
        "label",
        null,
        this.props.text
      )
    );
  }
});