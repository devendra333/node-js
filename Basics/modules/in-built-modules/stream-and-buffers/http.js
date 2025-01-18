import http from "node:http"
import fs from "node:fs";

const PORT  = 5700;

const server = http.createServer((req, res) => {
// this req and res are stream
const path = new URL("./input.html", import.meta.url).pathname;

// Bad way of trandaferring file 
// check in activity monitor for node ith multiple such file requests
//  const badFile = fs.readFileSync(path);
//  return res.end(badFile)


// Good way to transfring filr

// const readableStream = fs.createReadStream(path);


// readableStream.pipe(res);


/** Bad way to copy a file */

// console.time('start')

// const inputFile = fs.readFileSync(path);

// fs.writeFileSync('output.txt', inputFile);
// console.timeEnd('start')
// res.end()

/** Good way to copy a file */

const inputStream = fs.createReadStream(path);

const writeStream = fs.createWriteStream('output.html')

let CHUNK_COUNT = 1;

inputStream.on("data", (chunk) => {
    setTimeout(() => {
    console.log("chunk ", CHUNK_COUNT++)
    writeStream.write(chunk);
    }, 5000)
})

res.end();





})

server.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`)
   
})