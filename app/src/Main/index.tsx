import { useState } from 'react';

import {
  Container,
  StatusContainer,
  OrdersContainer,
  Footer,
  FooterContainer,
} from './styles';

import { Header } from '../components/Header';
import { Status } from '../components/Status';
import { Orders } from '../components/Orders';
import { Button } from '../components/Button';
import { MachineModal } from '../components/MachineModal';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Order } from '../types/Order';

export function Main() {
  const [isMachineModalVisible, setIsMachineModalVisible] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveMachine(machine: string) {
    setSelectedMachine(machine);
  }

  function handleCancelOrder() {
    setSelectedMachine('');
  }

  function handleAddToCart(order: Order) {
    alert(order._id);
  }

  return (
    <>
      <Container>
        <Header
          selectedMachine={selectedMachine}
          onCancelOrder={handleCancelOrder}
        />

        <StatusContainer>
          <Status />
        </StatusContainer>

        <OrdersContainer>
          <Orders onAddToCart={handleAddToCart} />
        </OrdersContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedMachine && (
            <Button onPress={() => setIsMachineModalVisible(true)}>
              Iniciar Produção
            </Button>
          )}

          {selectedMachine && (
            <Cart cartItems={cartItems} />
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
