// node 1_hackerrankAutomation.js --url=https://www.hackerrank.com/ --config=config.json

// npm init -y
// npm i minimist
// npm install puppeteer

let minimist = require('minimist');
let fs = require('fs');
let puppeteer = require('puppeteer');
let args = minimist(process.argv);


let configJSON = fs.readFileSync(args.config,"utf-8");
let confg = JSON.parse(configJSON);



// it is a IIFE (immediate invoked function expression)
(async function() {
    let browser = await puppeteer.launch({"headless": false});
    let page = await browser.newPage();
    await page.goto(args.url);

    await page.screenshot({path: "example.png"});

    await browser.close();
})();