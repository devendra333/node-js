import path from "node:path";
import { fileURLToPath } from 'url';


/**
 * __dirname and __filename are only present in common js modules, not inm ES modules
 *  So you have to remove type: "moduke"from package.json
 */
// console.log(__dirname)
// console.log(__filename);

// the alternalte way to es6 modules is 
// 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename)
console.log(__dirname)

/** Basename -> Last portion of filename or dirname */
console.log(path.basename(__filename))
console.log(path.basename(__dirname))


/** extName -> extname of filename or dirname */
console.log(path.extname(__filename))
console.log(path.extname(__dirname))

/** parse -> extra info */
console.log(path.parse(__filename))
console.log(path.parse(__dirname))


/** Join -> paths join by platform specific separator  ( Windows and Linux) */
console.log(path.join(__dirname, "path1", "path2", "index.html"))
console.log(path.join("path1", "path2", "index.html"))
console.log(path.join("path1", "path2", "../index.html"))


/** resolve => Resolves the path sequenes into a absolute path */

console.log(new URL(path.join(__dirname, "path1", "path2", "index.html"), import.meta.url).pathname)
// or
console.log(path.resolve(path.join("/path1", "path2", "../index.html"))) // Reoslges from first "/"

