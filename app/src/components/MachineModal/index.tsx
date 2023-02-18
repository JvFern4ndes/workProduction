import { Modal, TouchableOpacity, Platform } from 'react-native';

import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Button } from '../Button';

import {
  ModalBody,
  Overlay,
  Header,
  Form,
  Input
} from './styles';
import { useState } from 'react';

interface MachineModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (machine: string) => void;
}

export function MachineModal({ visible, onClose, onSave }: MachineModalProps) {
  const [machine, setMachine] = useState('');

  function handleConfirm() {
    onSave(machine);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Selecione a máquina</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Máquina"
              placeholderTextColor="#666"
              onChangeText={setMachine}
            />

            <Button onPress={handleConfirm} disabled={machine.length === 0}>
              Confirmar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
