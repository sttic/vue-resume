/* eslint-disable */
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8000;
const server = app.listen(port);

console.log("App is listening on port " + port);

const puppeteer = require("puppeteer");
const url = `http://localhost:${port}/plain`;
const pdf_name = "tommy_deng_resume.pdf";
const pdf_path_public = path.join("public", pdf_name);
const pdf_path_dist = path.join("dist", pdf_name);

(async () => {
  console.log(`Launching Puppeteer to ${url}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.pdf({
    path: pdf_path_dist,
    format: "Letter",
    pageRanges: "1",
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  console.log(`Puppeteer exported PDF to ${pdf_path_dist}`);
  await browser.close();
  console.log("Closed Puppeteer");
  server.close();
  console.log("Closed server");

  // Copy PDF into public folder to see it during development
  const fs = require("fs");
  console.log(`Copying ${pdf_path_dist} to ${pdf_path_public}`);
  fs.copyFileSync(pdf_path_dist, pdf_path_public);
  console.log("Done PDF export.");
})();
