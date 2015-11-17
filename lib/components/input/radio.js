"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "radio",

  propTypes: {
    items: _react2.default.PropTypes.array, //{id, name, checked}
    name: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func,
    orientation: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.object])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      orientation: "horizontal",
      value: null
    };
  },
  getInitialState: function getInitialState() {
    var _this = this;

    var selectedItem = undefined;

    if (this.props.value) selectedItem = this.props.items.find(function (item) {
      return item.id == _this.props.value;
    }) || this.props.items[0];else selectedItem = this.props.items.find(function (item) {
      return item.checked;
    }) || this.props.items[0];

    return {
      selectedItem: selectedItem
    };
  },
  onChange: function onChange(item) {
    if (!this.props.onChange) return;

    this.props.onChange(item);
  },
  getValue: function getValue() {
    return this.state.selectedItem.id;
  },
  onClick: function onClick(item) {
    this.setState({
      selectedItem: item
    });

    this.onChange(item);
  },
  render: function render() {
    var _this2 = this;

    return _react2.default.createElement(
      "div",
      { className: "radio-component " + this.props.orientation },
      this.props.items.map(function (item, index) {
        var opts = { name: _this2.props.name };
        if (item.id === _this2.state.selectedItem.id) {
          opts.checked = true;
        }

        return _react2.default.createElement(
          "div",
          { key: index, className: "radio-custom radio-primary", onClick: _this2.onClick.bind(_this2, item) },
          _react2.default.createElement("input", _extends({ type: "radio" }, opts, { onChange: function onChange() {} })),
          _react2.default.createElement(
            "label",
            null,
            item.text
          )
        );
      })
    );
  }
});