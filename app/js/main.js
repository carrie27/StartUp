$(document).ready(function() {
	$('.works-nav__link').on('click', function(e) {
		e.preventDefault();

	var $this = $(this),
		item = $this.closest('.works-nav__item'),
		contentItem = $('.works__item'),
		itemPosition = item.data('id'),
		currentContent = contentItem.filter('.works__item_' + itemPosition ),
		duration = 300;

		if (!item.hasClass('active')) {
			item.addClass('active')
			.siblings()
			.removeClass('active');

		contentItem.hide()
		currentContent.show();
		}	else {
			item.removeClass('active');
		}

	});
});

// slider for About section

$(document).ready(function() {
	$('.control__link').on('click', function(e) {
		e.preventDefault();

	var $this = $(this),
		container = $this.closest('.slider__block'),
		items = container.find('.slider__item'),
		list = container.find('.slider__list'),
		activeSlide = items.filter('.active'),
		nextSlide = activeSlide.next(),
		prevSlide = activeSlide.prev(),
		firstSlide = items.first(),
		lastSlide = items.last();

	if ($(this).hasClass('control__left')) {
		$(list).append(firstSlide);
		nextSlide.addClass('active').siblings().removeClass('active');
	}	
	else {
			$(list).prepend(lastSlide);
			nextSlide.addClass('active').siblings().removeClass('active');		
	}

	});
});		