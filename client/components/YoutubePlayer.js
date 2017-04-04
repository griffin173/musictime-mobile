import React from 'react'

const YoutubePlayer = React.createClass({
  
  render() {
  	return (
	  	<div className="player">
	        <button type="button" className="btn btn-default btn-close" onClick={this.props.removeYoutubePreview.bind(null, null)}>X</button>
  			<div id="youtube-widget">
  			<iframe src={`https://www.youtube.com/embed?listType=search&list=${this.props.youtube.artist}`} width="100%" height="100%"  frameBorder="0" allowTransparency="true"></iframe>
  			</div> 
	    </div>
	)
  }

})

export default YoutubePlayer;

