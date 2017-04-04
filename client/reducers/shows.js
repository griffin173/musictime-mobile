//a reducer takes action and copy of state
function getNextPage(shows) {
	return (shows.resultsPage.page*shows.resultsPage.perPage <shows.resultsPage.totalEntries) ? shows.resultsPage.page+1 : 1;
}
function parseShows(originalShows, shows, merge) {
	var {resultsPage: {results}} = shows;
	var {event} = results;
	
	//var concerts = {}
	console.log(merge)
	var initialShows = (merge) ? originalShows : {}
	var days = []
	var currentDay;
	//console.log(event);
	const concertList = event.map((obj) =>{
		let {displayName, location:{city:location}, venue:{displayName: venue}, performance, start:{time}, start:{date}} = obj;
	    const artists = performance.reduce((acc, v) => {
	    	v.billing== 'headline' ? acc.headliners = [...acc.headliners,v.displayName] : acc.support = [...acc.support, v.displayName]
	    	return acc;
	    }, {headliners:[], support: []})
	    return {
	    	displayName,
	    	location,
	    	venue,
	    	artists,
	    	time,
	    	date
	    }
	}).reduce((concerts, value) => {
		let {date} = value;
		concerts[date] ? concerts[date] = [...concerts[date], value] : concerts[date] = [value]
		return concerts
	}, initialShows)
	
	return concertList;
	// for (var {displayName, location:{city:location}, venue:{displayName: venue}, performance, start:{datetime}} of event) {
	//   let showTime = new Date(datetime);
	//   if (typeof currentDay == 'undefined'){
	//   	currentDay= showTime.getDate()
	//   }
	//   if (currentDay!= showTime.getDate()){

	//   	days.push(
	//   		{
	//   			...concerts,
	//   			date : concerts[0].showTime
	//   		}
	//   	)
	//   	concerts = [];
	//   }
	//   let headliners = [];
	//   let support = [];
	//   let currentDay = showTime.getDate()
	//   for (var {displayName, billing} of performance) {
	//   	if (billing=='headline') {
	//   		headliners.push(displayName)
	//   	} else {
	//   		support.push(displayName)
	//   	}
	//   }
	//   let artists = {
	//   	headliners, 
	//   	support
	//   };

	//   concerts.push({displayName,location,venue,showTime,artists});
	// }
	// for (var key in results) {
	// 	console.log(results[key])
	//   let {displayName, location:{city:location}, venue:{displayName: venue}} = results[key]
	// 	console.log(displayName,location,venue)
	// }
	// results.map((concert,index) =>{
	// 	let {displayName, location:{city:location}, venue:{displayName: venue}} = concert
	// 	console.log(displayName,location,venue)
	// })
	//return days;
}
function shows(
		state = {
		  isFetching: false,
		  shows: []
		}, 
		action
	){
	switch(action.type) {
		case 'REQUEST_SHOWS' :
			return {
				...state,
				isFetching: true,
				location: action.location
			}

		case 'RECEIVE_SHOWS' :
			return {
				...state,
				isFetching: false,
				shows: parseShows(state.shows,action.shows, action.merge),
				nextPage: getNextPage(action.shows),
			}
		case 'LOAD_MORE' :
		    return {
				...state,
				isFetching: false,
				shows: parseShows(action.shows),
			}
		default:
			return state;
	}
	return state;
}

export default shows;