'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'select',

  propTypes: {
    ajax: _react2.default.PropTypes.bool,
    ajaxUrl: _react2.default.PropTypes.string,
    includeIfEmpty: _react2.default.PropTypes.bool,
    items: _react2.default.PropTypes.array,
    enableSearch: _react2.default.PropTypes.bool,
    multiple: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.object, _react2.default.PropTypes.array])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      ajax: false,
      includeIfEmpty: false,
      items: [],
      enableSearch: true,
      value: null
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var $el = $(this.refs.select);

    if (this.props.ajax) {
      (function () {
        var that = _this;
        $el.select2({
          ajax: {
            url: '' + _this.props.ajaxUrl,
            dataType: 'json',
            delay: 250,
            headers: {
              "Authorization": "Bearer " + localStorage.accessToken,
              "Content-Type": "application/json"
            },
            data: function data(params) {
              return {
                query: params.term, // search term
                includeIfEmpty: that.props.includeIfEmpty,
                page: params.page
              };
            },
            processResults: function processResults(data, page) {
              var items = [];

              if (data) {
                items = data.data.map(function (item) {
                  return {
                    id: item.id,
                    text: item.name
                  };
                });
              }

              return {
                results: items,
                pagination: { more: data.more }
              };
            },
            cache: true
          },
          escapeMarkup: function escapeMarkup(markup) {
            return markup;
          },
          minimumInputLength: 1
        });
      })();
    } else {
      var options = {};

      if (!this.props.enableSearch) options.minimumResultsForSearch = -1;

      $el.select2(options);
    }

    $el.on("change", function (e) {
      if (!_this.props.onChange) return;
      if (!_this.getValue()) return;

      _this.props.onChange(_this.getValue(), _this.getText());
    });
  },
  getValue: function getValue() {
    return $(this.refs.select).select2("val");
  },
  getText: function getText() {
    var data = $(this.refs.select).select2("data")[0];
    return data.text;
  },
  clear: function clear() {
    $(this.refs.select).select2("val", null);
  },
  render: function render() {
    var _this2 = this;

    if (this.props.ajax) {
      return _react2.default.createElement(
        'div',
        { className: 'select-component' },
        _react2.default.createElement('select', { ref: 'select' })
      );
    }

    var opts = {};

    if (this.props.multiple) opts.multiple = true;

    var selected = function selected(item) {
      if (!_this2.props.value) return false;

      if (_this2.props.value.constructor == Array) {
        return _this2.props.value.find(function (val) {
          return val.id === item.id;
        }) != null;
      } else {
        return item.id === _this2.props.value;
      }
    };

    return _react2.default.createElement(
      'div',
      { className: 'select-component' },
      _react2.default.createElement(
        'select',
        _extends({ ref: 'select' }, opts),
        this.props.items.map(function (item, index) {
          var itemOpts = {
            key: index,
            value: item.id,
            selected: selected(item)
          };

          return _react2.default.createElement(
            'option',
            itemOpts,
            item.text
          );
        })
      )
    );
  }
});