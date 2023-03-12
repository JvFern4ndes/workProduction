import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

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

import { Text } from '../components/Text';
import { Entypo } from '@expo/vector-icons';
import { StatusType } from '../types/StatusType';

import { api } from '../utils/api';

export function Main() {
  const [isMachineModalVisible, setIsMachineModalVisible] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState('');
  const [selectedOperation, setSelectedOperation] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState<StatusType[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get('/status'),
      api.get('/orders'),
    ]).then(([statusResponse, ordersResponse]) => {
      setStatus(statusResponse.data);
      setOrders(ordersResponse.data);
      setIsLoading(false);
    });
  }, []);

  async function handleSelectStatus(statusId: string) {
    const route = !statusId
      ? '/orders'
      : `/status/${statusId}/orders`;

    setIsLoadingOrders(true);

    const { data } = await api.get(route);

    setOrders(data);
    setIsLoadingOrders(false);
  }

  function handleSaveMachine(machine: string, operation: string) {
    setSelectedMachine(machine);
    setSelectedOperation(operation);
    setIsMachineModalVisible(false);
  }

  function handleResetOrder() {
    setSelectedMachine('');
    setSelectedOperation('');
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
          selectedOperation={selectedOperation}
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
              <Status
                status={status}
                onSelectStatus={handleSelectStatus}
              />
            </StatusContainer>

            {isLoadingOrders ? (
              <CenteredContainer>
                <ActivityIndicator  color="#000" size="large" />
              </CenteredContainer>
            ) : (
              <>
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
              selectedMachine={selectedMachine}
              selectedOperation={selectedOperation}
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
