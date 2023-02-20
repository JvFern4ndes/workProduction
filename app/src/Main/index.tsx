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

  function handleResetOrder() {
    setSelectedMachine('');
    setCartItems([]);
  }

  function handleAddToCart(order: Order) {
    if (!selectedMachine) {
      setIsMachineModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.order._id === order._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          order,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        order,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(order: Order) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.order._id === order._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.order) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      return newCartItems;
    });
  }

  return (
    <>
      <Container>
        <Header
          selectedMachine={selectedMachine}
          onCancelOrder={handleResetOrder}
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
            <Cart
              cartItems={cartItems}
              onDecrement={handleDecrementCartItem}
              onConfirmProduction={handleResetOrder}
            />
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
