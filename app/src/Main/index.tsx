import {
  Container,
  StatusContainer,
  OrdersContainer,
  Footer,
  FooterContainer,
} from './styles';

import { Header } from '../components/Header';
import { Orders } from '../components/Orders';
import { Status } from '../components/Status';
import { Button } from '../components/Button';
import { MachineModal } from '../components/MachineModal';
import { useState } from 'react';

export function Main() {
  const [isMachineModalVisible, setIsMachineModalVisible] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState('');

  function handleSaveMachine(machine: string) {
    setSelectedMachine(machine);
  }

  return (
    <>
      <Container>
        <Header />

        <StatusContainer>
          <Status />
        </StatusContainer>

        <OrdersContainer>
          <Orders />
        </OrdersContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedMachine && (
            <Button onPress={() => setIsMachineModalVisible(true)}>
              Iniciar Produção
            </Button>
          )}
        </FooterContainer>
      </Footer>

      <MachineModal
        visible={isMachineModalVisible}
        onClose={() => setIsMachineModalVisible(false)}
        onSave={handleSaveMachine}
      />
    </>
  );
}
