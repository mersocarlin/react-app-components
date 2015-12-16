import React from 'react';


export default React.createClass({

  propTypes: { },

  getDefaultProps () {
    return { };
  },

  render () {
    return (
      <div className="panel-footer clearfix">
        {this.props.children}
      </div>
    );
  },

});
