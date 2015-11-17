"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "panel",

  propTypes: {
    cssClass: _react2.default.PropTypes.string,
    headerIcon: _react2.default.PropTypes.string,
    headerText: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      cssClass: "",
      headerIcon: "",
      headerText: ""
    };
  },
  renderHeader: function renderHeader() {
    if (!this.props.headerText) {
      return;
    }

    return _react2.default.createElement(
      "div",
      { className: "panel-heading" },
      _react2.default.createElement(
        "span",
        { className: "panel-title" },
        _react2.default.createElement("span", { className: "fa fa-" + this.props.headerIcon }),
        this.props.headerText
      )
    );
  },
  render: function render() {
    var panelCssClass = "panel panel-component " + this.props.cssClass;

    return _react2.default.createElement(
      "div",
      { className: panelCssClass },
      this.renderHeader(),
      this.props.children
    );
  }
});