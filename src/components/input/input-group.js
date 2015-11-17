import React from 'react';


import Button from '../button';
import I from '../i';


export default React.createClass({

  propTypes: {
    leftIcon   : React.PropTypes.string,
    leftText   : React.PropTypes.string,
    onLeftClick: React.PropTypes.func,

    rightIcon   : React.PropTypes.string,
    rightText   : React.PropTypes.string,
    onRightClick: React.PropTypes.func
  },

  renderAddon (text, icon, onClick) {
    let textComponent;
    let iconComponent;

    if(text) textComponent = text;
    if(icon) iconComponent = <I icon={icon} />

    return <span onClick={onClick} className="input-group-addon">{textComponent} {iconComponent}</span>;
  },

  renderLeftAddon () {
    if(!this.props.leftText && !this.props.leftIcon && !this.props.leftButton) return;

    return this.renderAddon(this.props.leftText, this.props.leftIcon, this.props.onLeftClick);
  },

  renderRightAddon () {
    if(!this.props.rightText && !this.props.rightIcon && !this.props.rightButton) return;

    return this.renderAddon(this.props.rightText, this.props.rightIcon, this.props.onRightClick);
  },

  render () {
    return (
      <div className="input-group-component input-group">
        {this.renderLeftAddon()}
        {this.props.children}
        {this.renderRightAddon()}
      </div>
    )
  }

});
