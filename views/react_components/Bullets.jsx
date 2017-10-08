
class Bullets extends React.Component {
	render() {
		return 	<ol className="Prose Bullets">{this.props.children}</ol>;
	}

};

class BulletItem extends React.Component {
	render() {
		return  <li className="u-margin-bottom-s"><div className="Prose u-layout-prose">{this.props.children}</div></li>;
	}

};
