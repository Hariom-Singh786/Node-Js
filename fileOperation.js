const fs = require('fs');

const filePath= "example.txt"

//write something on the file

// fs.writeFile(filePath, "It's first comment in the file", (err)=>
// {
//     if(err)
//     {
//     console.log(err);
//     }
//     console.log("data is written to the file. No worries");
// })

// read data from the file

// fs.readFile(filePath, 'utf8', (err,data)=>
// {
//     if(err)
//     {
//     console.log(err);
//     }
//     console.log(data.toString());
// })

//append data into the file

// fs.appendFile(filePath, "\nNew comment to the file", (err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("data is appended to the file");
// })

// fs.readFile(filePath, 'utf8', (err,data)=>
// {
//     if(err)
//     {
//     console.log(err);
//     }
//     console.log(data.toString());
// })

//check if file exists then delete that file from the folder

// fs.access(filePath, fs.constants.F_OK, (err)=>
// {
//     if(err)
//     {
//         console.error('File does not exist');
//         return;
//     }
//     //unlink or delete the existing file 
//     fs.unlink(filePath, (err)=>
//     {
//         if(err)
//         {
//             console.error('File does not exist',err);   
//             return   
//         }
//             console.log('file deleted successfully');
//     })
// })

//open a file and write some data to it and then safely close it
    // fs.open(filePath, 'w', (err, fd)=>
    // {
    //     if(err)
    //     {
    //         console.error('File does not exist',err);
    //     }
    //     const data = "Hi Krupali I miss you :("
    //     fs.write(fd,data,(err,bytewritten,buffer)=>
    //     {
    //         if(err)
    //         {
    //             console.error('File does not exist',err);
    //         }
    //         console.log(`${bytewritten} into the file ${buffer.toString()}`);
    //         fs.close(fd, (err)=>
    //         {
    //             if(err)
    //             {
    //                 console.error('File does not exist',err);
    //             }
    //             console.log('file is closed successfully');
    //         })
    //     })

    // })

    //file rename

    fs.rename('example.txt', 'newexample.txt', (err)=>
    {
        if(err)
        {
            console.error('File does not exist',err);
        }
        console.log('file is renamed successfully');
    })