// start navbar

// start scroll smooth page
$(function () {
    $("#navbar li a").on('click', function () {
        let hash = this.hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 800)
    })
})

// start scroll to border list nav 



// start section Counter
var count3
var count4
var numScroll
var flag = 0;
$(window).scroll(function () {
    var wne = $(window).scrollTop();
    if (wne >= 150) {
        $(".navbar").addClass('navbar-scroll')
    }
    else {
        $(".navbar").removeClass('navbar-scroll')
    }

    // Calculate the distance from the top to the div Counter = ( (document.scrollTop) - (window.innerHeight = 100vh) + (div.counter-row paddingTop = 48px) = srart counter )
    let _1vh = Math.round(window.innerHeight)
    let veiwSectionTop = $('.counter-row').offset().top - _1vh + 48

    numScroll = $(document).scrollTop()
    if (flag == 0) {
        if (numScroll >= veiwSectionTop) {
            flag = 1;
            // start contar one
            var setInterval1
            var count1
            count1 = document.querySelector(".count1");
            var contar = 2036
            var setInterval1 = setInterval(() => {
                count1.innerText = contar
                contar++
                if (contar >= 2536) {
                    clearInterval(setInterval1)
                }
            }, 0);
            // start contar tow
            var setInterval2
            var count2
            count2 = document.querySelector(".count2");
            var contar2 = 7062;
            var setInterval2 = setInterval(() => {
                count2.innerText = contar2
                contar2++
                if (contar2 >= 7562) {
                    clearInterval(setInterval2)
                }
            }, 0);
            // start contar three
            var setInterval3
            var count3
            count3 = document.querySelector(".count3");
            var contar3 = 1513;
            var setInterval3 = setInterval(() => {
                count3.innerText = contar3
                contar3++
                if (contar3 >= 2013) {
                    clearInterval(setInterval3)
                }
            }, 0);
            // start contar four
            var setInterval4
            var count4
            count4 = document.querySelector(".count4");
            var contar4 = 10036;
            var setInterval4 = setInterval(() => {
                count4.innerText = contar4
                contar4++
                if (contar4 >= 10536) {
                    clearInterval(setInterval4)
                }
            }, 0);

        }
    }
})
