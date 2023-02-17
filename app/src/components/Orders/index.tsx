import { FlatList } from 'react-native';

import { orders } from '../../mocks/orders';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
  Order,
  OrderImage,
  OrderDetails,
  OrderInfos,
  Separator,
  StartProductionButton
} from './styles';

export function Orders() {
  return (
    <FlatList
      data={orders}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={order => order._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: order }) => (
        <Order>
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

          <StartProductionButton>
            <PlusCircle />
          </StartProductionButton>
        </Order>
      )}
    />
  );
}
