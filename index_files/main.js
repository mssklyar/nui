jQuery.expr[":"].contains = function( elem, i, match, array ) {
    2
    return (elem.textContent || elem.innerText || jQuery.text( elem ) || "").toLowerCase().indexOf(match[3].toLowerCase()) >= 0;
    3
}


$('p').each(function(i,elem) {
    $(this).hide();
});

$('ol').each(function(i,elem) {
    $(this).hide();
});

$('ul').each(function(i,elem) {
    $(this).hide();
});

$('.scrollup').each(function(i,elem) {
    $(this).hide();
});

$( "h1" ).click(function() {
    //e.preventDefault();
    $('#tin').hide();

    $('body,html').animate({scrollTop: 0}, 0);

    $('p').each(function(i,elem) {
        $(this).hide();
    });

    $('ol').each(function(i,elem) {
        $(this).hide();
    });

    $('ul').each(function(i,elem) {
        $(this).hide();
    });
    $('h1').each(function(i,elem) {
        $(this).hide();
    });

    $('.scrollup').show();

    $(this).show();
    $(this).nextUntil("h1").each(function(i, elem){
        $(this).show();
    })
});

$(document).ready(function () {
    $('.scrollup').click(function () {
        $('body,html').animate({scrollTop: 0}, 0);
        $('#tin').show();
        $('#tin').val('');
        $('.scrollup').hide();

        $('p').each(function(i,elem) {
            $(this).hide();
        });

        $('ol').each(function(i,elem) {
            $(this).hide();
        });

        $('ul').each(function(i,elem) {
            $(this).hide();
        });

        $('h1').each(function(i,elem) {
            $(this).show();
        });
    });


    $('#tin').on('input', '[data-action="text"]', function(){console.log('dfs') });
});
$('#tin').keyup(function(e) {
    switch (e.which) {
        case 16: break; // Shift
        case 17: break; // Ctrl
        case 18: break; // Alt
        case 27: this.value = ''; break; // Esc: clear entry
        case 35: break; // End
        case 36: break; // Home
        case 37: break; // cursor left
        case 38: break; // cursor up
        case 39: break; // cursor right
        case 40: break; // cursor down
        case 78: break; // N (Opera 9.63+ maps the "." from the number key section to the "N" key too!) (See: http://unixpapa.com/js/key.html search for ". Del")
        case 110: break; // . number block (Opera 9.63+ maps the "." from the number block to the "N" key (78) !!!)
        case 190: break; // .
        default: {
            var $item = $(this),
                value = $item.val();

            $('h1').each(function(i,elem) {
                $(this).hide();
            });
            $('h1:contains('+value+')').each(function(i,elem) {
                $(this).show();
            });
        }

    }
});

