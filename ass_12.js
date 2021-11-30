var os=require("os");
console.log("Home directory"+os.homedir());
console.log(JSON.stringify(os.networkInterfaces())+"- Network Interfaces.");
console.log(        os.platform() +"- OS Platform.");
console.log(       os.release() +"- Release of the OS.");
console.log(     os.tmpdir() +"- Temporary directory.");
console.log(        os.totalmem() +"-Total Memory in bytes.");
console.log( os.type() +"- This method returns the operating system name."); 
console.log(os.uptime() +"-  Total uptme of CPU in seconds.");
