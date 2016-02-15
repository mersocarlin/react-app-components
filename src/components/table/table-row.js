import React from 'react';


export default React.createClass({

  propTypes: {
    data: React.PropTypes.object,
    rowData: React.PropTypes.array,
    onRowClick: React.PropTypes.func,
  },

  onRowClick () {
    if (!this.props.onRowClick) return;
    this.props.onRowClick(this.props.data);
  },

  renderCols () {
    return this.props.rowData.map((data, index) => {
      if (data.html) {
        return (
          <td
            key={index}
            className={data.cssClass}
            dangerouslySetInnerHTML={{ __html: data.text }}
          >
          </td>
        );
      }

      return (
        <td key={index} className={data.cssClass}>
          {data.text}
        </td>
      );
    });
  },

  render () {
    return (
      <tr onClick={this.onRowClick}>
        {this.renderCols()}
      </tr>
    );
  },

});
