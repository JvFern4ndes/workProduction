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
import { orders } from '../mocks/orders';

export function Main() {
  const [isMachineModalVisible, setIsMachineModalVisible] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      order: {
        '_id': '63eb80fc7868e22b1fc669d0',
        'status': 'waiting',
        'client': {
          '_id': '63eb5d551a09515da6f09a82',
          'name': 'Safecar',
        },
        'details': [
          {
            'item': {
              '_id': '63eb5d371a09515da6f09a75',
              'name': '161-001',
              'imagePath': '1676371389994-item1.jpeg',
              'measures': [
                {
                  'name': 'Medida A:',
                  'value': 12.20,
                },
                {
                  'name': 'Medida B',
                  'value': 24.90,
                }
              ],
              'client': '63eb3014664f35c90a51d2c7',
            },
            'amount': 100,
            'deliveryDate': '2001-02-01T02:00:00.000Z',
            '_id': '63eb80fc7868e22b1fc669d1'
          }
        ],
      },
    },
  ]);

  function handleSaveMachine(machine: string) {
    setSelectedMachine(machine);
  }

  function handleCancelOrder() {
    setSelectedMachine('');
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
