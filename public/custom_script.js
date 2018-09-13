//run on document load and on window resize
$(document).ready(function () {
//=========================ready for executing the functions============================
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".mrg_dashboard_right").css('width', '92%');

    });
    var toggle = true;
    $("#menu-toggle").click(function () {
        if (toggle) {
            $(".mrg_dashboard_right").css('width', '92%');
            $('#Group_123').find('image').first().hide(300);
            $('#wrapper span').hide(300);
            $(".sidebar-nav li a span").css('display', 'none');

        } else {
            //console.log('ssssssssssss');
            $('#Group_123').find('image').first().show(300);
            $(".mrg_dashboard_right").css('width', '83.33%');
            $(".sidebar-nav li a span").css('display', 'contents');
            $('#wrapper span').show(300);
        }
        toggle = !toggle;
    });
    $("#menu-toggle_mobile").click(function () {
        //e.preventDefault();
        $("#mobile_menu_sm").slideToggle();
    });
    //the function to hide the div
    function hideDiv() {
        if (window.matchMedia('(max-width: 767px)').matches) {
//alert($(window).width());
            $(".display_none_full_menu").hide();
            $(".dashboard_new").css('width', '100%');
        } else {
            $("#mobile_menu_sm").hide();
            $(".mrg_dashboard_right").css('width', '83.33%');
            $(".display_none_full_menu").show();
        }
    }
     $("#music").click(function() {
            $("#musicinfo").toggle();
        });
//==================================================================================================
    //on load
    hideDiv();
    //on resize
    $(window).resize(function () {
        hideDiv();
    });
});