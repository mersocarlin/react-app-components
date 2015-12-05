//http://eonasdan.github.io/bootstrap-datetimepicker/

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocale from 'moment/locale/pt-br';
import DateTimePicker from 'react-bootstrap-datetimepicker';


import InputGroup from './input-group';
import Text from './text';


export default React.createClass({

  propTypes: {
    dateFormat: React.PropTypes.string,
    disabled  : React.PropTypes.bool,
    language  : React.PropTypes.string,
    onChange  : React.PropTypes.func,
    value     : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object
    ]),
  },

  getDefaultProps () {
    return {
      dateFormat: "DD/MM/YYYY",
      language  : "pt-br"
    };
  },

  getInitialState () {
    return {
      value: this.props.value || new Date()
    }
  },

  componentDidMount () {
    moment.locale(this.props.language);
    moment.locale(this.props.language, {
      weekdaysMin : moment.weekdaysShort()
    });

    this.disabledInput();
    this.replaceCalendarIcon();
  },

  disabledInput () {
    if (this.props.disabled) return;

    const $elInput = $(".datetime-component .input-group.date .form-control");
    if (!$elInput.length) return;

    $elInput.attr({
      "disabled": "disabled"
    });
  },

  replaceCalendarIcon () {
    if (this.props.disabled) return;

    const $elIcon = $(".datetime-component .input-group.date .input-group-addon span");
    if (!$elIcon.length) return;

    $elIcon
      .removeClass("glyphicon glyphicon-calendar")
      .addClass("fa fa-fw fa-calendar");
  },

  parseValue (value) {
    const date = value ? moment(value, this.props.dateFormat).toDate() : null;

    return date;
  },

  onChange (value) {
    if (!this.props.onChange) return;

    const date = this.parseValue(value);
    this.props.onChange(date);
  },

  getValue () {
    const value = this.refs.datetime.getValue();
    const date = this.parseValue(value);

    return date;
  },

  renderDisabled () {
    const value = moment(this.state.value).format(this.props.dateFormat);

    return (
      <InputGroup
        rightIcon="calendar">
        <Text ref="datetime" disabled={true} type="text" value={value} />
      </InputGroup>
    );
  },

  render () {
    if (this.props.disabled) {
      return this.renderDisabled();
    }

    const opts = {
      ref: "datetime",
      dateTime: moment(this.state.value).format(this.props.dateFormat),
      format: this.props.dateFormat,
      inputFormat: this.props.dateFormat,
      locale: this.props.language,
      mode: "date"
    };

    return (
      <div className="datetime-component">
        <DateTimePicker {...opts} />
      </div>
    );
  }

});
