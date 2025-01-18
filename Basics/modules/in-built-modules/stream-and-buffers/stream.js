/**
 * Every module uses streams , and we may nevee need ro inercat directly with stream 
 *  We can use Stream api to reate streams of data in nodejs
 * There are 3 types of streams in  node js 
 * 1) readbavle stream 
 *  2) Writable Stream 
 * 3) Duplex Streams
 */
import fs from "node:fs"
import {Readable, Writable, Transform} from "node:stream"
const writableStream = new Writable({
    // threshold : 2 // @B is the threshold of the buffer
    write(chunk){
        fs.createWriteStream("test.txt").write(chunk);
        console.log("Write", chunk.toString('utf8'))
    }
})

const transformStream = new Transform({
    transform: (chunk, encoding, callback) => {
        console.log("Transform", chunk.toString('utf8'))
        const newString = chunk.toString().toUpperCase();
        callback(null, newString)
    }
})

const readableStream = new Readable({
    read:()=>{}
})

readableStream.on("data", (chunk)=>{
    console.log("read", chunk.toString('utf8'))
})

readableStream
.pipe(transformStream)
.pipe(writableStream)


readableStream.push("data")


