var fileStream  = require('fs');
var readLine = require("readline-sync");
var fileData = "";

var readStream = fileStream.createReadStream('input.txt');

readStream.on('data', (readData) =>{
  fileData = readData;
});

readStream.on('end', () =>{
  var searchString = readLine.question("Enter string to search in file : ");


    var count = fileData.toString().split(searchString).length - 1;
    console.log("search string found  "+count+ "times in file:"+ "\n"+fileData);

  
});

readStream.on('error', (error) =>{
  console.log(error);
});