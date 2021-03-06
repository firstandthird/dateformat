import datefmt from '../index';
import test from 'tape-rollup';

test('day', assert => {
  const date = new Date(2013, 4, 8);
  assert.equal(datefmt('%d %j %D %l', date), '08 8 Wed Wednesday');

  const date2 = new Date(2013, 4, 10);
  assert.equal(datefmt('%d %j %D %l', date2), '10 10 Fri Friday');

  assert.end();
});

test('month', assert => {
  const date = new Date(2013, 3, 15);
  assert.equal(datefmt('%n %F %m %M', date), '3 April 04 Apr');

  const date2 = new Date(2013, 11, 15);
  assert.equal(datefmt('%n %F %m %M', date2), '11 December 12 Dec');

  assert.end();
});

test('week', assert => {
  const date = new Date(2013, 4, 15);
  assert.equal(datefmt('%w', date), '3');

  assert.end();
});

test('year', assert => {
  const date = new Date(2013, 4, 15);
  assert.equal(datefmt('%Y %y', date), '2013 13');

  assert.end();
});

test('time', assert => {
  let date = new Date(2013, 4, 15, 8, 30, 30, 50);
  assert.equal(datefmt('%g %G %h %h %i %s %u %a %A %e', date), `8 8 08 08 30 30 50 am AM ${date.getTimezoneOffset()}`);

  date = new Date(2013, 4, 15, 18, 5, 5, 5);
  assert.equal(datefmt('%g %G %h %H %i %s %u %a %A %e', date), `6 18 06 18 05 05 5 pm PM ${date.getTimezoneOffset()}`);

  assert.end();
});

test('st,nd,rt,th', assert => {
  let date = new Date(2013, 4, 1);
  assert.equal(datefmt('%S', date), 'st');

  date = new Date(2013, 4, 2);
  assert.equal(datefmt('%S', date), 'nd');

  date = new Date(2013, 4, 3);
  assert.equal(datefmt('%S', date), 'rd');

  date = new Date(2013, 4, 15);
  assert.equal(datefmt('%S', date), 'th');

  assert.end();
});

test('midnight should be 12', assert => {
  const date = new Date(2013, 4, 1);
  assert.equal('12', datefmt('%g', date));

  assert.end();
});

test('translated month and days', assert => {
  const date = new Date(2013, 0, 6);
  const months = ['Enero'];
  const days = ['Lunes'];

  datefmt.translate(months, days);

  assert.equal(datefmt('%F', date), 'Enero');
  assert.equal(datefmt('%l', date), 'Lunes');

  assert.end();
});

