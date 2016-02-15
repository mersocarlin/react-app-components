import React from 'react';
import moment from 'moment';


import FormGroup from './form-group';


export default React.createClass({

  propTypes: {
    errors: React.PropTypes.object,
    fields: React.PropTypes.array,
    object: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
  },

  getDefaultProps () {
    return {
      errors: {},
      fields: [],
      object: {},
    };
  },

  onChange (field, value) {
    if (!this.props.onChange) return;

    this.props.onChange(field, value);
  },

  onKeyUp (field, event) {
    if (!this.props.onKeyUp) return;

    this.props.onKeyUp(field, event);
  },

  getFormData () {
    const payload = {};
    for (const ref in this.refs) {
      if (!this.refs[ref].getValue) continue;

      payload[ref] = this.refs[ref].getValue();
    }
    return payload;
  },

  mapColumns (rows, columns, errors) {
    return (
      <div key={rows.length} className="row">
        {
          columns.map((column, index) => {
            const disabled = column.field.disabled;

            let value = null;

            if (column.field.name === 'createdAt' && !this.props.object) {
              value = moment();
            } else if (this.props.object) {
              value = this.props.object[column.field.name];
            }

            return (
              <div key={index} className={column.cssClass}>
                <FormGroup
                  ref={column.field.name}
                  disabled={disabled}
                  field={column.field}
                  hasError={errors[column.field.name]}
                  onChange={this.onChange}
                  onKeyUp={this.onKeyUp}
                  value={value}
                />
              </div>
            );
          })
        }
      </div>
    );
  },

  render () {
    const rows = [];

    const errors = this.props.errors;
    for (let i = 0; i < this.props.fields.length; i++) {
      const columns = this.props.fields[i].columns;
      rows.push(this.mapColumns(rows, columns, errors));
    }

    return (
      <div className="form-fields">
        {rows}
      </div>
    );
  },

});
