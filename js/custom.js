$(document).ready(function(){
        $("#schedule").modal('show');
    });



function initMap() {
    var grit = {
        lat: 40.354101,
        lng: -74.6616664
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: grit
    });

    var markerImage = 'img/logopoint.png';

   
    
     var contentString = '<div class="info-window">' +
            '<h3>Grit + Polish</h3>' +
            '<div class="info-content">' +
            '<p>160 Witherspoon Street, Princeton, NJ 08542</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 300
        });
    
     var marker = new google.maps.Marker({
        position: grit,
        map: map,
        title: 'Grit +',
        icon: markerImage
    });
    
    
     marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
}

 var p = window.location.hash;
 console.log(p);

 $(document).ready(function () {
     if (p == "#new") {
         console.log(p); 
    $("#pills-manicure-tab").removeClass("active");
    $("#pills-manicure").removeClass("show active");
    $("#pills-massage-tab").addClass("active");
    $("#pills-massage").addClass("show active");

     }

});

  var promo = window.location.hash;
     $(document).ready(function () {
        if (promo == "#promo") {
    $("#pills-manicure-tab").removeClass("active");
    $("#pills-manicure").removeClass("show active");
    $("#pills-waxing-tab").addClass("active");
    $("#pills-waxing").addClass("show active");

     }

});

 $(document).ready(function() {
    var s = $("#gift");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 100) {
            s.addClass("fixed-top");
            s.removeClass("sticky-top");
             $("#gc").removeClass("slideshow");
             $("#gc").addClass("slideshow2");
        } else {
            s.removeClass("fixed-top");
            s.addClass("sticky-top");
            $("#gc").addClass("slideshow");
             $("#gc").removeClass("slideshow2");

        }
    });
});


 
    