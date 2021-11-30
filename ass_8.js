var fs=require("fs");
var fileData="hi how are you";
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(fileData);

writerStream.on('finish', function() {
    console.log("Write completed.");
 });
 
/*writerStream.on('error',function(err){
    console.log("Error is"+error);
})*/