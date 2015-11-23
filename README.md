# react-app-components

Are you tired of copy and paste the same code in every new project ? So do I ;)  

I decided to build a new package with some React form components, easy to plug, easy to use and easy to code!

## What do we have here?

* [x] Checkbox
* [x] DateTime
* [x] Radio
* [x] Select
* [x] Text
* [x] Table
* [x] Icon (font-awesome)
* [x] Simple loader
* [x] Pagination links

## Show me the code

```javascript
import React from 'react';
import {
  Button,
  Checkbox,
  DateTime,
  Radio,
  Select,
  Text,
  Panel,
  PanelFooter,
  Table,
  I,
  Loader,
  Pagination
} from 'react-app-components';

export default React.createClass({

  onChange () { },
  onKeyUp () { },
  onClick () { },
  onRowClick () { },

  renderButtons () {
    return (
      <div className="row">
        <Button
          icon="times"
          onClick={this.onClick}
          text="Default button" />

        <Button
          cssClass="primary"
          icon="user"
          onClick={this.onClick}
          text="Primary button" />

        <Button
          cssClass="warning"
          icon="bank"
          onClick={this.onClick}
          text="Warning button" />

        <Button
          cssClass="info"
          icon="car"
          onClick={this.onClick}
          text="Info button" />

        <Button
          cssClass="danger"
          icon="bug"
          onClick={this.onClick}
          text="Danger button" />
      </div>
    );
  },

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
          onKeyUp={this.onKeyUp}
          placeholder="I'm a placeholder"
          type="text"
          uppercase={false}
          value="" />
      </div>
    );
  },

  renderTable () {
    const columns = [
      { headerCssClass: "text-center", dataCssClass: "text-left",   text: "Name",  field: "name" },
      { headerCssClass: "text-center", dataCssClass: "text-center", text: "Email", field: "email" }
    ];

    const tableData = [0,1,2,3,4,5].map(id => {
      return {
        id: id,
        name: `Item ${id}`,
        email: `item${id}@mail.com`
      }
    });

    return <Table cols={columns} data={tableData} onRowClick={this.onRowClick} />;
  },

  render () {
    return (
      <div>
        <Panel headerIcon="mouse-pointer" headerText="Buttons">
          <div className="panel-body">
            {this.renderButtons()}
          </div>
        </Panel>
        <Panel headerIcon="bars" headerText="Form Elements">
          <div className="panel-body">
            {this.renderFormElements()}
          </div>
        </Panel>
        <Panel headerIcon="table" headerText="Table">
          <div className="panel-body">
            {this.renderTable()}
          </div>
        </Panel>
      </div>
    );
  }

});

```
