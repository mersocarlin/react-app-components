"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "table-header",

  propTypes: {
    headerCssClass: _react2.default.PropTypes.string,
    dataCssClass: _react2.default.PropTypes.string,
    text: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      headerCssClass: "text-center",
      dataCssClass: "text-center",
      text: ""
    };
  },
  render: function render() {
    return _react2.default.createElement(
      "th",
      { className: this.props.headerCssClass },
      this.props.text
    );
  }
});