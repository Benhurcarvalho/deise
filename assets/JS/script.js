$(document).ready(function() {
    // progressBar

    let containerA =document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        
        color: 'rgb(150, 53, 65)',
        strokeWidth: 8,
        duration: 1000,
        from: { color: 'rgb(255,243,245)' },
        to: { color: 'rgb(150, 53, 65)' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60)

            circle.setText(value);
        }
    });

    let containerB =document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        
        color: 'rgb(150, 53, 65)',
        strokeWidth: 8,
        duration: 1500,
        from: { color: 'rgb(255,243,245)' },
        to: { color: 'rgb(150, 53, 65)' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 100)

            circle.setText(value);
        }
    });

    let containerC =document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        
        color: 'rgb(150, 53, 65)',
        strokeWidth: 8,
        duration: 2000,
        from: { color: 'rgb(255,243,245)' },
        to: { color: 'rgb(150, 53, 65)' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 660)

            circle.setText(value);
        }
    });

    let containerD =document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        
        color: 'rgb(150, 53, 65)',
        strokeWidth: 8,
        duration: 3400,
        from: { color: 'rgb(255,243,245)' },
        to: { color: 'rgb(150, 53, 65)' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5700)

            circle.setText(value);
        }
    });

    // iniciando ao rolar a página

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }

    })

    //  Paralax

    setTimeout(function() {

        $('#data-area').parallax({ imageSrc: 'https://scontent.fplu27-1.fna.fbcdn.net/v/t39.30808-6/341700235_587042743391112_1763651338571046182_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEoGQRRAduUhcWtdYRbOxWldLlFeBy98cJ0uUV4HL3xwsQH4GeOBRrmStVbSOULORjc0WtxmqPJgwYzknnI6J-u&_nc_ohc=VnLJaD1rB40AX9Qts3P&_nc_ht=scontent.fplu27-1.fna&oh=00_AfB_mHkIgQtBHkcLb19Es_XlI0sNgieQS06M0_E7zzKLMA&oe=646629DC'})
        $('#apply-area').parallax({ imageSrc: 'https://www.todofondos.net/wp-content/uploads/todofondos-4KparaPC18-768x432.jpg'})

    }, 250)

    // Filtro do portifólio

    // dev = btn 1
    // dsg = btn 2
    // seo = btn 3

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');
        // console.log(type, boxes)

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        eachBoxes(type.replace('-btn', ''), boxes)

    })

    function eachBoxes(type, boxes) {
        console.log(type)

        if( type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow')
                } else {
                    $(this).fadeIn();
                }
            })
        }
    }

})