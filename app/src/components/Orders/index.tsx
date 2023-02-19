import { useState } from 'react';
import { FlatList } from 'react-native';

import { Order } from '../../types/Order';
import { orders } from '../../mocks/orders';

import { PlusCircle } from '../Icons/PlusCircle';
import { OrderModal } from '../OrderModal';
import { Text } from '../Text';

import {
  OrderContainer,
  OrderImage,
  OrderDetails,
  OrderInfos,
  Separator,
  StartProductionButton
} from './styles';

interface OrdersProps {
  onAddToCart: (order: Order) => void;
}

export function Orders({ onAddToCart }: OrdersProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  return (
    <>
      <OrderModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        order={selectedOrder}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={orders}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={order => order._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: order }) => (
          <OrderContainer onPress={() => handleOpenModal(order)}>
            {order.details.map((details) => (
              <OrderImage key={details._id}
                source={{
                  uri: `http://192.168.15.10:3001/uploads/${details.item.imagePath}`
                }}
              />
            ))}

            <OrderDetails>
              {order.details.map((detail) => (
                <OrderInfos key={detail._id}>
                  <Text weight='600'>
                    {detail?.item?.name}
                  </Text>
                  <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                    {order.client.name}
                  </Text>
                  <Text size={14} weight="600">
                    {detail.amount} itens
                  </Text>
                </OrderInfos>
              ))}
            </OrderDetails>

            <StartProductionButton onPress={() => onAddToCart(order)}>
              <PlusCircle />
            </StartProductionButton>
          </OrderContainer>
        )}
      />
    </>
  );
}
