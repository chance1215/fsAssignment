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


// try{
//   fs.renameSync('challenge3/binfo.txt', './info.txt');
// }catch(err){
//   console.log("Error while renaming file");
//
// }

// fs.readFile("./challenge4")
// fs.writeFileSync('challenge4/copyfolder')
// fs.createReadStream('challenge4/info.txt').pipe(fs.createWriteStream('challenge4/copyfolder/info.txt'));

// fs.readFileSync("challenge5/info.txt","utf8")
// var str = "My-Name-is-troy";
// str = str.replace(/-/g, ' ');
// console.log(str);



let numSix =fs.readdirSync("./challenge6");
console.log(numSix);

for(let i = 0; i < numSix.length; i++){
  if(numSix[i].slice(numSix[i].length - 4) == ".txt"){
  console.log(numSix[i])
  }
}
