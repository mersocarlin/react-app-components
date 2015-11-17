'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ptBr = require('moment/locale/pt-br');

var _ptBr2 = _interopRequireDefault(_ptBr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//http://eonasdan.github.io/bootstrap-datetimepicker/

exports.default = _react2.default.createClass({
  displayName: 'datetime',

  propTypes: {
    dateFormat: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.bool,
    language: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.object])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dateFormat: "DD/MM/YYYY",
      language: "pt-br"
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var $el = $(_reactDom2.default.findDOMNode(this.refs.datetime));

    $el.datetimepicker({
      format: this.props.dateFormat
    });

    $el.on("dp.hide", function () {
      _this.refs.datetime.blur();
    });

    $el.on("dp.change", function () {
      if (!_this.props.onChange) return;

      _this.props.onChange(_this.getValue());
    });

    _moment2.default.locale(this.props.language);
    _moment2.default.locale(this.props.language, {
      weekdaysMin: _moment2.default.weekdaysShort()
    });

    if (!this.props.value) return;

    var date = (0, _moment2.default)(this.props.value, "YYYY-MM-DDTHH:mm:ssZ").toDate();
    $el.data("DateTimePicker").defaultDate(date);
  },
  getValue: function getValue() {
    var $el = $(_reactDom2.default.findDOMNode(this.refs.datetime));

    var date = $el.data("DateTimePicker").date();
    return date ? (0, _moment2.default)(date, this.props.dateFormat).toJSON() : null;
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'datetime-component' },
      _react2.default.createElement('input', {
        ref: 'datetime',
        type: 'text',
        className: 'form-control',
        disabled: this.props.disabled })
    );
  }
});