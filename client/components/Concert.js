import React from 'react'
import Artists from './Artists'
//
//               <a href="http://www.songkick.com/venues/30044-opera-house?utm_source=35007&amp;utm_medium=partner" target="_blank"><i class="fa fa-external-link"></i></a>
const Concert = React.createClass({
  getArtists(){
  	return [...this.props.show.artists.headliners,
	              	...this.props.show.artists.support]
  },
  render() {
  	return (
	  	<div className='well gigResult'>
	  		<div className="headliners"><a href="#" target="_blank">{this.props.show.artists.headliners.join(', ')}</a></div> 
            { this.props.show.artists.support.length > 0 &&
            	<div className="supporting-acts">with <span className="supporting-names">{this.props.show.artists.support.join(', ')}</span></div>
            }
	  	    <div className="venue">
                <span className="highlight">Venue:</span> <span className="venue-name">{this.props.show.venue}</span>
            </div>
            {this.props.show.time && 
            	<div className="start-time">
	                <i className="fa fa-clock-o"></i>{this.props.show.time}
	            </div>
	        }
	        <Artists artists={this.getArtists()} {...this.props} />
	  	</div>
	)
  }

})

export default Concert;