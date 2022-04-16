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
        set_width_box.style.margin = '0 2rem'
        set_width_box.style.width = `${width_box - 2}rem`
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

// show nav active for laptop
        if(pos_body < 615){
            $('.home').addClass('active');
            $('.info').removeClass('active');
            $('.education').removeClass('active');
            $('.qualification').removeClass('active');
            $('.products').removeClass('active');
        } 
        else if(pos_body > 615 && pos_body < 1120 && window.innerWidth > 701){
            $('.home').removeClass('active');
            $('.info').addClass('active');
            $('.education').removeClass('active');
            $('.qualification').removeClass('active');
            $('.products').removeClass('active');
        } 
        else if ( pos_body > 1120 && pos_body < 1900 && window.innerWidth > 701) {
            $('.home').removeClass('active');
            $('.info').removeClass('active');
            $('.education').addClass('active');
            $('.qualification').removeClass('active');
            $('.products').removeClass('active');
        } 
        else if ( pos_body > 1900 && pos_body < 2590 && window.innerWidth > 701) {
            $('.home').removeClass('active');
            $('.info').removeClass('active');
            $('.education').removeClass('active');
            $('.qualification').addClass('active');
            $('.products').removeClass('active');
        } 
        else if ( pos_body > 2590 && window.innerWidth > 701) {
            $('.home').removeClass('active');
            $('.info').removeClass('active');
            $('.education').removeClass('active');
            $('.qualification').removeClass('active');
            $('.products').addClass('active');
        }
// show nav active for mobile
    if(pos_body < 685){
        $('.home').addClass('active');
        $('.info').removeClass('active');
        $('.education').removeClass('active');
        $('.qualification').removeClass('active');
        $('.products').removeClass('active');
    } 
    else if(pos_body > 685 && pos_body < 1772 && window.innerWidth < 701){
        $('.home').removeClass('active');
        $('.info').addClass('active');
        $('.education').removeClass('active');
        $('.qualification').removeClass('active');
        $('.products').removeClass('active');
    } 
    else if ( pos_body > 1772 && pos_body < 2855 && window.innerWidth < 701) {
        $('.home').removeClass('active');
        $('.info').removeClass('active');
        $('.education').addClass('active');
        $('.qualification').removeClass('active');
        $('.products').removeClass('active');
    } 
    else if ( pos_body > 2855 && pos_body < 3470 && window.innerWidth < 701) {
        $('.home').removeClass('active');
        $('.info').removeClass('active');
        $('.education').removeClass('active');
        $('.qualification').addClass('active');
        $('.products').removeClass('active');
    } 
    else if ( pos_body > 3470 && window.innerWidth < 701) {
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


// ========== Zoom photo feeds ==========

const ZoomPhoto1 = document.querySelector('#Zoom_photo_1')
const photoFeeds1 = document.querySelector('.photo_qualifi_1')

const ZoomPhoto2 = document.querySelector('#Zoom_photo_2')
const photoFeeds2 = document.querySelector('.photo_qualifi_2')

const ZoomPhoto3 = document.querySelector('#Zoom_photo_3')
const photoFeeds3 = document.querySelector('.photo_qualifi_3')

const ZoomPhoto4 = document.querySelector('#Zoom_photo_4')
const photoFeeds4 = document.querySelector('.photo_qualifi_4')

// ====== Open & Close Zoom photo feeds method==========

const openPhotoFeeds1 = () => {
    photoFeeds1.style.display = 'grid';
}
const closePhotoFeeds1 = (event) => {
    if (event.target.classList.contains('photo_qualifi_1')) {
        photoFeeds1.style.display = 'none';
    }
}

const openPhotoFeeds2 = () => {
    photoFeeds2.style.display = 'grid';
}
const closePhotoFeeds2 = (event) => {
    if (event.target.classList.contains('photo_qualifi_2')) {
        photoFeeds2.style.display = 'none';
    }
}

const openPhotoFeeds3 = () => {
    photoFeeds3.style.display = 'grid';
}
const closePhotoFeeds3 = (event) => {
    if (event.target.classList.contains('photo_qualifi_3')) {
        photoFeeds3.style.display = 'none';
    }
}

const openPhotoFeeds4 = () => {
    photoFeeds4.style.display = 'grid';
}
const closePhotoFeeds4 = (event) => {
    if (event.target.classList.contains('photo_qualifi_4')) {
        photoFeeds4.style.display = 'none';
    }
}

// ========== Open & Close Zoom photo feeds ==========

photoFeeds1.addEventListener('click', closePhotoFeeds1);
ZoomPhoto1.addEventListener('click', openPhotoFeeds1);

photoFeeds2.addEventListener('click', closePhotoFeeds2);
ZoomPhoto2.addEventListener('click', openPhotoFeeds2);

photoFeeds3.addEventListener('click', closePhotoFeeds3);
ZoomPhoto3.addEventListener('click', openPhotoFeeds3);

photoFeeds4.addEventListener('click', closePhotoFeeds4);
ZoomPhoto4.addEventListener('click', openPhotoFeeds4);