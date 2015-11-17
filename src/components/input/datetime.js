//http://eonasdan.github.io/bootstrap-datetimepicker/

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocale from 'moment/locale/pt-br';


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
      value: null
    }
  },

  componentDidMount () {
    const $el = $(ReactDOM.findDOMNode(this.refs.datetime));

    $el.datetimepicker({
      format: this.props.dateFormat
    });

    $el.on("dp.hide", () => {
      this.refs.datetime.blur();
    });

    $el.on("dp.change", () => {
      if(!this.props.onChange) return;

      this.props.onChange(this.getValue());
    });

    moment.locale(this.props.language);
    moment.locale(this.props.language, {
      weekdaysMin : moment.weekdaysShort()
    });

    if (!this.props.value) return;

    const date = moment(this.props.value, "YYYY-MM-DDTHH:mm:ssZ").toDate();
    $el.data("DateTimePicker").defaultDate(date);
  },

  getValue () {
    const $el = $(ReactDOM.findDOMNode(this.refs.datetime));

    const date = $el.data("DateTimePicker").date();
    return date ? moment(date, this.props.dateFormat).toJSON() : null;
  },

  render () {
    return (
      <div className={`datetime-component`}>
        <input
          ref="datetime"
          type="text"
          className="form-control"
          disabled={this.props.disabled} />
      </div>
    );
  }

});
