var fs = require('fs');



// fs.readFile("challenge1/info.txt","utf8",(err,data)=> {
//   if(err){
//     throw err;
//   }
//   console.log(data)
// })



 //  let text =fs.readFileSync("challenge2/info.txt" ,"utf8")
 //
 //  text = text +'Chelsea\n' ;
 //  fs.writeFileSync("info.txt" , text)
 //
 // console.log(text)



 fs.rename("challenge3/binfo.txt","utf8",(err,data) =>{
  if(err){
    throw err;
  }
  console.log(data)
})
