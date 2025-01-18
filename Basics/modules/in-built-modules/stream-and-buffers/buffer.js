const buffer = new Buffer.from("Devendra");

console.log(buffer) // <Buffer 44 65 76 65 6e 64 72 61> // hexadecimal version 




const buffer2 = new Buffer.from("Devendra", "utf-8");

console.log(buffer2.toString()) // Devendra 



console.log(buffer2.toJSON()) // Devendra 

// {
//   type: 'Buffer',
//   data: [
//      68, 101, 118, 101, // Charcode of D and so on 
//     110, 100, 114,  97
//   ]
// }

// You can do buffer.write 

buffer.write("pandey"); // First 6 are replaced, if greatet than > , it will remove  


console.log(buffer.toString())