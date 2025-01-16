# Node.js Modules

## Types of Modules

### Local Modules
Local modules are those that we create within our own application. They are specific to the application's functionality and are not provided by Node.js or any external sources.

### Built-in Modules
Built-in modules are provided by Node.js out of the box. These modules offer core functionalities, such as handling the file system, streams, HTTP requests, and more.

### Third-Party Modules
Third-party modules are those that are installed via NPM (Node Package Manager). These modules are developed by the Node.js community and can be easily integrated into applications to extend functionality.

## Module Patterns

### CommonJS
CommonJS is a module system adopted by Node.js in its early stages. It is widely used in many Node.js codebases and CLI tools.

- **Importing Modules**: Use `require` to import modules.
- **Exporting Modules**: Use `module.exports` to export modules.

Before a module's code is executed, Node.js wraps it in an Immediately Invoked Function Expression (IIFE) that provides scoping before it is loaded. This IIFE contains five parameters:

```javascript
(function(exports, require, module, __filename, __dirname) {
    // Module code goes here
})();
```

- `__dirname`: The directory name of the current module.
- `__filename`: The filename of the current module.
- `require`: A function to import a module by path.

Because of these parameters, several global variables are available within each module's scope.

If a module is imported more than once, it is cached, so older values will be shown on subsequent imports.

### ES Modules
ES Modules (introduced after Node.js version 18) are the standard module system in modern JavaScript.

- **File Extensions**: Use `.mjs` for ES modules or set `"type": "module"` in `package.json` to use `.js` files as ES modules.

## Watch Mode in Node.js
In Node.js version 18, a watch mode was introduced. This mode automatically restarts the process when code changes are detected.

```bash
node --watch index.js
```

## Next Steps
In the next tutorial, we will focus on built-in modules.
