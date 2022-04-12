const slide = document.querySelector('.slide');
const boxShow = document.querySelector('.box_show');
const listBox = document.querySelectorAll('.box_page_4');
const btnLeft = document.querySelector('.btn_left');
const btnRight = document.querySelector('.btn_right');

document.addEventListener('DOMContentLoaded', function() {
    make_slide(1)
})

function make_slide(slide_quantity) {

    let width_box = slide.offsetWidth / slide_quantity
    let width_all_box = width_box * listBox.length
    boxShow.style.width = `${width_all_box}px`

    listBox.forEach(function(set_width_box){
        set_width_box.style.margin = '0 4rem'
        set_width_box.style.width = `${width_box - 4}rem`
    })

    let count = 0;
    let remain = width_all_box - width_box * slide_quantity;

    btnRight.addEventListener('click', function () {
        count += width_box;
        if (count > remain) {
            count = 0;
        }
        boxShow.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= width_box;
        if (count < 0) {
            count = remain;
        }
        boxShow.style.transform = `translateX(${-count}px)`;
    });
}

// back top top

$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		console.log(pos_body);

// show nav active
        if(pos_body < 615){
            $('.home').addClass('active');
            $('.info').removeClass('active');
            $('.education').removeClass('active');
            $('.qualification').removeClass('active');
            $('.products').removeClass('active');
        } 
        else if(pos_body > 615 && pos_body < 1120){
            $('.home').removeClass('active');
            $('.info').addClass('active');
            $('.education').removeClass('active');
            $('.qualification').removeClass('active');
            $('.products').removeClass('active');
        } 
        else if ( pos_body > 1120 && pos_body < 1650) {
            $('.home').removeClass('active');
            $('.info').removeClass('active');
            $('.education').addClass('active');
            $('.qualification').removeClass('active');
            $('.products').removeClass('active');
        } 
        else if ( pos_body > 1900 && pos_body < 2590) {
            $('.home').removeClass('active');
            $('.info').removeClass('active');
            $('.education').removeClass('active');
            $('.qualification').addClass('active');
            $('.products').removeClass('active');
        } 
        else if ( pos_body > 2590 ) {
            $('.home').removeClass('active');
            $('.info').removeClass('active');
            $('.education').removeClass('active');
            $('.qualification').removeClass('active');
            $('.products').addClass('active');
        }

// show back_to_top
		if(pos_body<615){
			$('.back_to_top').addClass('back_to_top_none');
		} else {
            $('.back_to_top').removeClass('back_to_top_none');
        }
		
	});

	$('.back_to_top').click(function(event) {
		$('html, body').animate( {scrollTop : 0}, 100 );
        return false;
	});
});


