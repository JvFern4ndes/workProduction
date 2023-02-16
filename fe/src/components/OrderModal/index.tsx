import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { ModalBody, OrderDetails, Overlay, Actions } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


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

          <button type='button' onClick={onClose}>
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

          <div className="order-items">
            {order.details.map((details) => (
              <div className="item" key={details.item._id}>
                <img
                  src={`http://localhost:3001/uploads/${details.item.imagePath}`}
                  alt={details.item.name}
                  width="56"
                  height="28.51"
                />

                <span className='quantity'>
                  x{details.amount}
                  {details.amount > 1 ? ' itens' : ' item'}
                </span>

                <div className="item-details">
                  <strong>{details.item.name}</strong>
                  <span>{order.client.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="deliveryDate">
            <span>Data de entrega do pedido:</span>
            <strong>{order.details.map((details) => (
              <div key={details.item._id}>
                {details.deliveryDate}
              </div>
            ))}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>✅️</span>
            <span>Iniciar esta etapa do pedido</span>
          </button>

          <button type='button' className='secondary'>
            <span>Cancelar pedido</span>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
