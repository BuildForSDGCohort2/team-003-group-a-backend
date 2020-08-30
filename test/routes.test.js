import chai from 'chai';
import app from '../src/app.js';
import chaiHttp from 'chai-http';

const { expect } = chai;

chai.use(chaiHttp);

describe('end Points', () => {
  it('Welcomes educonnect api', (done) => {
    chai
      .request(app)
      .get('/api')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.statu).to.equals('success');
        done();
      });
  });
});
