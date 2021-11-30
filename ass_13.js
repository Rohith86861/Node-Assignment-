var dns= require("dns");
const {hostname}=require("os");
var readLine = require("readline-sync");
//console.log("NewFolder Directory is Created...");
var dnsname = readLine.question("Enter dns name");
dns.lookup(dnsname,(err,address,family)=>{
    console.log("Address:"+address);
    console.log("Family:"+family);
})
dns.resolve4(dnsname,(err,addresses)=>{
    if(err) throw err;
    console.log("All the Ip Addresses of "+dnsname+" "+JSON.stringify(addresses));
    addresses.forEach( (a)=>{
        dns.reverse(a,(err,hostname)=>{
            if(err) throw err;
            console.log(`Ip Address : ${a} and its hostname: ${hostname}`);
        })
    })
})