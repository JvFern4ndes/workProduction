export interface Order {
  _id: string;
  status: string;
  client: {
      _id: string;
      name: string;
  };
  details: {
      item: {
          _id: string;
          name: string;
          imagePath: string;
          measures: {
              name: string;
              value: number;
          }[];
          client: string;
      };
      amount: number;
      deliveryDate: string;
      _id: string;
  }[];
}
