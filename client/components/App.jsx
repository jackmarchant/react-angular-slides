App = React.createClass({
	getDefaultProps() {
		return {
			slidesLength: 11,
		}
	},
	getInitialState() {
		return {
			slide: 0,
		}
	},
	previousSlide() {
		if (this.state.slide >= 1) {
			this.setState({
				slide: this.state.slide - 1,
			});
		}
	},
	nextSlide() {
		if (this.state.slide < this.props.slidesLength) {
			this.setState({
				slide: this.state.slide + 1,
			});
		}
	},
	getSlideContent() {
		let contentObject = {
			'0': '<div class="col-xs-6"><div class="inner"><img src="http://smashingboxes.com/media/W1siZiIsIjIwMTUvMTAvMjAvMTAvNDQvNTMvNjk3L1JlYWN0XzEuMC5wbmciXV0/React%201.0.png?sha=886b9b43c826ec79" /><h3>React</h3></div></div><div class="col-xs-6"><div class="inner"><img src="https://eyalvardi.files.wordpress.com/2013/04/angularjs-logo.png" /><h3>Angular</h3></div></div>',
			'1': '<h2>A little about me...</h2><p>I love the web. Programming takes up a fair bit of my time. I love learning new things.</p><p>I\'m a big believer in using the right tools for the job. Whether it\'s React, Angular, SilverStripe or Laravel, all tools are built for specific purposes.</p>',
			'2': '<div class="col-xs-6"><h2>React</h2><ul><li>Virtual DOM</li><li>One-way data flow</li><li>Is a <strong>library</strong> just for the UI</li><li>If you know JavaScript, you know React</li></ul></div><div class="col-xs-6"><h2>Angular</h2><ul><li>Full-featured MVC framework</li><li>Two-way data-binding</li><li>Extension of HTML</li><li>Lets you separate views, models and controllers</li></ul></div>',
			'3': '<div class="col-xs-6"><h2>React</h2><p>React makes no assumptions about the rest of your tech stack and is easily integrated into existing projects.</p></div><div class="col-xs-6"><h2>Angular</h2><p>Angular does a lot of heavy lifting for you, and gives you everything you need for single-page apps.</p></div>',
			'4': '<h2>In my experience...</h2><p>React was the better choice for me, after having tried to integrate Angular into existing projects.</p><p>It just didn\'t work well, and ended up being very cluttered.</p>',
			'5': '<h2>Angular</h2><ul><li><p>I tried to learn Angular before React and the learning curve was much steeper than I had anticipated.</p></li><li><p>Managing the state of the application was difficult, and I found it hard to understand.</p></li></ul>',
			'6': '<h2>React</h2><ul><li><p>React was much easier to pick up and run with. Composing components with other components, kinda sounds like composing objects of other objects, which is something I was already familiar with.</p></li><li><p>JavaScript is fast and the Virtual DOM makes React fast. It\'s easy with React to describe what we want our UI to look like at any time and let the library handle view changes.</p></li></ul>',
			'7': '<h2>At the end of the day..</h2><p>Users don\'t actually care which framework or library you use to create their dashboards, they just want instantaneous, reactive web apps (is that too much to ask?)</p><p>I think it comes down to preference for developers, if you can, choose what makes sense for you and for whatever you\'re trying to build.</p>',
			'8': '<h2>Do one thing, and do it well</h2><p>I don\'t know if it\'s possible to have a clear winner, there\'s some things Angular does really well but there are parts where it falls short and React has things like rendering on the server.</p><p>Angular does a lot of things, but React does one thing, the view layer, and it does it really well.</p>',
			'9': '<p>Ideas are better than best practices and syntax.</p><p>Angular and React might not be around in years to come, but their ideas will likely remain in their successors.</p>',
			'10': '<h2>I\'m biased, but not really</h2><p>For me, React is the winner, but it\'s almost running a different race to Angular. Comparing a Library to a Framework is quite difficult as it\'s not so clear cut.</p><p>It\'s more about the ideas you can take from each, rather than whose syntax or conventions are better.</p>',
			'11': '<h1 class="text-center">Thanks!</h1>',
		}
		return contentObject[this.state.slide];
	},
	renderPreviousBtn() {
		if (this.state.slide > 0) {
			return (
				<button className="previous btn btn-info" onClick={this.previousSlide}>Previous</button>
			);
		}
	},
	renderNextBtn() {
		if (this.state.slide < this.props.slidesLength) {
			return (
				<button className="next btn btn-info" onClick={this.nextSlide}>Next</button>
			);
		}
	},
	render() {
		return (
			<div className="wrapper">
				<div className="container">
					<h1 className="text-center">React v Angular</h1>
				</div>
				<div className="container">
					<Slide html={this.getSlideContent()}/>
				</div>
				<div className="controls">
					{this.renderPreviousBtn()}
					{this.renderNextBtn()}					
				</div>
			</div>
		);
	}
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    var container = document.getElementById('app-container');
    ReactDOM.render(<App />, container);
  });
}