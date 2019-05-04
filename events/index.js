// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

// Events Library

// 1. call functon with name of event,
// 2. invokes a callback that performs an operation

class Events {

    constructor() {
        this.events = {}
        // keys = eventNames => 'click', 'hover', 'exit', etc.
        // values = array of callback functions
    }

    // Register an event handler with a given name
    on(eventName, callback) {
        if(this.events[eventName]) {
            this.events[eventName].push(callback);
        }
        else {
            this.events[eventName] = [callback];
        }
    }
  
    // Immediately trigger all callbacks associated with a given eventName 
    trigger(eventName) {
        if(this.events[eventName]) {
            let arrayOfCallbacks = this.events[eventName];
            for(let i = 0; i < arrayOfCallbacks.length; i++) {
                arrayOfCallbacks[i]();
            }
        }
        return null;
    }
  
    // Remove all event handlers associated with the given eventName
    off(eventName) {
        if(this.events[eventName]) {
            this.events[eventName] = [];
        }
    }
  }
  
  module.exports = Events;
  