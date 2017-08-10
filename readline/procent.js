var percentage = 0;
const readLine = require("readline");

var fl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printPercentage() {
    readLine.clearLine(fl, 0);
    readLine.cursorTo(fl, 0);

    if(percentage >= 100){
        fl.write("zakończono wczytywanie\n");
        return fl.close();
    }

    percentage += 5;

    fl.write(`Wczytano ${percentage} %`);

    setTimeout(printPercentage, 200);
}

printPercentage();