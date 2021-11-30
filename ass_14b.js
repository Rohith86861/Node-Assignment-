var http=require("http");
var obj={
    id:101,
    name:"rohith",
    dept:"IT",
    designation:"trainee"
}
http.createServer(function(request,response){
    
    response.write(JSON.stringify(obj));
    response.end();
}).listen(8086);

console.log("Server is listening at http://localhost:8081/index.html");