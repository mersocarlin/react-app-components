'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'table-row',

  propTypes: {
    data: _react2.default.PropTypes.object,
    rowData: _react2.default.PropTypes.array,
    onRowClick: _react2.default.PropTypes.func
  },

  onRowClick: function onRowClick() {
    if (!this.props.onRowClick) return;
    this.props.onRowClick(this.props.data);
  },
  renderCols: function renderCols() {
    return this.props.rowData.map(function (data, index) {
      if (data.html) {
        return _react2.default.createElement('td', {
          key: index,
          className: data.cssClass,
          dangerouslySetInnerHTML: { __html: data.text } });
      }
      return _react2.default.createElement(
        'td',
        { key: index, className: data.cssClass },
        data.text
      );
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'tr',
      { onClick: this.onRowClick },
      this.renderCols()
    );
  }
});