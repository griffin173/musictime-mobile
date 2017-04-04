import React from 'react';
import ConcertDay from './ConcertDay';


const ConcertList = React.createClass({
	render() {
		return(

			<div>
			
				 <span>{Object.keys(this.props.shows.shows).map((day, i) => <ConcertDay {...this.props} key={i} i={i} date={day} day={this.props.shows.shows[day]} />)}
				{this.props.shows.nextPage>1 && 
					<div className='center'><button className="btn btn-lg btn-primary" onClick={this.props.fetchShows.bind(null, this.props.shows.nextPage, this.props.shows.location)}>Load More</button></div>
				}
				</span>
			{this.props.shows.isFetching &&
	            <div className='loader' />
	          }
			</div>
		)
	}


});

export default ConcertList;