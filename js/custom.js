$(function () {
	/* Include html Files */
	$('.gnb-include').load('/component/gnb.html');
	$('.main-header-include').load('/component/main-header.html');
	$('.goods-detail-header-include').load('/component/goods-detail-header.html');

	/* Category Accordion */
	$('.category-accordion .detail').eq(0).show();
	$('.category-accordion .title').on('click', function () {
		$(this).next().stop().slideToggle();
		$(this).siblings('.category-accordion .title').next().stop().slideUp();
		$(this).siblings('.category-accordion .title').removeClass('active');
		$(this).toggleClass('active');
	});

	/* recent search result */
	$('.search-recent .btn-clear').on('click', function () {
		$(this).parent().hide();
	});
	$('.btn-all-clear').on('click', function () {
		$('.search-recent .item').hide();
	});

	/* cart page */
	$('.cart').ready(function () {
		/* title 길이 자르기*/
		$('.cart-item-title span').text(function (_, text) {
			return text.length > 50 ? text.substr(0, 50) + '...' : text;
		});

		$('#selboxDirect').hide();
		$('#selbox').on('change', function () {
			if ($('#selbox').val() == 'direct') {
				$('#selboxDirect').show();
			} else {
				$('#selboxDirect').hide();
			}
		});

		/* month, date 연결 */
		var month = new Date().getMonth() + 1;
		var date = new Date().getDay() + 1;

		$('.cart-item-info .delivery-date b').eq(0).text(month);
		$('.cart-item-info .delivery-date b').eq(1).text(date);
	});

	/* Cart items */
	$('.cart-items-header .btn-all-clear').on('click', function () {
		$('.cart-item').hide();
	});
});
