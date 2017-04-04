
function youtube(
		state = {
		  showYoutube: false,
		  artist: ''
		}, 
		action
	){
	switch(action.type) {
		case 'YOUTUBE_PREVIEW' :
			return {
				...state,
				showYoutube: true,
				artist: action.artist
			}

		case 'REMOVE_YOUTUBE_PREVIEW' :
			return {
				...state,
				showYoutube: false,
				artist: ''
			}
		default:
			return state;
	}
	return state;
}

export default youtube;