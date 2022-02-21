'use strict';
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing API server',()=>{

    it('test /',async()=>{
        const response = await request.get('/');
        expect(response.text).toEqual('home route');
    })
    it('test /data',async()=>{
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')
    })
})

