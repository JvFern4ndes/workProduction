import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63eb80fc7868e22b1fc669d0',
    'status': 'waiting',
    'client': {
      'name': 'safecar',
    },
    'details': [
      {
        'item': {
          '_id': '63eb5d371a09515da6f09a75',
          'name': '161-001',
          'imagePath': '1676369207634-item1.jpeg',
          'measures': [
            {
              'name': 'Measure A',
              'value': 1,
            },
            {
              'name': 'Measure B',
              'value': 2,
            }
          ],
          'client': '63eb3014664f35c90a51d2c7',
        },
        'amount': 100,
        'deliveryDate': '2001-02-01T02:00:00.000Z',
        '_id': '63eb80fc7868e22b1fc669d1'
      }
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🔴️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🟠️"
        title="Em produção"
        orders={[]}
      />
      <OrdersBoard
        icon="🟡️"
        title="Embalagem"
        orders={[]}
      />
      <OrdersBoard
        icon="🟢️"
        title="Pedido pronto"
        orders={[]}
      />
    </Container>
  );
}
