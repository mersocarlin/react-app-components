import React from 'react';


import Checkbox from '../../../src/components/input/checkbox';
import DateTime from '../../../src/components/input/datetime';
import Radio from '../../../src/components/input/radio';
import Select from '../../../src/components/input/select';
import Text from '../../../src/components/input/text';


export default React.createClass({

  renderFormElements () {
    const items = [0,1,2].map(id => {
      return {
        id: id,
        text: `Item ${id}`
      }
    });

    const selectItems = [0,1,2,3,4,5,6,7,8].map(id => {
      return {
        value: id,
        label: `Item ${id}`
      }
    });

    return (
      <div className="row">
        <Checkbox
          checked={true}
          text="Check me if you can" />

        <DateTime
          value="25/05/2015"
          onChange={this.onChange} />

        <Radio
          items={items}
          onChange={this.onChange}
          orientation="horizontal"
          value={2} />

        <Select
          enableSearch={false}
          items={selectItems}
          multi={true}
          onChange={this.onChange}
          value={[2,3]} />

        <Text
          ref="inputField"
          number={false}
          onChange={this.onChange}
          placeholder="I'm a placeholder"
          type="text"
          uppercase={false}
          value="" />
      </div>
    );
  },

  render () {
    return (
      <div className="samples">
        {this.renderFormElements()}
      </div>
    );
  }

});
