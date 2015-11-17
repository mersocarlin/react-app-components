import React from 'react';


export default React.createClass({

  propTypes: {
    cssClass  : React.PropTypes.string,
    headerIcon: React.PropTypes.string,
    headerText: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      cssClass  : "",
      headerIcon: "",
      headerText: ""
    };
  },

  renderHeader () {
    if (!this.props.headerText) {
      return;
    }

    return (
      <div className="panel-heading">
        <span className="panel-title">
          <span className={`fa fa-${this.props.headerIcon}`}></span>
          {this.props.headerText}
        </span>
      </div>
    );
  },

  render () {
    const panelCssClass = `panel panel-component ${this.props.cssClass}`;

    return (
      <div className={panelCssClass}>
        {this.renderHeader()}
        {this.props.children}
      </div>
    );
  }

});
