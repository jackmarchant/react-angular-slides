Slide = React.createClass({
	render() {
		return (
			<div className="slide">
				<div className="content" dangerouslySetInnerHTML={{__html: this.props.html}}/>
			</div>
		);
	},
});