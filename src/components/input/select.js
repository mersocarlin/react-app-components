import React from 'react';
import Select from 'react-select';


export default React.createClass({

  propTypes: {
    enableSearch  : React.PropTypes.bool,
    items         : React.PropTypes.array,
    multi         : React.PropTypes.bool,
    onChange      : React.PropTypes.func,
    onInputChange : React.PropTypes.func,
    value         : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
  },

  getDefaultProps () {
    return {
      enableSearch  : true,
      items         : [],
      multi         : false,
      value         : null
    }
  },

  getValue () {
    const value = this.refs.select.state.value;

    if (this.props.multi) {
      return value.split(",");
    }

    return value;
  },

  getText () {
    const value = this.refs.select.state.values;

    if (!value) return "";

    if (this.props.multi) {
      return value.map(val => {
        return val.label
      }).join(", ");
    }

    return value[0].label;
  },

  clear () {
    this.refs.select.clearValue();
  },

  onChange (val, arr) {
    if (!this.props.onChange) return;
    if (!val) return this.props.onChange(null, null);

    let value = val;
    let text = arr ? arr[0].label : "";

    if (this.props.multi) {
      value = val.split(",");
    }

    this.props.onChange(value, text);
  },

  onInputChange (text) {
    if (!this.props.onInputChange) return;

    this.props.onInputChange(text[0]);
  },

  render () {
    const opts = {
      ref: "select",
      clearable: false,
      multi: this.props.multi,
      onChange: this.props.onChange,
      onInputChange: this.props.onInputChange,
      options: this.props.items,
      searchable: this.props.enableSearch,
      value: this.props.value
    };

    return (
      <div className="select-component">
        <Select {...opts} />
      </div>
    );
  }

});
