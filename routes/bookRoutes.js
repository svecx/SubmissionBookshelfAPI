const {
  fetchNewBook,
  fetchAllBooks,
  fetchBookById,
  fetchModifyBookById,
  fetchRemoveBookById,
} = require('../controllers/bookControllers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: fetchNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: fetchAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: fetchBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: fetchModifyBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: fetchRemoveBookById,
  },
];

module.exports = routes;
