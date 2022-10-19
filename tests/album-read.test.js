const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('Read Album', () => {
  let db;
  let artists;
  let db2;
  let albums;
  beforeEach(async () => {
    db = await getDb();
    await Promise.all([
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Tame Impala',
        'rock',
      ]),
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Kylie Minogue',
        'pop',
      ]),
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Dave Brubeck',
        'jazz',
      ]),
    ]);

    [artists] = await db.query('SELECT * from Artist');
    const artist1 = artists[0];
    const artist2 = artists[1];
    db2 = await Promise.all([
        db.query('INSERT INTO Album (name, year, artistId) VALUES (?, ?, ?)', [
      'albumName1',
      2021,
      artist1.id
  ]),
  db.query('INSERT INTO Album (name, year, artistId) VALUES (?, ?, ?)', [
    'albumName2',
    2022,
    artist2.id
]),
]);
[albums] = await db.query('SELECT * from Album');
  });

  afterEach(async () => {
    await db.query('DELETE FROM Album');
    await db.query('DELETE FROM Artist');
    await db.end();
  });

  describe('/album', () => {
    describe('GET', () => {
      it('returns all albums in the database', async () => {

    const res = await request(app).get('/album').send();
       expect(res.status).to.equal(200);
       expect(res.body.length).to.equal(2);

        res.body.forEach((albumRecord) => {
         const expected = albums.find((a) => a.id === albumRecord.id);

          expect(albumRecord).to.deep.equal(expected);
        });
      });

  });
});
describe('/album/:albumId', () => {
    describe('GET', () => {
      it('returns a single artist with the correct id', async () => {
        const expected = albums[0];
        const res = await request(app).get(`/album/${expected.id}`).send();

        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(expected);
      });

      it('returns a 404 if the artist is not in the database', async () => {
        const res = await request(app).get('/album/999999').send();

        expect(res.status).to.equal(404);
      });
    });
  });
});