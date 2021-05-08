const {
  addBooksRequestHandler,
  getAllBooksRequestHandler,
  getBooksByIdRequestHandler,
  updateBooksByIdRequestHandler,
  deleteBooksByIdRequestHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksRequestHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksRequestHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdRequestHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBooksByIdRequestHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksByIdRequestHandler,
  },
];

module.exports = routes;