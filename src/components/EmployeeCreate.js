import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='name'
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Itme label='Monday' value='Monday' />
            <Picker.Itme label='Tuesday' value='Tuesday' />
            <Picker.Itme label='Wednesday' value='Wednesday' />
            <Picker.Itme label='Thursday' value='Thursday' />
            <Picker.Itme label='Friday' value='Friday' />
            <Picker.Itme label='Saturday' value='Saturday' />
            <Picker.Itme label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);