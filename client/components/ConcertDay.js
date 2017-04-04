import React from 'react';
import Concert from './Concert';


const ConcertDay = React.createClass({
	render() {
		return(
			<div>
			<div className="date">
		      {this.props.date}
			</div>
			<div className='concert-list'>

				<span>{this.props.day.map((show, i) => <Concert {...this.props} key={i} i={i} show={show} />)}</span>
			</div>
			</div>
		)
	}


});

export default ConcertDay;