import React, {Component} from 'react'
import {Body, Form, Item, Picker} from 'native-base';

export default class Select extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value : string) {
    this.setState({selected2: value});
  }

  render() {
    return (
      <Body>
        <Form>
          <Picker
            mode="dropdown"
            placeholder="1kg"
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2.bind(this)}>
            <Item label="2 kg" value="key0"/>
            <Item label="3 kg" value="key1"/>
            <Item label="4 kg" value="key2"/>
            <Item label="5 kg" value="key3"/>
            <Item label="6 kg" value="key4"/>
          </Picker>
        </Form>
      </Body>
    );
  }
}
