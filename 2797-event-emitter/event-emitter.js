class EventEmitter {
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    myEvent = new Map();
    subscribe(eventName, callback) {
        if (this.myEvent.has(eventName)) {
            this.myEvent.set(eventName, [...this.myEvent.get(eventName), callback])
        } else
            this.myEvent.set(eventName, [callback])
        return {
            unsubscribe: () => {
                if (this.myEvent.has(eventName)) {
                    const newFns = this.myEvent.get(eventName).filter(fn => fn != callback)
                    this.myEvent.set(eventName, newFns)
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
        if (this.myEvent.has(eventName)) {
            const fns = this.myEvent.get(eventName)
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