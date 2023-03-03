type Status = 'waiting' | 'in_production' | 'packaging' | 'done' | 'preparing';

interface Sla {
  label: string
  status: Status,
  icon: string
}

export const orderStatus: Record<Status, Sla> = {
  'done': {
    status: 'done',
    icon: '🟢️',
    label: 'Pedido Pronto',
  },
  'in_production': {
    status: 'in_production',
    icon: '🟡️',
    label: 'Em Produção',
  },
  'waiting': {
    status: 'waiting',
    icon: '🔴️',
    label: 'Fila de Espera',
  },
  'packaging': {
    status: 'packaging',
    icon: '📦️',
    label: 'Embalagem',
  },
  'preparing': {
    status: 'preparing',
    icon: '🔧️',
    label: 'Preparando',
  },
};
