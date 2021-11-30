var os=require("os");
console.log("Architecture:"+os.arch());
console.log("Number of CPU's"+JSON.stringify(os.cpus()));
console.log("Free memory:"+os.freemem()+" bytes");