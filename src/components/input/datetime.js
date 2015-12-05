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
      value: moment(this.props.value || new Date(), "YYYY-MM-DDTHH:mm:ssZ").toDate()
    }
  },

  componentDidMount () {
    moment.locale(this.props.language);
    moment.locale(this.props.language, {
      weekdaysMin : moment.weekdaysShort()
    });

    this.replaceCalendarIcon();
  },

  replaceCalendarIcon () {
    if (this.disabled) return;

    var $elIcon = $(".datetime-component .input-group.date .input-group-addon span");
    if (!$elIcon.length) return;

    $elIcon
      .removeClass("glyphicon glyphicon-calendar")
      .addClass("fa fa-fw fa-calendar");
  },

  onChange (value) {
    if (!this.props.onChange) return;

    const date = moment(value, "YYYY-MM-DDTHH:mm:ssZ").toDate();
    this.props.onChange(date);
  },

  getValue () {
    const value = this.refs.datetime.getValue();
    const date = value ? moment(value, "YYYY-MM-DDTHH:mm:ssZ").toDate() : null;

    return date;
  },

  renderDisabled () {
    const value = moment(value).format(this.props.dateFormat);

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
