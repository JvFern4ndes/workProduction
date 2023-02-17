export const orders = [
  {
    '_id': '63eb80fc7868e22b1fc669d0',
    'status': 'waiting',
    'client': {
      '_id': '63eb5d551a09515da6f09a82',
      'name': 'Safecar',
    },
    'details': [
      {
        'item': {
          '_id': '63eb5d371a09515da6f09a75',
          'name': '161-001',
          'imagePath': '1676371389994-item1.jpeg',
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
