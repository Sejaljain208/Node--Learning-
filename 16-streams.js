//output will be buffer and last buffer - remainder 

//Encoding batata hai ki file ke bytes ko kis character encoding ke according text mein decode karna hai.
//const stream = createReadStream('./Content/big.txt', {encoding : 'utf8' })

// For file streams, value bytes mein hoti hai.
//highWaterMark roughly batata hai ki stream ek baar mein kitna data buffer/read karne ki koshish karegi.
//Default file read stream ka highWaterMark generally 64 KiB hota hai.
//highWaterMark - control size
//const stream = createReadStream('./Content/big.txt', {highWatermark : 90000 })

const { createReadStream } = require('fs')
const stream = createReadStream('./Content/big.txt',
    {
        highWaterMark: 90000,
        encoding: 'utf8'
    }
)

stream.on('data', (chunks) => {
    console.log(`chunks length : ${chunks.length}`);
    console.log("recieiving chunks ..");
    console.log(chunks);
})
stream.on('end', () => {
    console.log("finished reading file");
})

stream.on('error' ,(err)=>{
    console.log(err);
})
