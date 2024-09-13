const supertest = require('supertest');
const app = require('./../../../../back/server.js');
//import supertest from 'supertest'
const getDatabase = require('../../../../back/config/db.js');

/*
beforeAll(async () => {
  // Connect to the test database and set up any required data
  let connexionDatabase = getDatabase();
  await connexionDatabase.connect()
  
});
*/

/*
afterAll(async () => {
  const getDatabase = require('../../../../back/config/db.js');
  let connexionDatabase = getDatabase();
  await connexionDatabase.end();
});
*/

describe('Test', () => {
  describe('Test bcs i don\'t success anything :', () => {
    it('Should connect or not the users following his credentials', async () => {


      const response = await supertest(app).post('/api/users/bbb').set("content-type", "application/json").send({
        username: 'choupi',
        password: 'choupi',
      })
      expect(response.status).toBe(200);
    });
  });
});



/*
describe('POST /login', () => {
  describe('Login :', () => {
    it('Should connect or not the users following his credentials', async () => {
      const response = await supertest(app)
      .post('/tryLogin')
      .send({
        username: 'choupi',
        password: 'choupi',
      });

    expect(response.status).toBe(200);
    });
  });
});
*/

/* FONCTIONNE MAIS USELESS 
describe('POST /api/login', () => {
  it('should respond with a 200 status code for valid credentials', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
  });

  it('should respond with a 401 status code for invalid credentials', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        username: 'testuser',
        password: 'wrongpassword',
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid credentials');
  });
});
*/



/*
require('dotenv').config();
//@ts-ignore
import app from './../../../../back/server.js'; 
import { shallowMount } from '@vue/test-utils';


//const mysql = require('./../mocks/mysql2.js');

jest.mock('mysql2');











    //   it('Should connect or not users follow its credentials', () => {
//     const response = request(users).post("/register")
//     expect(wrapper.text()).toMatch(msg)
//   })
*/
