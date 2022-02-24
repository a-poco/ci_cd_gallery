const jsdom = require('jsdom');
const { appendToElem } = require('./fetcher');

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="gallery">TESTESTTEST</div></body></html>');
const { document } = dom.window;

test.skip('should add 10 elements to div #gallery correct cc', () => {
  appendToElem('cats');
  const galleryLength = document.getElementsByTagName('img').length;
  expect(galleryLength).toBe(1);
});

describe('Mock Test', () => {
  test('2=2', () => {
    expect(2).toEqual(2);
  });
});
