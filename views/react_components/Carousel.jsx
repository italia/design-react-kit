class Carousel extends React.Component {
	
	render() {
		var otherchildren = [];
		var items;
		items = React.Children.map(this.props.children, (child, i) => {
			if (child.type.name) return child;
			otherchildren.push(child);
		})
		return  <section className="u-background-grey-60 u-padding-r-all">
			<div className="u-layout-medium u-layoutCenter">
				<div className="Grid">
					<h2 id="carousel-heading" className="Grid-cell u-text-h2 u-color-white u-layout-centerLeft">Gallerie</h2>
					<div className="Grid-cell u-layout-centerRight">
						<button style={{display: 'none'}} className="owl-prev u-padding-bottom-xl u-padding-right-xxl u-text-r-xl u-color-teal-50" aria-controls="carousel-1">
							<span className="u-hiddenVisually">Vai alla slide precedente</span>
							<span className="u-alignMiddle Icon Icon-arrow-left" role="presentation"></span>
						</button>
						<button className="owl-next u-padding-bottom-xl u-padding-left u-text-r-xl u-color-teal-50" aria-controls="carousel-1">
						  <span className="u-hiddenVisually">Vai alla slide successiva</span>
						  <span className="u-alignMiddle Icon Icon-arrow-right" role="presentation"></span>
						</button>
						<p className="u-hiddenVisually">È possibile navigare le slide utilizzando i tasti freccia</p>
					</div>
				</div>
				<div className="owl-carousel owl-theme" role="region" id="carousel-1">
				{items}
				</div>
				{otherchildren}
			</div>
		</section>
		;
	}
	
	componentDidMount() {
		var owl = jQuery('.owl-carousel');
		owl.owlCarousel({
			nav: false,
			/* navText: ['precedente', 'successivo'], */
			items: 3,
			dots: false,
			loop: false,
			margin: 16,
			mouseDrag: true,
			URLhashListener: true,
			startPosition: 'URLHash',
			responsive: {
			  0: {
				items: 1
			  },
			  768: {
				items: 2
			  },
			  992: {
				items: 3
			  }
			}
		});
		
		owl.on('changed.owl.carousel', function(event) {
			var currentItem = event.item.index;
			jQuery('.Grid .Grid-cell .owl-prev').show();
			jQuery('.Grid .Grid-cell .owl-next').show();
			if (  currentItem == 0 ) jQuery('.Grid .Grid-cell .owl-prev').hide();
			if (  currentItem == owl.length ) jQuery('.Grid .Grid-cell .owl-next').hide();
			window.location.hash = currentItem + 1;
		})
		jQuery('.Grid .Grid-cell .owl-prev').click(function() { owl.trigger('prev.owl.carousel') });
		jQuery('.Grid .Grid-cell .owl-next').click(function() { owl.trigger('next.owl.carousel') });
	}
}

				

class CarouselItem extends React.Component {

	render() {
		return <div className="Carousel-item">
			<div className="u-color-grey-30">
				{this.props.children}
			</div>
		</div>;
	}
}
