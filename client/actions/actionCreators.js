export function youtubePreview(artist) {
  return {
    type: 'YOUTUBE_PREVIEW',
    artist
  }
}

export function removeYoutubePreview() {
  return {
    type: 'REMOVE_YOUTUBE_PREVIEW',
    action:{}
  }
}
//change location

export function changeLocation(location){
	return {
		type: 'CHANGE_LOCATION',
		location
		
	}
}//remove comment

export function requestShows(location){
	return {
		type: 'REQUEST_SHOWS',
		location	
	}
}//remove comment


export function receiveShows(json, merge) {
  return {
    type: 'RECEIVE_SHOWS',
    shows: json,
    merge
  }
}


export function fetchShows(page, location) {
	var url;
	if (typeof location == 'undefined'){
		url =`http://api.songkick.com/api/3.0/events.json?page=${page}&location=clientip&apikey=01Q2xyzpKWuaMeI6&jsoncallback`
	} else {
		url= `http://api.songkick.com/api/3.0/events.json?page=${page}&location=geo:${location.lat},${location.lng}&apikey=01Q2xyzpKWuaMeI6&jsoncallback`
	}
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestShows(location))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
//http://api.songkick.com/api/3.0/events.json?apikey={your_api_key}
//return fetch(`http://api.songkick.com/api/3.0/events.json?location=clientip&apikey=01Q2xyzpKWuaMeI6&jsoncallback`)

    return fetch(url)
      .then(response => response.json())
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveShows(json, (page>1)))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
