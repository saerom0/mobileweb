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
});
