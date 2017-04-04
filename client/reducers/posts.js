//a reducer takes action and copy of state

function posts(state = [], action){
	switch(action.type) {
		case 'INCREMENT_LIKES' :
		const i = action.index;
			return [
				...state.slice(0,i),
				{...state[i], likes:state[i].likes + 1},
				...state.slice(i+1)
			]
		default:
			return state;
	}
	console.log('the post will change')
	console.log(state,action)
	return state;
}

export default posts;