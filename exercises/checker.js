

////////////*********USAGE********///////////
//node checker [space separated numbers of exercises to be checked]
//e.g.
//node checker 1 4 5
//if numbers are ommitted, all files are checked

///////////********CONSTANTS********/////////// 
NUMBER_OF_EXERCISES = 15;


///////////********DEPENDENCIES********/////////// 
//Filesystem module needed to import other files
var fs = require('fs');

//Include underscore.js
var _ = require("./utils/underscore.js")

//Array of exercise numbers
var exercises = process.argv.length > 2 ? 
    process.argv.slice(2) : 
    _.range(1, NUMBER_OF_EXERCISES+1);

eval(fs.readFileSync('./utils/test1.js')+'');
for(var i=1; i<NUMBER_OF_EXERCISES+1; i++){
    if(_.indexOf(exercises, i) != -1){
        //eval(fs.readFileSync('./utils/test'+i+'.js')+'');
    }
}


