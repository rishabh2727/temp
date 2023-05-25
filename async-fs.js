// asynchronously reading the contents of another file by using the callback function
const fileRead = require("fs");

fileRead.readFile("./nodejs_folder/second.txt",'utf8',(error,content) => {
    if(error){
        console.error("An error has occured",error);
    }
    else{
        console.log(content);
    }
})

const message = "Hey Rishabh";
fileRead.writeFile(
    "./nodejs_folder/text.txt",
    message,(error) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(message);
        }
    })

// we start the task offload the task and start with 
// the next one





