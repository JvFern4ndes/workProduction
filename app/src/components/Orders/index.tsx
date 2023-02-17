import { FlatList } from 'react-native';

import { orders } from '../../mocks/orders';
import { Text } from '../Text';

import { Order, Image, OrderDetails, OrderInfos } from './styles';

export function Orders() {
  return (
    <FlatList
      data={orders}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={order => order._id}
      renderItem={({ item: order }) => (
        <Order>
          {order.details.map((details) => (
            <Image key={details._id}
              source={{
                uri: `http://192.168.15.10:3001/uploads/${details.item.imagePath}`
              }}
            />
          ))}

          <OrderDetails>
            {order.details.map((detail) => (
              <OrderInfos key={detail._id}>
                <Text>
                  {detail?.item?.name}
                </Text>
                <Text>
                  {order.client.name}
                </Text>
                <Text>
                  {detail.amount}
                </Text>
              </OrderInfos>
            ))}
          </OrderDetails>
        </Order>
      )}
    />
  );
}
