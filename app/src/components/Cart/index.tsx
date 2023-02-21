import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Order } from '../../types/Order';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { ProductionConfirmedModal } from '../ProductionConfirmedModal';
import { Text } from '../Text';

import {
  Actions,
  Image,
  Item,
  OrderContainer,
  AmountContainer,
  OrderDetails,
  Summary,
  StartContainer,
} from './styles';

interface CartProps {
  cartItems: CartItem[];
  onDecrement: (order: Order) => void;
  onConfirmProduction: () => void;
}

export function Cart({ cartItems, onDecrement, onConfirmProduction }: CartProps) {
  const [isLoading] = useState(false);
  const [isProductionConfirmedModalVisible, setIsProductionConfirmedModalVisible] = useState(false);

  function handleConfirmProduction() {
    setIsProductionConfirmedModalVisible(true);
  }

  function handleOk() {
    onConfirmProduction();
    setIsProductionConfirmedModalVisible(false);
  }

  return (
    <>
      <ProductionConfirmedModal
        visible={isProductionConfirmedModalVisible}
        onOk={handleOk}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.order._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 16, maxHeight: 85 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <OrderContainer>
                {cartItem.order.details.map((details) => (
                  <Image key={details._id}
                    source={{
                      uri: `http://192.168.15.10:3001/uploads/${details.item.imagePath}`
                    }}
                  />
                ))}

                <AmountContainer>
                  {cartItem.order.details.map((details) => (
                    <Text size={14} color="#666" key={details._id}>
                      {details.amount}
                      {details.amount > 1 ? ' Itens' : ' Item'}
                    </Text>
                  ))}
                </AmountContainer>

                {cartItem.order.details.map((details) => (
                  <OrderDetails key={details._id}>
                    <Text size={14} weight="600">
                      {details.item.name}
                    </Text>
                    <Text size={14} color="#666" style={{ marginTop: 4 }}>
                      {cartItem.order.client.name}
                    </Text>
                  </OrderDetails>
                ))}
              </OrderContainer>

              <Actions>
                <TouchableOpacity onPress={() => onDecrement(cartItem.order)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <StartContainer>
          {cartItems.length > 0 ? (
            <Text size={20} weight="600">Iniciar Produção?</Text>
          ) : (
            <Text color='#999'>Nenhum pedido foi selecionado</Text>
          )}
        </StartContainer>

        <Button
          onPress={handleConfirmProduction}
          disabled={cartItems.length === 0}
          loading={isLoading}
        >
          Sim
        </Button>
      </Summary>
    </>
  );
}
