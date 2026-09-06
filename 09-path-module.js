// path Module: path module ka use files aur folders ke paths ke saath kaam karne ke liye hota hai.

const path = require('path')
// Ab path ke methods use kar sakte ho.

console.log(path.sep);              // "/"

// path.join(): Multiple path parts ko safely join karta hai.
const filePath = path.join('/Content', 'subfolder', 'test.txt')
console.log(filePath)

// path.basename(): Path mein se last part, usually filename, deta hai.
console.log(path.basename(filePath))                                    //test.txt

//. path.dirname(): Path mein se directory/folder ka path deta hai. 
console.log(path.dirname('/content/subfolder/test.txt'))           //content/subfolder

// path.extname(): File ka extension deta hai.
console.log(path.extname('app.js'))                                       //.js

//path.parse(): Ek complete path ko parts mein tod deta hai.
console.log(path.parse('/content/subfolder/test.txt')) 

// path.resolve() : Ye absolute path create karta hai.
console.log(path.resolve('app.js'))
console.log(path.resolve(__dirname,'Content','subfolder','text.txt'))
