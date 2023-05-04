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

		$('.selboxDirect').hide();
		$('#selbox').on('change', function () {
			if ($('#selbox').val() == 'direct') {
				$('.selboxDirect').show();
			} else {
				$('.selboxDirect').hide();
			}
		});

		/* month, date 연결 */
		var month = new Date().getMonth() + 1;
		var date = new Date().getDay() + 1;

		$('.cart-item-info .delivery-date b').eq(0).text(month);
		$('.cart-item-info .delivery-date b').eq(1).text(date);
	});

	/* Cart items 삭제버튼*/
	$('.cart-items-header .btn-all-clear').on('click', function () {
		$('.cart-item').hide();
		$('.cart-items-summary .price').text('0원');
		$('.cart-items').html(
			'<p class="no-item">장바구니에 담긴 상품이 없습니다.</p>'
		);
	});
	$('.cart-item-title .btn-clear').on('click', function () {
		console.log('click');
		$(this).parent().parent().hide();
	});

	/* cart-item의 수량버튼 */
	$('.count-wrap button').on('click', function (e) {
		e.preventDefault();
		var $count = $(this).parent('.count-wrap').find('.input');
		var now = parseInt($count.val());
		var min = 1;
		var max = 99;
		var num = now;

		if ($(this).hasClass('minus')) {
			if (now > min) num = now - 1;
		} else {
			if (now < max) num = now + 1;
		}
		if (num != now) $count.val(num);
	});
});
