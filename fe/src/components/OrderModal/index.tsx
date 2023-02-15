import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>{order.details.map((details) => (
            <div key={details.item._id}>
              {details.item.name}
            </div>
          ))}</strong>

          <button type='button'>
            <img src={closeIcon} alt="Ícone de fechar"/>
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'waiting' && '🔴️'}
              {order.status === 'in_production' && '🟠️'}
              {order.status === 'packaging' && '🟡️'}
              {order.status === 'done' && '🟢️'}
            </span>
            <strong>
              {order.status === 'waiting' && 'Fila de espera'}
              {order.status === 'in_production' && 'Em produção'}
              {order.status === 'packaging' && 'Embalagem'}
              {order.status === 'done' && 'Pedido pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Detalhes do pedido:</strong>

          {order.details.map((details) => (
            <div key={details.item._id}>
              <img
                src={`http://localhost:3001/uploads/${details.item.imagePath}`}
                alt={details.item.name}
                width="56"
                height="28.51"
              />

              <span className='quantity'>
                {details.amount}
                {details.amount > 1 ? ' itens' : ' item'}
              </span>

              <div className="item-details">
                <strong>{details.item.name}</strong>
                <span>{details.item.client}</span>
              </div>
            </div>
          ))}
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
