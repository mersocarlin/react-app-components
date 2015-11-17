'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _formGroup = require('./form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'form-fields',

  propTypes: {
    errors: _react2.default.PropTypes.object,
    fields: _react2.default.PropTypes.array,
    object: _react2.default.PropTypes.object,
    onChange: _react2.default.PropTypes.func,
    onKeyUp: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      errors: {},
      fields: [],
      object: {}
    };
  },
  getFormData: function getFormData() {
    var payload = {};
    for (var ref in this.refs) {
      if (!this.refs[ref].getValue) continue;

      payload[ref] = this.refs[ref].getValue();
    }
    return payload;
  },
  onChange: function onChange(field, value) {
    if (!this.props.onChange) return;

    this.props.onChange(field, value);
  },
  onKeyUp: function onKeyUp(field, event) {
    if (!this.props.onKeyUp) return;

    this.props.onKeyUp(field, event);
  },
  render: function render() {
    var _this = this;

    var rows = [];

    var errors = this.props.errors;
    for (var i = 0; i < this.props.fields.length; i++) {
      var columns = this.props.fields[i].columns;

      rows.push(_react2.default.createElement(
        'div',
        { key: rows.length, className: 'row' },
        columns.map(function (column, index) {
          var disabled = column.field.disabled;

          var value = null;

          if (column.field.name === "createdAt" && !_this.props.object) {
            value = (0, _moment2.default)();
          } else if (_this.props.object) {
            value = _this.props.object[column.field.name];
          }

          return _react2.default.createElement(
            'div',
            { key: index, className: column.cssClass },
            _react2.default.createElement(_formGroup2.default, {
              ref: column.field.name,
              disabled: disabled,
              field: column.field,
              hasError: errors[column.field.name],
              onChange: _this.onChange,
              onKeyUp: _this.onKeyUp,
              value: value })
          );
        })
      ));
    }

    return _react2.default.createElement(
      'div',
      { className: 'form-fields' },
      rows
    );
  }
});