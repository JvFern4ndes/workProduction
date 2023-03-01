import { useState } from 'react';
import { Order } from '../../types/Order';
import { Production } from '../../types/Production';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  productions: Production[];
}

const DETAILS_PROGRESS: Record<string, any> = {
  'Fila de espera': (details: any) => (
    <div key={details.item._id}>
      <strong>{details.item.name}</strong>
      <span>
        {details.amount}
        {details.amount > 1 ? ' itens' : ' item'}
      </span>
      <span>{}</span>
    </div>
  ),
  'Em produção': (details: any) => (
    <div key={details.item._id}>
      <strong>Ola</strong>
      <span>
        {details.amount}
        {details.amount > 1 ? ' itens' : ' item'}
      </span>
    </div>
  ),
  'Embalagem': (details: any) => (
    <div key={details.item._id}>
      <strong>Ola</strong>
      <span>
        {details.amount}
        {details.amount > 1 ? ' itens' : ' item'}
      </span>
    </div>
  ),
  'Pedido pronto': (details: any) => (
    <div key={details.item._id}>
      <strong>Ola</strong>
      <span>
        {details.amount}
        {details.amount > 1 ? ' itens' : ' item'}
      </span>
    </div>
  ),
  'Preparando': (details: any) => (
    <div key={details.item._id}>
      <strong>Ola</strong>
      <span>
        {details.amount}
        {details.amount > 1 ? ' itens' : ' item'}
      </span>
    </div>
  ),
};

export function OrdersBoard({ icon, title, orders, productions }: OrdersBoardProps) {
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
          {orders.map((order) => {
            return (
              <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>

                {order.details.map(detail => {
                  const renderDetails = DETAILS_PROGRESS[order?.status?.name];
                  return renderDetails?.(detail);
                })}
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
}
