import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
  Actions,
  Image,
  Item,
  OrderContainer,
  AmountContainer,
  OrderDetails,
} from './styles';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.order._id}
      showsVerticalScrollIndicator={false}
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
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
