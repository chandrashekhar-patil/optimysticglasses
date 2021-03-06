export const list_output = [
  {
    _id: 'mongo_id_1',
    frame_id: 'RX_5279',
    model_name: 'RX-5279',
    brand: '1',
    frame_type: 'eyeglasses', //give numbers 1/2
    description: 'RAYBAN Eyeglasses',
    product_url: 'http://localhost:3000/eyeglassesdetails/id=RX_5279', //for details page
    type: '1', //rimless,halfrim,fullrim,
    shape: '2', //rectangle etc
    gender: '2', // 3-both
    size: '1', //small,medium,wide,extra wide Compromise on storing different sizes as different record
    qty_sold: 100,
    rating: 4.5,
    tags: ['Rayban', 'Black', 'Eye Glasses'], //to filter on global search
    created: '20211001',
    modified: '20211101',
    variants: [
      {
        sku_id: 'SM_BLACK_RX-5279',
        frame_id: 'RX_5279', //use this to update qty_sold above
        color: '1',
        code: '#000', //get from masterdata using color
        src: [
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13918-c1-eyeglasses_g_3033.jpg',
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13918-c1-eyeglasses_g_3033.jpg',
        ],
        price: '999',
        qty_availble: 10,
      },
      {
        sku_id: 'SM_WHITE_RX-5279',
        frame_id: 'RX_5279',
        color: '2',
        code: '#dcgdcd',
        src: [
          'https://www.howtogeek.com/713082/how-to-filter-google-image-search-results-by-color/',
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13918-c1-eyeglasses_g_3033.jpg',
        ],
        price: '899',
        qty_availble: 120,
      },
    ],
  },
  {
    _id: 'mongo_id_2',
    frame_id: 'RX_5279',
    model_name: 'RX-5279',
    brand: '1',
    frame_type: 'eyeglasses', //give numbers 1/2
    description: 'RAYBAN Eyeglasses',
    product_url: 'http://localhost:3000/eyeglassesdetails/id=RX_5279', //for details page
    type: '2', //rimless,halfrim,fullrim,
    shape: '3', //rectangle etc
    gender: '2', // 3-both
    size: '1', //small,medium,wide,extra wide Compromise on storing different sizes as different record
    qty_sold: 100,
    rating: 4.5,
    tags: ['Rayban', 'Black', 'Eye Glasses'], //to filter on global search
    created: '20211001',
    modified: '20211101',
    variants: [
      {
        sku_id: 'SM_BLACK_RX-5279',
        frame_id: 'RX_5279', //use this to update qty_sold above
        color: '1',
        code: '#000', //get from masterdata using color
        src: [
          'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13783-c2-eyeglasses_g_5933.jpg',
          'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13783-c2-eyeglasses_g_5933.jpg',
        ],
        price: '1999',
        qty_availble: 10,
      },
      {
        sku_id: 'SM_WHITE_RX-5279',
        frame_id: 'RX_5279',
        color: '2',
        code: '#dcgdcd',
        src: [
          'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13783-c2-eyeglasses_g_5933.jpg',
          'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13783-c2-eyeglasses_g_5933.jpg',
        ],
        price: '1899',
        qty_availble: 120,
      },
    ],
  },
  {
    _id: 'mongo_id_3',
    frame_id: 'RX_5279',
    model_name: 'RX-5279',
    brand: '2',
    frame_type: 'eyeglasses', //give numbers 1/2
    description: 'RAYBAN Eyeglasses',
    product_url: 'http://localhost:3000/eyeglassesdetails/id=RX_5279', //for details page
    type: '3', //rimless,halfrim,fullrim,
    shape: '1', //rectangle etc
    gender: '3', // 3-both
    size: '1', //small,medium,wide,extra wide Compromise on storing different sizes as different record
    qty_sold: 100,
    rating: 4.5,
    tags: ['Rayban', 'Black', 'Eye Glasses'], //to filter on global search
    created: '20211001',
    modified: '20211101',
    variants: [
      {
        sku_id: 'SM_BLACK_RX-5279',
        frame_id: 'RX_5279', //use this to update qty_sold above
        color: '1',
        code: '#000',
        src: [
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e11484-c1-eyeglasses_g_8532.jpg',
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e11484-c1-eyeglasses_g_8532.jpg',
        ],
        price: '2999',
        qty_availble: 10,
      },
      {
        sku_id: 'SM_WHITE_RX-5279',
        frame_id: 'RX_5279',
        color: '2',
        code: '#dcgdcd',
        src: [
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e11484-c1-eyeglasses_g_8532.jpg',
          'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e11484-c1-eyeglasses_g_8532.jpg',
        ],
        price: '2899',
        qty_availble: 120,
      },
    ],
  },
];
