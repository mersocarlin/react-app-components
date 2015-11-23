import React from 'react';


export default React.createClass({

  render () {
    return (
      <div className="react-app-components">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

});
