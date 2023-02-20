import { ActivityIndicator } from 'react-native';
import { useState } from 'react';

import {
  Container,
  StatusContainer,
  OrdersContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from './styles';

import { Header } from '../components/Header';
import { Status } from '../components/Status';
import { Orders } from '../components/Orders';
import { Button } from '../components/Button';
import { MachineModal } from '../components/MachineModal';
import { Cart } from '../components/Cart';

import { CartItem } from '../types/CartItem';
import { Order } from '../types/Order';

import { orders as mockOrders } from '../mocks/orders';
import { Text } from '../components/Text';
import { Entypo,  } from '@expo/vector-icons';

export function Main() {
  const [isMachineModalVisible, setIsMachineModalVisible] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading] = useState(false);
  const [orders] = useState<Order[]>(mockOrders);

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

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator  color="#000" size="large" />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <StatusContainer>
              <Status />
            </StatusContainer>

            {orders.length > 0 ? (
              <OrdersContainer>
                <Orders
                  onAddToCart={handleAddToCart}
                  orders={orders}
                />
              </OrdersContainer>
            ) : (
              <CenteredContainer>
                <Entypo name="block" size={120} color="#000" />

                <Text color='#666' style={{ marginTop: 24 }}>
                  Nenhum pedido foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedMachine && (
            <Button
              onPress={() => setIsMachineModalVisible(true)}
              disabled={isLoading}
            >
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
