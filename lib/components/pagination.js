"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "pagination",

  propTypes: {
    currentPage: _react2.default.PropTypes.number,
    itemsPerPage: _react2.default.PropTypes.number,
    totalItems: _react2.default.PropTypes.number,
    onPageClick: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {};
  },
  onPageClick: function onPageClick(page) {
    if (this.props.currentPage === page) {
      return;
    }
    this.props.onPageClick(page);
  },
  renderPaginationItem: function renderPaginationItem(page, active) {
    return _react2.default.createElement(
      "li",
      { key: page, className: "" + (active ? "active" : "") },
      _react2.default.createElement(
        "a",
        { onClick: this.onPageClick.bind(this, page) },
        page
      )
    );
  },
  render: function render() {
    var totalPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
    var pageItems = [];

    if (totalPages > 1) {
      for (var i = 1; i <= totalPages; i++) {
        pageItems.push(this.renderPaginationItem(i, i === this.props.currentPage));
      }
    }

    var pageInfo = "";
    if (this.props.totalItems > 0) {
      var initialPosition = (this.props.currentPage - 1) * this.props.itemsPerPage + 1;
      var finalPosition = initialPosition + this.props.itemsPerPage;
      if (finalPosition > this.props.totalItems) {
        finalPosition = this.props.totalItems;
      }
      pageInfo = "Showing " + initialPosition + " to " + finalPosition + " of " + this.props.totalItems + " entries";
    }

    return _react2.default.createElement(
      "div",
      { className: "pagination-component" },
      _react2.default.createElement(
        "div",
        { className: "pull-left" },
        _react2.default.createElement(
          "div",
          { className: "pagination-info" },
          pageInfo
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "pull-right" },
        _react2.default.createElement(
          "ul",
          { className: "pagination" },
          pageItems
        )
      )
    );
  }
});