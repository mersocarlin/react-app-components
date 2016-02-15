import 'bootstrap-datepicker';
import $ from 'jquery';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

require('bootstrap-datepicker/dist/css/bootstrap-datepicker3.css');


const BACKSPACE_KEY_CODE = 8;


export default class Datepicker extends Component {

  static propTypes = {
    dateFormat: PropTypes.string,
    disabled: PropTypes.bool,
    language: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    dateFormat: 'dd/mm/yyyy',
    language: 'pt-BR',
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.createDatepicker(this.props);

    $.fn.datepicker.dates['pt-BR'] = {
      days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      monthsTitle: 'Meses',
      clear: 'Limpar',
      format: 'dd/mm/yyyy',
    };
  }

  getValue () {
    return $(this.refs.input).datepicker('getDate');
  }

  updateValue (value) {
    const { input } = this.refs;

    if (!value) {
      $(input).datepicker('clearDates');
      return;
    }

    $(input).datepicker('update', moment(value).toDate());
    $(input).datepicker('update');
  }

  createDatepicker ({ dateFormat, language, value }) {
    const jqo = $(this.refs.input);
    jqo.datepicker('remove');
    jqo.datepicker({
      autoclose: true,
      clearBtn: true,
      forceParse: false,
      format: dateFormat,
      language,
    });
    jqo.datepicker().on('hide', () => {
      this.handleChange();
    });

    this.updateValue(value);
  }

  handleCalendarClick () {
    if (this.props.disabled) {
      return;
    }

    $(this.refs.input).datepicker('show');
  }

  handleChange () {
    if (!this.props.onChange) {
      return;
    }

    const date = $(this.refs.input).datepicker('getDate');
    this.props.onChange(date);
  }

  handleInputChangeAndAddSlashes (event) {
    let { value } = this.refs.input;

    if (!value) {
      return;
    }

    const isBackspace = event && event.keyCode === BACKSPACE_KEY_CODE;
    const hasDayOrMonthMaskCompleted = value.length === 2 || value.length === 5;

    if (!isBackspace && hasDayOrMonthMaskCompleted) {
      value += '/';
    }

    this.refs.input.value = value;
  }

  render () {
    const { dateFormat } = this.props;

    return (
      <div className="datepicker-component input-group">
        <input
          disabled
          ref="input"
          type="text"
          className="form-control"
          onClick={::this.handleCalendarClick}
          onKeyUp={::this.handleInputChangeAndAddSlashes}
          placeholder={dateFormat.toUpperCase()}
        />
        <span className="input-group-addon" onClick={::this.handleCalendarClick}>
          <i className="fa fa-fw fa-calendar"></i>
        </span>
      </div>
    );
  }

}
