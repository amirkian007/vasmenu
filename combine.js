var fs = require('fs');
const fileNames=['intro','Installation','GettingStarted','Props','Events','Slots','Sass','Css']
let memory = new Map()

fileNames.forEach(async (fileName)=>{
    await fs.readFile(process.cwd() + '/marks/' + fileName + '.md', function (err, data) {
      if (err) {
        throw err; 
      }
      memory.set(fileName,'\n'+data.toString())
     });
 
  })

 let filePath = process.cwd() + '/ReadmeF' +".md";
 setTimeout(() => {
  let ReadmeMd = ``
  fileNames.forEach(async (fileName)=>{
    ReadmeMd += memory.get(fileName)
  })
     fs.writeFile(filePath, ReadmeMd, {encoding:'utf8',flag:'w'}, function(err) {
         if (err) {
             console.log("File '" + filePath + "' already exists.");
         }
         console.log("done")
     });
 }, 5000);