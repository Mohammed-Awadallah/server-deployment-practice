'use strict';
const server = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server.app);

describe('testing API server',()=>{

    it('test /',async()=>{
        const response = await request.get('/');
        expect(response.text).toEqual('home route');
    })
    it('test /data',async()=>{
        const response = await request.get('/data')
        console.log(Object.keys( response.body).length)
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')
        expect(Object.keys( response.body).length).toEqual(2)

    })
})

