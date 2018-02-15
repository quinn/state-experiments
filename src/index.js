import React    from 'react'
import ReactDOM from 'react-dom'
import Hello    from './Hello'
import store    from './store'

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
}

const App = () =>
	<div style={styles}>
		<Hello />
		<h2>Start editing to see some magic happen {'\u2728'}</h2>
	</div>

ReactDOM.render(<App />, document.getElementById('root'))

setTimeout(() => {
	store.set('name', 'poo')
}, 1000)