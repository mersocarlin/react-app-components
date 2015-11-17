import React from 'react';


export default React.createClass({

  propTypes: {
    ajax          : React.PropTypes.bool,
    ajaxUrl       : React.PropTypes.string,
    includeIfEmpty: React.PropTypes.bool,
    items         : React.PropTypes.array,
    enableSearch  : React.PropTypes.bool,
    multiple      : React.PropTypes.bool,
    onChange      : React.PropTypes.func,
    value         : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
  },

  getDefaultProps () {
    return {
      ajax          : false,
      includeIfEmpty: false,
      items         : [],
      enableSearch  : true,
      value         : null
    }
  },

  componentDidMount () {
    const $el = $(this.refs.select);

    if (this.props.ajax) {
      const that = this;
      $el.select2({
        ajax: {
          url: `${this.props.ajaxUrl}`,
          dataType: 'json',
          delay: 250,
          headers: {
            "Authorization" : "Bearer " + localStorage.accessToken,
            "Content-Type" : "application/json",
          },
          data: function (params) {
            return {
              query: params.term, // search term
              includeIfEmpty: that.props.includeIfEmpty,
              page: params.page
            };
          },
          processResults: function (data, page) {
            let items = [];

            if (data) {
              items = data.data.map(item => {
                return {
                  id: item.id,
                  text: item.name
                }
              })
            }

            return {
              results: items,
              pagination: { more: data.more }
            };
          },
          cache: true
        },
        escapeMarkup: function (markup) { return markup; },
        minimumInputLength: 1,
      });
    }
    else {
      const options = { };

      if (!this.props.enableSearch)
        options.minimumResultsForSearch = -1;

      $el.select2(options);
    }

    $el.on("change", (e) => {
      if (!this.props.onChange) return;
      if (!this.getValue()) return;

      this.props.onChange(this.getValue(), this.getText());
    });
  },

  getValue () {
    return $(this.refs.select).select2("val");
  },

  getText () {
    const data = $(this.refs.select).select2("data")[0];
    return data.text;
  },

  clear () {
    $(this.refs.select).select2("val", null);
  },

  render () {
    if (this.props.ajax) {
      return (
        <div className={`select-component`}>
          <select ref="select">
            {/*<option value="3620194" selected="selected">select2/select2</option>*/}
          </select>
        </div>
      );
    }

    const opts = { };

    if (this.props.multiple)
      opts.multiple = true;

    const selected = (item) => {
      if (!this.props.value) return false;

      if (this.props.value.constructor == Array) {
        return this.props.value.find(val => val.id === item.id) != null;
      }
      else {
        return item.id === this.props.value;
      }
    };

    return (
      <div className={`select-component`}>
        <select ref="select" {...opts}>
          {
            this.props.items.map((item, index) => {
              const itemOpts = {
                key: index,
                value: item.id,
                selected: selected(item)
              };

              return <option {...itemOpts}>{item.text}</option>
            })
          }
        </select>
      </div>
    );
  }

});
