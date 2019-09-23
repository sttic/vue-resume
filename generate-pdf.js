const puppeteer = require('puppeteer');

const HTML = 'http://localhost:8080/plain';
const PDF_OUT = './public/tommy_deng_resume.pdf';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(HTML, { waitUntil: 'networkidle2' });
  await page.pdf({
    path: PDF_OUT,
    pageRanges: '1',
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  await browser.close();
})();
