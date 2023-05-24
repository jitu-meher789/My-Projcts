// npm init -y
// npm install minimist
// npm install axios
// npm install jsdom
// npm install excel4node
// npm install pdf-lib

// node 1_cricInfoExtractor.js --excel=WorldCup.csv --dataFolder=data --url=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-schedule-fixtures-and-results

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path");

let args = minimist(process.argv);


// download form the url using axios
// read using jsdom
// make excel using excel4node
// make pdf using pdf-lib

let responseKapromise = axios.get(args.url);

responseKapromise.then(function (response) {

    let html = response.data;
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let matchScoreDivs = document.getElementsByClassName("hover:ds-bg-ui-fill-translucent");

    let matches = [];
    for (let i = 0; i < matchScoreDivs.length; i++) {

        let match = {
        };

        // get both teams name
        let nameSp = matchScoreDivs[i].getElementsByClassName("ds-text-tight-m");
        match.t1Name = nameSp[0].textContent;
        match.t2Name = nameSp[1].textContent;

        // get the score
        let scoreSp = matchScoreDivs[i].querySelectorAll("div.ds-whitespace-nowrap > strong");
        if (scoreSp.length == 2) {

            match.t1Score = scoreSp[0].textContent;
            match.t2Score = scoreSp[1].textContent;

        } else if (scoreSp.length == 1) {

            match.t1Score = scoreSp[0].textContent;
            match.t2Score = "";

        } else {
            match.t1Score = "";
            match.t2Score = "";
        }

        // get the results
        let result = matchScoreDivs[i].querySelector("p.ds-line-clamp-2 > span");
        match.result = result.textContent;
        matches.push(match);
    }


    //convet to jso to json
    let matchesJson = JSON.stringify(matches);
    fs.writeFileSync("matches.json", matchesJson, "utf8");

    // create create specific teams object
    let teams = [];
    for (let i = 0; i < matches.length; i++) {
        createSpecificTeamAndArray(teams, matches[i]);
    }

    // add all matches to a specific team
    for (let i = 0; i < matches.length; i++) {
        putAllMathcesInAppropriateTeam(teams, matches[i]);
    }

    //convet to jso to json
    let teamsJson = JSON.stringify(teams);
    fs.writeFileSync("teams.json", teamsJson, "utf8");



    makeExcelFile(teams);
    makePdfFile(teams);

    // node cricinfoExtractor.js --excel=WorldCup.csv --dataFolder=data --url=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-schedule-fixtures-and-results

}).catch(function (err) {
    console.error(err);
});



function createSpecificTeamAndArray(teams, match) {

    let t1Idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t1Name) {
            t1Idx = true;
            break;
        }
    }

    if (t1Idx == -1) {
        let team = {
            name: match.t1Name,
            matches: []
        }
        teams.push(team);
    }


    let t2Idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t2Name) {
            t2Idx = true;
            break;
        }
    }

    if (t2Idx == -1) {
        let team = {
            name: match.t2Name,
            matches: []
        }
        teams.push(team);
    }
}


function putAllMathcesInAppropriateTeam(teams, match) {
    let t1Idx = -1;

    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t1Name) {
            t1Idx = i;
            break;
        }
    }

    let team1 = teams[t1Idx];
    team1.matches.push({
        vs: match.t2Name,
        selfScore: match.t1Score,
        oppScore: match.t2Score,
        result: match.result
    });




    let t2Idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t2Name) {
            t2Idx = i;
            break;
        }
    }

    let team2 = teams[t2Idx];
    team2.matches.push({
        vs: match.t1Name,
        selfScore: match.t2Score,
        oppScore: match.t1Score,
        result: match.result
    });


}


function makeExcelFile(teams) {
    let wb = new excel.Workbook();
   

    for (let i = 0; i < teams.length; i++) {
        let sheet = wb.addWorksheet(teams[i].name);
        sheet.cell(1, 1).string("Opponent");
        sheet.cell(1, 2).string("Self Score");
        sheet.cell(1, 3).string("Opponet Score");
        sheet.cell(1, 4).string("Result");


        for (let j = 0; j < teams[i].matches.length; j++) {
            let vs = teams[i].matches[j].vs;
            let selfSocre = teams[i].matches[j].selfScore;
            let oopScore = teams[i].matches[j].oppScore;
            let result = teams[i].matches[j].result;


            sheet.cell(2 + j, 1).string(vs);
            sheet.cell(2 + j, 2).string(selfSocre);
            sheet.cell(2 + j, 3).string(oopScore);
            sheet.cell(2 + j, 4).string(result);

        }
    }
    wb.write(args.excel);

}

function makePdfFile(teams) {
    //make folder first
    fs.mkdirSync(args.dataFolder);

    for(let i = 0; i < teams.length; i++)  {
        let teamFolder = path.join(args.dataFolder, teams[i].name);
        fs.mkdirSync(teamFolder);

        for (let j = 0; j < teams[i].matches.length; j++) {
            let fileName = path.join(teamFolder, teams[i].matches[j].vs + ".pdf");
            createScoreCard(teams[i].name, teams[i].matches[j], fileName);
        }
    }
}
function createScoreCard(teamName, match, matchFileName) {

    let t1 = teamName;
    let t2 = match.vs;
    let result = t1 + " " + match.result;

    let templateBytes = fs.readFileSync("Template.pdf");

    let promiseToLoadDoc = pdf.PDFDocument.load(templateBytes);

    promiseToLoadDoc.then(function(pdfdoc) {
        let page = pdfdoc.getPage(0);

        page.drawText(t2, {
            x : 210,
            y : 608,
            size: 12,
            Color: 'green',
        });

        page.drawText(match.selfScore, {
            x : 210,
            y : 575,
            size: 12,
            Color: 'green',
        });

        page.drawText(match.oppScore, {
            x : 210,
            y : 545,
            size: 12,
            Color: 'green',
        });

        page.drawText(match.result, {
            x : 210,
            y : 515,
            size: 12,
            Color: 'green',
        });

        let promiseToSave = pdfdoc.save();
        promiseToSave.then(function (changedBytes) {
            fs.writeFileSync(matchFileName, changedBytes);
        })
    });
}