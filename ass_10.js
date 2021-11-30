var fs=require("fs");

var readLine = require("readline-sync");
//console.log("NewFolder Directory is Created...");
var dirName = readLine.question("Enter folder name");
var fileName = readLine.question("Enter file name ");
var content = readLine.question("Enter content of file");
fs.mkdirSync(dirName);
const createFile = (filePath, fileContent) =>{

    fs.writeFile(filePath, fileContent, (error)  =>{
    if (error) {
    console.error( 'An error occurred: ' , error);
    } else {
    //console.log( 'Your file is Created! ' );
    }
});
}
    
    const path = dirName+"/"+fileName+".txt";
    //content = 'content of my new file' ;
    
//createDir(path);
createFile(path, content);
var delFile = readLine.question("to delete file press small y ");
if(delFile=='y'){
fs.unlink(path,function(err){
    if(err) throw err;
    console.log("file is deleted..");
})
}
else{
    console.log("file is created and not deleted..");
}
var delDir = readLine.question("to delete file press small y ");
if(delDir=='y'){
fs.rmdirSync(dirName);
console.log(" Directory is deleted...");
}
else{
    console.log("directory is created and not deleted..");
}
