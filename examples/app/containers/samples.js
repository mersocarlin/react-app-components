import React from 'react';

import Button from '../../../src/components/button';
import Checkbox from '../../../src/components/input/checkbox';
import DatePicker from '../../../src/components/input/datepicker';
import Panel from '../../../src/components/panel/panel';
import Radio from '../../../src/components/input/radio';
import Select from '../../../src/components/input/select';
import Table from '../../../src/components/table/table';
import Text from '../../../src/components/input/text';


export default React.createClass({

  renderButtons () {
    return (
      <div className="buttons">
        <Button
          icon="times"
          onClick={this.onClick}
          text="Default button"
        />

        <Button
          cssClass="primary"
          icon="user"
          onClick={this.onClick}
          text="Primary button"
        />

        <Button
          cssClass="warning"
          icon="bank"
          onClick={this.onClick}
          text="Warning button"
        />

        <Button
          cssClass="info"
          icon="car"
          onClick={this.onClick}
          text="Info button"
        />

        <Button
          cssClass="danger"
          icon="bug"
          onClick={this.onClick}
          text="Danger button"
        />
      </div>
    );
  },

  renderFormElements () {
    const genderItems = [
      { id: 0, text: 'Female' },
      { id: 1, text: 'Male' },
    ];

    const selectItems = [
      { value: 0, label: 'Australia' },
      { value: 1, label: 'Brazil' },
      { value: 2, label: 'Canada' },
      { value: 3, label: 'Italy' },
      { value: 4, label: 'United Kingdom' },
      { value: 5, label: 'United States' },
    ];

    return (
      <div className="form-elements">
        <div className="row">
          <div className="col-xs-6">
            <Checkbox
              checked={true}
              text="Active"
            />
          </div>
          <div className="col-xs-6">
            <Radio
              items={genderItems}
              onChange={this.onChange}
              orientation="horizontal"
              value={2}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <Text
              ref="firstName"
              number={false}
              onChange={this.onChange}
              placeholder="First name"
              type="text"
              uppercase={false}
              value=""
            />
          </div>
          <div className="col-xs-6">
            <Text
              ref="lastName"
              number={false}
              onChange={this.onChange}
              placeholder="Last name"
              type="text"
              uppercase={false}
              value=""
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4">
            <DatePicker
              value={new Date()}
              onChange={this.onChange}
            />
          </div>
          <div className="col-xs-4">
            <Text
              ref="age"
              number={true}
              onChange={this.onChange}
              placeholder="Age"
              type="text"
              uppercase={false}
              value=""
            />
          </div>
          <div className="col-xs-4">
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <Text
              ref="address"
              number={false}
              onChange={this.onChange}
              placeholder="Address"
              type="text"
              uppercase={false}
              value=""
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <Select
              enableSearch={false}
              items={selectItems}
              multi={false}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  },

  renderTable () {
    const columns = [
      { headerCssClass: 'text-center', dataCssClass: 'text-left', text: 'Name', field: 'name' },
      { headerCssClass: 'text-center', dataCssClass: 'text-center', text: 'Email', field: 'email' },
    ];

    const tableData = [0, 1, 2, 3, 4, 5].map(id => {
      return {
        id,
        name: `Item ${id}`,
        email: `item${id}@mail.com`,
      };
    });

    return <Table cols={columns} data={tableData} onRowClick={this.onRowClick} />;
  },

  render () {
    return (
      <div className="samples">
        <div className="jumbotron">
          <div className="container">
            <h1>react-app-components</h1>
            <p>React components made easy!</p>
            <p><a className="btn btn-primary btn-lg" href="https://github.com/mersocarlin/react-app-components" role="button">Learn more</a></p>
          </div>
        </div>

        <div className="container">
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
      </div>
    );
  },

});
