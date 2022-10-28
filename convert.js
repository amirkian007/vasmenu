require('dotenv').config();
var showdown  = require('showdown');
var fs = require('fs');
const { Octokit, App } = require("octokit");
//let filename = "README.md"
const fileNames=['Installation','GettingStarted','Props','Events','Slots','Sass','Css']

const personalToken = process.env.TOKEN
if(!personalToken)throw(new Error('Need a github personal token'))
// let pageTitle = process.argv[2] || ""

const octokit = new Octokit({
    auth: personalToken
  })

  const regex = /href="#\S*"/ig;
fileNames.forEach(fileName=>{
     fs.readFile(process.cwd() + '/marks/' + fileName + '.md', function (err, data) {
      if (err) {
        throw err; 
      }
      let text = data.toString();
        octokit.request('POST /markdown', {text:text}).then(r=>{
        console.log(`converting ${fileName}.md ... `)
          let filePath = process.cwd() + '/src/components/' + fileName +".vue";
          let dataq = '<template>\n<article class="markdown-body">\n' + r.data.toString().replaceAll(regex, '') + '\n</article>\n</template>';
          fs.writeFileSync(filePath, dataq, {encoding:'utf8',flag:'w'}, function(err) {
          if (err) {
            console.log("File '" + filePath + "' already exists.");
          }});
        })
     });
  })
