import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id}>
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
