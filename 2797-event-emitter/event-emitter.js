class EventEmitter {
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    constructor() {
        this.events = new Map();
    }
    subscribe(eventName, callback) {
        if (this.events.has(eventName)) {
            this.events.set(eventName, [...this.events.get(eventName), callback])
        } else
            this.events.set(eventName, [callback])
        return {
            unsubscribe: () => {
                if (this.events.has(eventName)) {
                    const newFns = this.events.get(eventName).filter(fn => fn != callback)
                    if (newFns.length > 0) {
                        this.events.set(eventName, newFns);
                    } else {
                        this.events.delete(eventName);
                    }
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const result = []
        if (this.events.has(eventName)) {
            const fns = this.events.get(eventName)
            fns.forEach(fn => {
                result.push(fn(...args))
            })
        }
        return result
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */