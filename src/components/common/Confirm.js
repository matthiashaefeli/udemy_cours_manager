import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection, Button } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => { }}
      transparent
      visible={visible}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };