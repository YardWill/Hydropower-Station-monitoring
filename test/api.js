const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:3000');

describe('User', () => {
    it('should return a 200 response', (done) => {
        api.get('/users/login')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
    it('should be an object with keys and values', (done) => {
        api.get('/users/login')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.not.equal(null);
                expect(res.body).to.not.equal(null);
            });
        done();
    });
    it('should return a 200 response', (done) => {
        api.get('/json')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
    it('should be an object with keys and values', (done) => {
        api.get('/json')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                res.body.data.forEach((e) => {
                    expect(e).to.have.property('name');
                    expect(e).to.not.equal(null);
                    expect(e).to.have.property('value');
                    expect(e).to.not.equal(null);
                });
            });
        done();
    });
    it('should return a 200 response', (done) => {
        api.get('/alert')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
    it('should be an object with keys and values', (done) => {
        api.get('/alert')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                res.body.forEach((e) => {
                    expect(e).to.have.property('name');
                    expect(e).to.not.equal(null);
                    expect(e).to.have.property('value');
                    expect(e).to.not.equal(null);
                });
            });
        done();
    });
});
