'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tableHeader = require('./table-header');

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _tableRow = require('./table-row');

var _tableRow2 = _interopRequireDefault(_tableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'table',

  propTypes: {
    cols: _react2.default.PropTypes.array,
    data: _react2.default.PropTypes.array,
    emptyTableText: _react2.default.PropTypes.string,
    limit: _react2.default.PropTypes.number,
    offset: _react2.default.PropTypes.number,
    onRowClick: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      cols: [],
      data: [],
      emptyTableText: "No results.",
      limit: -1,
      offset: -1
    };
  },
  onRowClick: function onRowClick(data) {
    if (!this.props.onRowClick) return;
    this.props.onRowClick(data);
  },
  renderHeader: function renderHeader() {
    return this.props.cols.map(function (col, index) {
      return _react2.default.createElement(_tableHeader2.default, {
        key: index,
        headerCssClass: col.headerCssClass,
        dataCssClass: col.dataCssClass ? col.dataCssClass : "text-center",
        text: col.text });
    });
  },
  renderRows: function renderRows() {
    var _this = this;

    if (this.props.limit === -1 || this.props.offset === -1) {
      return this.props.data.map(function (data, index) {
        var rowData = [];

        _this.props.cols.map(function (col) {
          rowData.push({
            cssClass: col.dataCssClass ? col.dataCssClass : "text-center",
            html: col.html,
            text: data[col.field]
          });
        });

        return _react2.default.createElement(_tableRow2.default, { data: data, rowData: rowData, key: index, onRowClick: _this.onRowClick });
      });
      return;
    }

    var initialPos = (this.props.offset - 1) * this.props.limit;
    var finalPos = initialPos + this.props.limit;
    if (finalPos > this.props.data.length) {
      finalPos = this.props.data.length;
    }

    var components = [];

    var _loop = function _loop(i) {
      var rowData = [];

      _this.props.cols.map(function (col) {
        rowData.push({
          cssClass: col.dataCssClass ? col.dataCssClass : "text-center",
          html: col.html,
          text: _this.props.data[i][col.field]
        });
      });
      components.push(_react2.default.createElement(_tableRow2.default, { data: _this.props.data[i], rowData: rowData, onRowClick: _this.onRowClick }));
    };

    for (var i = initialPos; i < finalPos; i++) {
      _loop(i);
    }

    return { components: components };
  },
  render: function render() {
    if (!this.props.data || this.props.data.length === 0) {
      return _react2.default.createElement(
        'div',
        { className: 'empty-table' },
        _react2.default.createElement(
          'div',
          { className: 'text-center' },
          this.props.emptyTableText
        )
      );
    }

    var tableCssClass = 'table-responsive table-component ' + (this.props.onRowClick ? "table-clickable" : "");

    return _react2.default.createElement(
      'div',
      { className: tableCssClass },
      _react2.default.createElement(
        'table',
        { className: 'table table-hover fs13' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            { className: 'bg-light' },
            this.renderHeader()
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.renderRows()
        )
      )
    );
  }
});