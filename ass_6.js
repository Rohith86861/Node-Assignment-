var fileStream  = require('fs');
var readLine = require("readline-sync");
var fileData = "";

var readStream = fileStream.createReadStream('input.txt');

readStream.on('data', (readData) =>{
  fileData = readData;
});

readStream.on('end', () =>{
  var searchString = readLine.question("Enter string to search in file : ");
  console.log("file data:"+"\n"+fileData);
  if(fileData.includes(searchString)){
    console.log("The search string "+searchString+" found at "+fileData.indexOf(searchString)+" position");
  }
  else{
    console.log("serach string not found!");
  }
  
});

readStream.on('error', (error) =>{
  console.log(error);
});