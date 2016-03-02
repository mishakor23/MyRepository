$(document).ready(function(){
	$('.product-size').on('click', '.size-btn', function () {
        $('.size-btn').removeClass('size-btn-active');
        $(this).toggleClass('size-btn-active');
    });
    $('.add-btn').on('click', function(event){
    	event.preventDefault();
    	$('.add-btn').addClass('green').text('product added');
    });

  $('.pagination li a').on('click', function(event) {
    event.preventDefault();
    var productId = $(this).attr('data-product-id');
    var bigSrc = "img/big-product-img-" +productId+ ".jpg";
    var bigImg = $('.gallery-wrapper img');
    bigImg.attr('src', bigSrc);
  });
});