fs=require('fs');
fs.readFile('package.json','utf-8',function(err, data){
    if(err){
        return console.log(err);
    }
    console.log(data);
})