// process.stdout.write("Podaj wiadomość\n");
//
// process.stdin.on("readable", function () {
//    var line = process.stdin.read();
//
//    if(line.toString().trim() === "close"){
//        process.exit();
//    }
//
//    else{
//        process.stdout.write("Wpisano: "+line.toString()+"\n");
//    }
//
// });

/*process.on("uncaughtException", function (err) {
    console.log("mam błęda");
});

process.once("beforeExit", function () {

    setTimeout(function () {
        console.log("kończę się");
    }, 4000);
});

var a = b+1;*/

setTimeout(function () {

}, 3000);

process.once("SIGINT", function () {
    console.log("Kliknij ctrl + c, aby zakończyć");
});

console.log(process.argv);