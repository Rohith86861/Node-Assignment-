var fs=require("fs");
var readline=require('readline');


fs.readFile('input.txt',function(err,data){
    var len=data.length;
    var inp=data.toString();
    var inp2=inp.split('\n');
    //var words=inp.match(/(\w+)/g).length;
    var inp3=inp2.join(' ').split(' ');
    var words=inp3.length;
    var lines=inp2.length;


    if(err)
    console.log("There is an error"+err)
    else
    console.log("data="+"\n"+data+"\n"+"characters="+" "+len+" "+"words="+" "+words+" "+ "lines="+" "+lines);
})
/*var data=fs.readFileSync('input.txt')
console.log("read data in synchronous way:"+data);*/