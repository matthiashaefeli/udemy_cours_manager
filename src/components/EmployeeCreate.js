import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='name'
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

        <CardSection>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate