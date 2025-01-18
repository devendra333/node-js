import EventsEmitter from "node:events"


const emitter = new EventsEmitter();
// First Listen then broadcast
emitter.on("execute", (a,b) => {
    console.log("Event Executed!!", a, b) // a and b are a
})
emitter.on("execute", (a,b) => {
    console.log("Event Executed again!!", a, b) // a and b are a
})

emitter.emit("execute", "first", "second") // This event "execute" is broadcasted in our code 
console.log("Intro to path module!!")



// to Listen to this event, we need to register using "on" method


// Most of the  modules like fs , http , streams uses eventEmitter under the hood 
