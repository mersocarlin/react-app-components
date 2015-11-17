import React from 'react';


export default React.createClass({

  propTypes: {
    items      : React.PropTypes.array, //{id, name, checked}
    name       : React.PropTypes.string,
    onChange   : React.PropTypes.func,
    orientation: React.PropTypes.string,
    value      : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object
    ]),
  },

  getDefaultProps () {
    return {
      orientation: "horizontal",
      value      : null
    }
  },

  getInitialState () {
    let selectedItem;

    if (this.props.value)
      selectedItem = this.props.items.find(item => item.id == this.props.value) || this.props.items[0];
    else
      selectedItem = this.props.items.find(item => item.checked) || this.props.items[0];

    return {
      selectedItem: selectedItem
    }
  },

  onChange (item) {
    if (!this.props.onChange) return;

    this.props.onChange(item);
  },

  getValue () {
    return this.state.selectedItem.id
  },

  onClick (item) {
    this.setState({
      selectedItem: item
    });

    this.onChange(item);
  },

  render () {
    return (
      <div className={`radio-component ${this.props.orientation}`}>
        {
          this.props.items.map((item, index) => {
            let opts = { name: this.props.name };
            if(item.id === this.state.selectedItem.id) {
              opts.checked = true;
            }

            return (
              <div key={index} className="radio-custom radio-primary" onClick={this.onClick.bind(this, item)}>
                <input type="radio" {...opts} onChange={() => {}} />
                <label>{item.text}</label>
              </div>
            )
          })
        }
      </div>
    );
  }

});
