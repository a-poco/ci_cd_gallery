const { appendToElem } = require('./fetcher.js');
const jsdom = require("jsdom"); 
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body><div id="gallery">TESTESTTEST</div></body></html>`);
const document = dom.window.document


test.skip('should add 10 elements to div #gallery', () => {
  console.log(document.getElementsByTagName('div').length)
  appendToElem('cats')
  let galleryLength = document.getElementsByTagName('img').length
  expect(galleryLength).toBe(1);
});

describe('Mock Test' , () => {
  test('2=2', () => {
    expect(2).toEqual(2)
  })
});