//http://eonasdan.github.io/bootstrap-datetimepicker/

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocale from 'moment/locale/pt-br';
import DateTimePicker from 'react-bootstrap-datetimepicker';


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
      value: this.props.value ? moment(this.props.value, "YYYY-MM-DDTHH:mm:ssZ").toDate() : new Date()
    }
  },

  componentDidMount () {
    moment.locale(this.props.language);
    moment.locale(this.props.language, {
      weekdaysMin : moment.weekdaysShort()
    });
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

  render () {
    return (
      <div className="datetime-component">
        <DateTimePicker
          ref="datetime"
          inputFormat={this.props.dateFormat}
          locale={this.props.language}
          mode="date"
          onChange={this.onChange} />
      </div>
    );
  }

});
