import React from 'react'

const Artists = React.createClass({
  
  renderArtist(artist, i) {
  	return (
	  	<li className="list-group-item" onClick={this.props.youtubePreview.bind(null,artist)} key={i}>
	        {artist}
	        <span className="youtube-search pull-right">
	          <i className="fa fa-youtube fa-2x"></i>
	        </span>
	        
	    </li>
    )
  },
  render() {
  	return (
	  	<div className="panel panel-default artists">
	            
	            <div className="pane">
	                <ul className="list-group">

	              

	              {this.props.artists.map((artist, i) => 
	              	this.renderArtist(artist, i)

	              )}
                        

	                </ul>
	            </div>
	        </div>
	)
  }

})

export default Artists;