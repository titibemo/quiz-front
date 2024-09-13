const getDatabase = jest.fn(() => ({
    query: jest.fn((sql, params, callback) => {
      if (sql === 'SELECT id, role, password FROM users WHERE username = ?') {
        // Simulate a successful query with a matching user
        callback(null, [{ id: 1, role: 'user', password: '$2b$10$somehashedpassword' }]);
      } else {
        // Simulate a query error
        callback(new Error('Query error'));
      }
    }),
    connect: jest.fn(),
  }));
  
  module.exports = getDatabase;