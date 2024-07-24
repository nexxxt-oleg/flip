document.addEventListener("DOMContentLoaded", () => {


    if (document.getElementById('indexSlider')) {
        new Swiper('#indexSlider', {
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '#indexSliderNext',
                prevEl: '#indexSliderPrev',
            },
            pagination: {
                el: '#indexSliderPag',
                clickable: true,
            },
        });
    }

    if(window.innerWidth < 768) {
        if (document.getElementById('primSlider')) {
            new Swiper('#primSlider', {
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '#primSliderNext',
                    prevEl: '#primSliderPrev',
                },
                pagination: {
                    el: '#primSliderPag',
                    clickable: true,
                },
            });
        }

        document?.getElementById('menuOpen').addEventListener("click", (event) => {
            if(document.getElementById('menuOpen').classList.contains('is-active')) {
                document.getElementById('menuOpen').classList.remove('is-active');
                document.getElementById('navigation').classList.remove('open');
                if(document.querySelector('.print__navigation__level2.menu2-open')) {
                    document.querySelector('.print__navigation__level2.menu2-open').classList.remove('menu2-open');
                }
                document.body.classList.remove('open');
            } else {
                document.getElementById('menuOpen').classList.add('is-active');
                document.getElementById('navigation').classList.add('open');
                document.body.classList.add('open');
            }
        });

        const navs = document.querySelectorAll('.print__navigation__mob-next-level');
        navs.forEach(el => {
            el.addEventListener('click', (e) => {
                let activeIdSubNav = el.dataset.target;
                document?.getElementById(activeIdSubNav).classList.add('menu2-open');
            });
        });

        const back_link = document.querySelectorAll('.print__navigation__level2__back');
        back_link.forEach(el => {
            el.addEventListener('click', (e) => {
                let activeIdSubNav = el.dataset.target;
                document?.getElementById(activeIdSubNav).classList.remove('menu2-open');
            });
        });
    } else {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 150) {
                document.getElementById('navigation').classList.add('fixed-top');
            } else {
                document.getElementById('navigation').classList.remove('fixed-top');

            }
        });
    }

    if (document.getElementById('formFileInput2')) {
        document.getElementById('formFileInput2').addEventListener('change', (e) => {
            let file = e.target.files[0];
            document.getElementById('fileList').innerHTML =  file.name;
        });
    }
});


(function( $ ) {
	'use strict';
    
    
    $('.alert .btn-close').click(function(e){
        e.preventDefault();
        $(this).closest('.alert').hide();
    });

    function getCookie() {
    	var cookies = document.cookie.match ( '(^|;) ?flypsite=([^;]*)(;|$)' );
        if (cookies) { $('.coocie_banner').remove(); }
    }

    $('.cookie_ok').click(function(event) {
        event.preventDefault();
        document.cookie = 'flypsite=yes; path=/; expires=01/01/2100 00:00:00';
        $('.coocie_banner').remove();
    });
    getCookie();

})( jQuery );