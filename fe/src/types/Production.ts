export interface Production {
  _id: string;
  operation: 'serra' | 'preparation' | 'cnc' | 'machining';
  quantityProduced: number;
  details: {
    employee: {
      _id: string,
      name: string,
      imagePath: string,
    },
    machine: {
      _id: string,
      name: string,
    },
    order: {
      _id: string,
      details: {
        item: string,
      }[]
    }
  }[];
  startedAt: string,
  finishedAt: string,
}
