
class PlaceholderFigure extends React.Component {
	
	render() {
		return <figure>
			<a href="#img-1" aria-labelledby="desc-1" className="u-block u-padding-all-xxs">
			  <img src={this.props.src} className="u-sizeFull" alt="" />
			</a>
			<figcaption className="u-padding-r-top">
				<p className="u-color-teal-50 u-text-r-xxs u-textWeight-700 u-padding-bottom-s">{this.props.title}</p>
				<div className="Grid">
					<span className="Grid-cell u-sizeFit Icon-camera u-color-white u-floatLeft u-text-r-l" aria-hidden="true"></span>
					<h3 id="desc-1" className="Grid-cell u-sizeFill u-padding-left-s u-lineHeight-l u-color-white u-text-r-xs u-textWeight-700">
						{this.props.content}
					</h3>
				</div>
			</figcaption>
		</figure>;
	}
}

