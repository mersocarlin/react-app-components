'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _datetime = require('./datetime');

var _datetime2 = _interopRequireDefault(_datetime);

var _inputGroup = require('./input-group');

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'form-group',

  propTypes: {
    disabled: _react2.default.PropTypes.bool,
    field: _react2.default.PropTypes.object,
    hasError: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func,
    onKeyUp: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.object, _react2.default.PropTypes.array])
  },

  getValue: function getValue() {
    return this.refs.inputField.getValue();
  },
  onChange: function onChange(value, text) {
    if (!this.props.onChange) return;

    this.props.onChange(this.props.field, value, text);
  },
  onKeyUp: function onKeyUp(event) {
    if (!this.props.onKeyUp) return;

    this.props.onKeyUp(this.props.field, event);
  },
  renderInputGroup: function renderInputGroup() {
    var inputGroup = this.props.field.inputGroup;

    return _react2.default.createElement(
      _inputGroup2.default,
      {
        leftIcon: inputGroup.leftIcon,
        leftText: inputGroup.leftText,
        onLeftClick: inputGroup.onLeftClick,
        rightIcon: inputGroup.rightIcon,
        rightText: inputGroup.rightText,
        onRightClick: inputGroup.onRightClick },
      this.renderInput()
    );
  },
  renderInput: function renderInput() {
    var field = this.props.field;

    switch (field.type) {
      case "checkbox":
        return _react2.default.createElement(_checkbox2.default, {
          ref: 'inputField',
          checked: this.props.value,
          text: field.label });
      case "date":
        return _react2.default.createElement(_datetime2.default, {
          ref: 'inputField',
          value: this.props.value,
          disabled: this.props.disabled,
          onChange: this.onChange });
      case "radio":
        return _react2.default.createElement(_radio2.default, {
          ref: 'inputField',
          name: field.fieldName,
          items: field.items,
          onChange: this.onChange,
          orientation: field.orientation,
          value: this.props.value });
      case "select":
        return _react2.default.createElement(_select2.default, {
          ref: 'inputField',
          ajax: field.ajax,
          ajaxUrl: field.ajaxUrl,
          enableSearch: field.enableSearch === "1",
          includeIfEmpty: field.includeIfEmpty,
          items: field.items,
          multiple: field.multiple,
          onChange: this.onChange,
          value: this.props.value });
      default:
        return _react2.default.createElement(_text2.default, {
          ref: 'inputField',
          disabled: field.disabled,
          inputGroup: field.inputGroup,
          number: field.number,
          onChange: this.onChange,
          onKeyUp: this.onKeyUp,
          placeholder: field.placeholder,
          type: field.type,
          uppercase: field.uppercase,
          value: this.props.value });
    }
  },
  render: function render() {
    var labelComponent = undefined;
    if (this.props.field.type !== "checkbox" && this.props.field.label) {
      labelComponent = _react2.default.createElement(
        'label',
        { className: 'control-label' },
        this.props.field.label
      );
    }

    var cssClass = 'form-group-component form-group ' + (this.props.hasError ? "has-error" : "") + ' ' + (this.props.field.type === "radio" ? "clearfix" : "");

    return _react2.default.createElement(
      'div',
      { className: cssClass },
      labelComponent,
      this.props.field.inputGroup && this.renderInputGroup(),
      !this.props.field.inputGroup && this.renderInput()
    );
  }
});