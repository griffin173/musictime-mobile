import React from 'react'

import Geosuggest from 'react-geosuggest';
import ConcertList from './ConcertList';
import YoutubePlayer from './YoutubePlayer';

 
const Location = React.createClass({
  handleSelect(location){
  	//e.preventDefault();
  	//console.log(e)
  	this.props.fetchShows(1, location.location)
  	// const {postId} = this.props.params;
  	// const author = this.refs.author.value;
  	// const comment = this.refs.comment.value;
  	// this.props.addComment(postId, author, comment)
  	// this.refs.commentForm.reset();
  },
  getLocation(){
  if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                return new google.maps.LatLng(coords.latitude, coords.longitude)
                
            })
        }
  return new google.maps.LatLng(43.653226, -79.38318429999998);
},
componentDidMount(){
  this.props.fetchShows(1)
},
  render() {
  	return (
	  	<div className='location'>
	  	  <Geosuggest
          placeholder="Enter your location!"
          onSuggestSelect={this.handleSelect}
          location={this.getLocation()}
          radius="20" />

        <ConcertList {...this.props} />
        {this.props.youtube.showYoutube &&
            <YoutubePlayer {...this.props} />
        }
	  	</div>
	)
  }

})

export default Location;