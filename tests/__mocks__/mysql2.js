const mysql = jest.createMockFromModule('mysql2');

//const mockQuery = jest.fn();
const mockQueryPromise = jest.fn().mockResolvedValue([{ id: 1, username: 'choupi' }]);

const mockPool = {
  promise: jest.fn().mockReturnValue({
    query: mockQueryPromise,
  }),
};

mysql.createPool = jest.fn().mockReturnValue(mockPool);

module.exports = mysql;