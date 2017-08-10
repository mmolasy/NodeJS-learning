
const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
rl.on("line", function (line) {
    if(line.toString().trim() === "exit"){
        console.log("Koniec programu");
        rl.close();
        process.exit();
    }

    console.log("Wpisano: "+line.toString());
    rl.prompt();
});*/


var prize = [100,200,300,400];

rl.question("Wybierz sejf od 1 do 5\n", function (answer) {
    console.log(`Wygrałeś ${prize[parseInt(answer)-1]} hajsu`);
    rl.close;
})