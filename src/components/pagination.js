import React from 'react';


export default React.createClass({

  propTypes: {
    currentPage: React.PropTypes.number,
    itemsPerPage: React.PropTypes.number,
    totalItems: React.PropTypes.number,
    onPageClick: React.PropTypes.func,
  },

  getDefaultProps () {
    return { };
  },

  onPageClick (page) {
    if (this.props.currentPage === page) {
      return;
    }
    this.props.onPageClick(page);
  },

  renderPaginationItem (page, active) {
    return (
      <li key={page} className={`${active ? 'active' : ''}`}>
        <a onClick={this.onPageClick.bind(this, page)}>{page}</a>
      </li>
    );
  },

  render () {
    const totalPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
    const pageItems = [];

    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        pageItems.push(this.renderPaginationItem(i, i === this.props.currentPage));
      }
    }

    let pageInfo = '';
    if (this.props.totalItems > 0) {
      const initialPosition = (this.props.currentPage - 1) * this.props.itemsPerPage + 1;
      let finalPosition = initialPosition + this.props.itemsPerPage;
      if (finalPosition > this.props.totalItems) {
        finalPosition = this.props.totalItems;
      }
      pageInfo = `Showing ${initialPosition} to ${finalPosition} of ${this.props.totalItems} entries`;
    }

    return (
      <div className="pagination-component">
        <div className="pull-left">
          <div className="pagination-info">
            {pageInfo}
          </div>
        </div>
        <div className="pull-right">
          <ul className="pagination">
            {pageItems}
          </ul>
        </div>
      </div>
    );
  },

});
