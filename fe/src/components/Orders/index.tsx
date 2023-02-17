import { Order } from '../../types/Order';
import { Production } from '../../types/Production';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63eb80fc7868e22b1fc669d0',
    'status': 'in_production',
    'client': {
      '_id': '63eb5d551a09515da6f09a82',
      'name': 'Safecar',
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

const productions: Production[] = [
  {
    '_id': '63eefdd8bdb27a64be57803a',
    'operation': 'cnc',
    'quantityProduced': 1000,
    'details': [
      {
        'employee': {
          '_id': '63eb60090ed76f3a8402ed20',
          'name': 'theodev',
          'imagePath': 'theoimage.png',
        },
        'machine': {
          '_id': '63eb96eb73e6b5f2e14e0d5e',
          'name': 'robodrill',
        },
        'order': {
          '_id': '63eb80fc7868e22b1fc669d0',
          'details': [
            {
              'item': '63eb5d371a09515da6f09a75',
            }
          ],
        },
      }
    ],
    'startedAt': '2023-02-17T04:08:56.975Z',
    'finishedAt': '2023-02-17T04:08:56.975Z',
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🔴️"
        title="Fila de espera"
        orders={orders}
        productions={productions}
      />
      <OrdersBoard
        icon="🟠️"
        title="Em produção"
        orders={[]}
        productions={[]}
      />
      <OrdersBoard
        icon="🟡️"
        title="Embalagem"
        orders={[]}
        productions={[]}
      />
      <OrdersBoard
        icon="🟢️"
        title="Pedido pronto"
        orders={[]}
        productions={[]}
      />
    </Container>
  );
}
