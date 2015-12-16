import React from 'react';


export default React.createClass({

  propTypes: {
    checked: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number,
    ]),
    text: React.PropTypes.string,
  },

  getInitialState () {
    return {
      checked: this.props.checked,
    };
  },

  onClick () {
    this.setState({ checked: !this.state.checked });
  },

  getValue () {
    return this.state.checked;
  },

  render () {
    const opts = {
      type: 'radio',
      checked: this.state.checked,
      onChange: () => {},
    };

    return (
      <div className="checkbox-component checkbox-custom" onClick={this.onClick}>
        <input {...opts} />
        <label>{this.props.text}</label>
      </div>
    );
  },

});
