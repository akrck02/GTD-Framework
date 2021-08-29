let exec = require('child_process').exec;


function wait(seconds){
    const d = new Date();
    let d2 = new Date();
    while(d2.getTime() - d.getTime() < (seconds * 1000))
    d2 = new Date();
}

//execute command git clone in node
const version = "v1.0";
const URL = "https://github.com/akrck02/GTD_Framework"

exec(`git clone -b ${version} ${URL}`);
wait(1);

exec(`mv ./GTD_Framework/* ./`);
wait(1);

exec(`rm -rf ./GTD_Framework`)

