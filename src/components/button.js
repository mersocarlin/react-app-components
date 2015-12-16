import React from 'react';


import I from './i';


export default React.createClass({

  propTypes: {
    cssClass: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    text: React.PropTypes.string,
  },

  getDefaultProps () {
    return {
      cssClass: 'default',
    };
  },

  onClick () {
    if (!this.props.onClick) return;

    this.props.onClick();
  },

  render () {
    let icon;
    if (this.props.icon) {
      icon = <I icon={this.props.icon} />;
    }

    return (
      <button className={`btn btn-${this.props.cssClass}`} type="button" onClick={this.onClick}>
        {icon} {this.props.text}
      </button>
    );
  },

});
