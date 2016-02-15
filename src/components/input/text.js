import React from 'react';


export default React.createClass({

  propTypes: {
    disabled: React.PropTypes.bool,
    number: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    type: React.PropTypes.string,
    uppercase: React.PropTypes.bool,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
    ]),
  },

  getDefaultProps () {
    return {
      disabled: false,
      number: false,
      type: 'text',
      uppercase: true,
    };
  },

  getInitialState () {
    return {
      value: this.props.value,
    };
  },

  onChange (event) {
    let text = event.target.value;

    if (this.props.number) {
      const numberPattern = /\d+/g;
      const match = text.match(numberPattern);

      text = '';
      if (match) {
        text = match.join('');
      }
    }

    this.setState({ value: text });

    if (!this.props.onChange) return;

    this.props.onChange(text);
  },

  onKeyUp (event) {
    if (!this.props.onKeyUp) return;

    this.props.onKeyUp(event);
  },

  getValue () {
    if (!this.state.value) {
      return this.state.value;
    }

    if (this.props.number) {
      return this.state.value;
    }

    if (this.props.uppercase) {
      return this.state.value.toUpperCase();
    }
    return this.state.value;
  },

  render () {
    const opts = {
      type: this.props.type,
      placeholder: this.props.placeholder,
      value: this.state.value,
    };

    if (this.props.disabled) {
      opts.disabled = this.props.disabled;
    }

    const inputCssClass = `text-component form-control ${this.props.uppercase ? 'uppercase' : ''}`;

    return (
      <input ref="inputText" className={inputCssClass} {...opts} onChange={this.onChange} onKeyUp={this.onKeyUp} />
    );
  },

});
