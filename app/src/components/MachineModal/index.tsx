import { Modal, TouchableOpacity } from 'react-native';
import { Close } from '../Icons/Close';

import { Text } from '../Text';

import { ModalBody, Overlay, Header, Form } from './styles';

export function MachineModal() {
  return (
    <Modal
      transparent
    >
      <Overlay>
        <ModalBody>
          <Header>
            <Text weight='600'>Selecione a máquina</Text>

            <TouchableOpacity>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>

          <Form></Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
