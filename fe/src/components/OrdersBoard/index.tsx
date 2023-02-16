import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setIsSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setIsSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setIsSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              {order.details.map((details) => (
                <div key={details.item._id}>
                  <strong>{details.item.name}</strong>
                  <span>
                    {details.amount}
                    {details.amount > 1 ? ' itens' : ' item'}
                  </span>
                </div>
              ))}
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
