import React from 'react';


import TableHeader from './table-header';
import TableRow from './table-row';


export default React.createClass({

  propTypes: {
    cols          : React.PropTypes.array,
    data          : React.PropTypes.array,
    emptyTableText: React.PropTypes.string,
    limit         : React.PropTypes.number,
    offset        : React.PropTypes.number,
    onRowClick    : React.PropTypes.func
  },

  getDefaultProps () {
    return {
      cols          : [],
      data          : [],
      emptyTableText: "No results.",
      limit         : -1,
      offset        : -1
    }
  },

  onRowClick (data) {
    if (!this.props.onRowClick) return;
    this.props.onRowClick(data);
  },

  renderHeader () {
    return this.props.cols.map((col, index) => {
      return <TableHeader
              key={index}
              headerCssClass={col.headerCssClass}
              dataCssClass={col.dataCssClass ? col.dataCssClass : "text-center"}
              text={col.text} />;
    });
  },

  renderRows () {
    if (this.props.limit === -1 || this.props.offset === -1) {
      return this.props.data.map((data, index) => {
        let rowData = [];

        this.props.cols.map(col => {
          rowData.push({
            cssClass: col.dataCssClass ? col.dataCssClass : "text-center",
            html: col.html,
            text: data[col.field]
          });
        });

        return <TableRow data={data} rowData={rowData} key={index} onRowClick={this.onRowClick} />;
      });
      return;
    }

    const initialPos = (this.props.offset - 1) * this.props.limit;
    let finalPos = initialPos + this.props.limit;
    if (finalPos > this.props.data.length) {
      finalPos = this.props.data.length;
    }

    let components = [];
    for (let i = initialPos; i < finalPos; i++) {
      let rowData = [];

      this.props.cols.map(col => {
        rowData.push({
          cssClass: col.dataCssClass ? col.dataCssClass : "text-center",
          html: col.html,
          text: this.props.data[i][col.field]
        });
      });
      components.push(<TableRow data={this.props.data[i]} rowData={rowData} onRowClick={this.onRowClick} />);
    }

    return {components};
  },

  render() {
    if (!this.props.data || this.props.data.length === 0) {
      return (
        <div className="empty-table">
          <div className="text-center">
            {this.props.emptyTableText}
          </div>
        </div>
      );
    }

    const tableCssClass = `table-responsive table-component ${this.props.onRowClick ? "table-clickable" : ""}`;

    return (
      <div className={tableCssClass}>
        <table className="table table-hover fs13">
          <thead>
            <tr className="bg-light">
              {this.renderHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }

});
