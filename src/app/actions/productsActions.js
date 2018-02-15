import * as ProductsController from '../controllers/productsController';

export function fetchProducts(query = {}) {
  return {
    type: 'GET_PRODUCTS',
    payload: new Promise((resolve, reject) => {
      query = {
        category: '',
        name: '',
        page: 0,
        items: 10,
        ...query,
      };
      console.log(query);
      ProductsController.fetchProducts(query, (err, result) => {
        if (!err) {
          console.log(result.body);
          resolve(result.body);
        }
        reject(err);
      });
    }),
  };
}

export function foo() {}
