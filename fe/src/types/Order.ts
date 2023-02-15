export interface Order {
  _id: string;
  status: 'waiting' | 'in_production' | 'packaging' | 'done';
  details: {
    _id: string;
    amount: number;
    deliveryDate: string;
    item: {
      _id: string;
      name: string;
      imagePath: string;
      client: string;
      measures: {
        name: string;
        value: number;
      }[]
    }
  }[];
}
