import React from 'react';


export default React.createClass({

  render () {
    return (
      <div className="react-app-components">
        {this.props.children}
      </div>
    );
  }

});
