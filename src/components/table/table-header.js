import React from 'react';


export default React.createClass({

  propTypes: {
    headerCssClass: React.PropTypes.string,
    dataCssClass: React.PropTypes.string,
    text: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      headerCssClass: "text-center",
      dataCssClass: "text-center",
      text: ""
    }
  },

  render() {
    return (
      <th className={this.props.headerCssClass}>{this.props.text}</th>
    );
  }

});
