import React from 'react';


import Checkbox from './checkbox';
import DateTime from './datetime';
import InputGroup from './input-group';
import Radio from './radio';
import Select from './select';
import Text from './text';


export default React.createClass({

  propTypes: {
    disabled: React.PropTypes.bool,
    field   : React.PropTypes.object,
    hasError: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onKeyUp : React.PropTypes.func,
    value   : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
  },

  getValue () {
    return this.refs.inputField.getValue();
  },

  onChange (value, text) {
    if (!this.props.onChange) return;

    this.props.onChange(this.props.field, value, text);
  },

  onKeyUp (event) {
    if (!this.props.onKeyUp) return;

    this.props.onKeyUp(this.props.field, event);
  },

  renderInputGroup () {
    const inputGroup = this.props.field.inputGroup;

    return (
      <InputGroup
        leftIcon={inputGroup.leftIcon}
        leftText={inputGroup.leftText}
        onLeftClick={inputGroup.onLeftClick}
        rightIcon={inputGroup.rightIcon}
        rightText={inputGroup.rightText}
        onRightClick={inputGroup.onRightClick}>
        {this.renderInput()}
      </InputGroup>
    );
  },

  renderInput () {
    const field = this.props.field;

    switch (field.type) {
      case "checkbox":
        return (
          <Checkbox
            ref="inputField"
            checked={this.props.value}
            text={field.label} />
        );
      case "date":
        return (
          <DateTime
            ref="inputField"
            value={this.props.value}
            disabled={this.props.disabled}
            onChange={this.onChange} />
        );
      case "radio":
        return (
          <Radio
            ref="inputField"
            name={field.fieldName}
            items={field.items}
            onChange={this.onChange}
            orientation={field.orientation}
            value={this.props.value} />
        );
      case "select":
        return (
          <Select
            ref="inputField"
            ajax={field.ajax}
            ajaxUrl={field.ajaxUrl}
            enableSearch={field.enableSearch === "1"}
            includeIfEmpty={field.includeIfEmpty}
            items={field.items}
            multiple={field.multiple}
            onChange={this.onChange}
            value={this.props.value} />
        );
      default:
        return (
          <Text
            ref="inputField"
            disabled={field.disabled}
            inputGroup={field.inputGroup}
            number={field.number}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
            placeholder={field.placeholder}
            type={field.type}
            uppercase={field.uppercase}
            value={this.props.value} />
        );
    }
  },

  render () {
    let labelComponent;
    if (this.props.field.type !== "checkbox" &&  this.props.field.label) {
      labelComponent = <label className="control-label">{this.props.field.label}</label>;
    }

    const cssClass = `form-group-component form-group ${this.props.hasError? "has-error" : ""} ${this.props.field.type === "radio" ? "clearfix" : ""}`;

    return (
      <div className={cssClass}>
        {labelComponent}
        {this.props.field.inputGroup && this.renderInputGroup()}
        {!this.props.field.inputGroup && this.renderInput()}
      </div>
    );
  }

});
