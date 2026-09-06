const {readFile ,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const run = async () => {
    try{
        const first = await readFile('./Content/first.txt' ,'utf8')
        const Second = await readFile('./Content/Second.txt' ,'utf8')
        console.log(first ,Second);

        await writeFile('./Content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} , ${Second}` ,
            {flag :'a'}
        )
    }
    catch(error){
        console.log(error);
    }
}

run()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(result)
//             }
//         })
//     })
// }

// getText('./Content/first.txt')
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

