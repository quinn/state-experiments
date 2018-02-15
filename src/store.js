const Store = {
	state: {},
	listeners: {},

	set: (path, val) =>
		Store.dispatch(path, {
			...Store.state,
			[path]: val,
		}),

	dispatch: (path, newState) => {
		Store.state = newState

		Object.keys(Store.listeners).forEach(listenerPath => {
			if (path === listenerPath) Store.listeners[path](newState)
		})
	},

	addListener: (path, callback) => {
		var listeners = Store.listeners[path] || []

		if (!Store.listeners[path]) Store.listeners[path] = listeners

		listeners.push(callback)
		console.log('HI FROM addListener', Store.listeners, { callback })

		return () => {
			listeners.splice(listeners.indexOf(callback), 1)
		}
	},
}

window.store = Store

export default Store
